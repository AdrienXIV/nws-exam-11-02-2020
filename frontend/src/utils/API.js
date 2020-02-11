import axios from "axios";
const headers = {
    "Content-Type": "application/json"
};

const burl = "http://localhost:8080";

export default {
    // admin login
    admin_login: function (email, password) {
        return axios.post(
            `${burl}/admin/login`,
            {
                email,
                password
            },
            {
                headers: headers
            }
        );
    },
    user_login: function (email, password) {
        return axios.post(
            `${burl}/user/login`,
            {
                email,
                password
            },
            {
                headers: headers
            }
        );
    },
    getArticles:function(){
        return axios.get(
            `${burl}/blog`
        )
    },
    isAuth: function () {
        return localStorage.getItem("token") !== null;
    },
    logout: function () {
        localStorage.clear();
    }
};