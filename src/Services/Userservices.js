export const userService = {
    logout
};

function logout() {
    // remove username and password from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
}
