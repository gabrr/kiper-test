export const hasStorage = key => {
    const data = window.localStorage.getItem(key)
    return data ? true : false
}

export const setStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data))
    return hasStorage(key) ? 'Added Successfuly' : 'Error to remove'
}

export const getStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key))
}

export const removeStorage = (key) => {
    window.localStorage.removeItem(key)
    return hasStorage(key) ? 'Error to remove' : 'Removed Successfuly'
}