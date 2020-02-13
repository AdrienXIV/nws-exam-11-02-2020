import axios from "axios";

const burl = "http://localhost:8080";

export default { 
    // récupérer tous les articles   
    getArticles:function(){
        return axios.get(
            `${burl}/blog`
        )
    },
    // récupérer un article
    getArticle:function(id){
        return axios.get(
            `${burl}/blog/` + id
        )
    }
};