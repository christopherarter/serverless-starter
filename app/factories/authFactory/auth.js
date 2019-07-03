/**
 * Auth abstraction.
 */
export default (_authDriver) => ({
    authDriver: _authDriver,
    login: (username, password, remember = null) => ( this.authDriver.login(username, password, remember = null) ),
    logout: () => ( this.authDriver.logout() ),
    getCurrentUser: () => ( this.authDriver.getCurrentUser() ),
})
