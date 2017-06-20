import axios from "axios";

const API = {
//get all articles from db
getArticles: function () {
    return axios.get('/articles');
},


//get all notes from db per article when clicked
getNotes: function (id) {
    return axios.get(`/articles/${id}`);
},


//add note to database on save
saveNote: function (id) {
    return axios.post(`/submit/${id}`);
}


}

export default API;