import IUser from "../models/IUser";

const URL : string = "https://seventh-noroff-task-api.herokuapp.com/translations";
const APIKEY : string = "6HwocSllWj6Tf2aKQb17HFqmh4yf6zn8rw0CakPXzYPKBuMNpjBfmp67x6M2RJOE"

const fetchUser = async (username : string) => {
    try {
        const user : IUser[] = await fetch(`${URL}?username=${username}`)
            .then(response => response.json())
            .then(result => result)

        if (user.length < 1) {
            const user = await createUser(username);
            return [null, user];
        }
        
        return [null, user[0]]
    } catch (error) {
        return [error, null]
    }
}

const createUser = async (username : string) => {
    const newUser = await fetch(`${URL}`, {
        method: 'POST',
        headers: {
            'X-API-Key': APIKEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            translations: []
        })
    }).then(response => {
        if(!response.ok) {
            throw new Error('User could not be created')
        }
        return response.json();
    }).then(result => result);
    
    return newUser;
}

const updateTranslations = async (user : IUser, translations: string[] ) => {
    try {
        const updatedUser = await fetch(`${URL}/${user.id}`, {
            method: 'PATCH',
            headers: {
                'X-API-Key': APIKEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations
            })
        }).then(response => {
            return response.json()
        }).then(result => {
            return result
        })
        return [null, updatedUser]
    } catch (error) {
        return [error, null]
    }
}

const addToTranslations = (user : IUser, translation: string ) => {
    updateTranslations(user, [...user.translations, translation]);
}

const clearAllTranslations = (user : IUser) => {
    updateTranslations(user, []);
}

const removeFromTranslations = (user : IUser, translation: string ) => {
    const translations = [...user.translations];
    const removeIndex = translations.indexOf(translation);
    if(removeIndex !== -1) {
        translations.splice(removeIndex, 1);
    }
    updateTranslations(user, translations);
}

export {fetchUser, addToTranslations, clearAllTranslations, removeFromTranslations}