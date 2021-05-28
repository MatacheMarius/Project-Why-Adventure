import axios from 'axios'

const signup = (user) => axios.post("/api/users/signup", user);
const login = (user) => axios.post("/api/users/login", user);
const logout = () => axios.post("/api/users/logout")
const authenticatedUser = () => axios.get("/api/users/authenticatedUser");


export {
    signup,
    login,
    logout,
    authenticatedUser
}