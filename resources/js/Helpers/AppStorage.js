class AppStorage {
    storeToken(token) {
        localStorage.setItem('token', token);
    }

    storeUser(user) {
        localStorage.setItem('user', user);
    }


    // For login function, get the token and user name of the user that login
    store(token, user) {
        this.storeToken(token)
        this.storeUser(user)
    }

    getToken() {
        return localStorage.getItem('token')
    }

    getUser() {
        return localStorage.getItem('user')
    }

    // For logout
    clear() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
}

export default AppStorage = new AppStorage();
