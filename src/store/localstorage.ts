const getCurrentSession = () => {
    const stored = localStorage.getItem('session')
    if(stored) {
        return JSON.parse(stored)
    } else {
        return null;
    }
}

export default getCurrentSession;