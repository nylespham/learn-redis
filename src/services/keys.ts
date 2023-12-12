export const pageCacheKey = (id: string) => {
    return(`pagecache#${id}`)
}

export const usersKey = (userId: string) => {
    return(`users#${userId}`)
}

export const sessionsKey = (sessionId: string) => {
    return(`sessions#${sessionId}`);
}

export const itemsKey = (itemId: string) => {
    return(`items#${itemId}`);
}

export const usernameUniqueKey = () => {
    return("username:unique");
}

export const userLikeKey = (userId: string) => {
    return(`user:likes#${userId}`);
}

export const usernameKey = () => {
    return("username");
}