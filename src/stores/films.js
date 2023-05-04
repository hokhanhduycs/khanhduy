import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
export const useFilmsStore = defineStore('film', () => {
  const films = ref()

  axios
  .get('http://127.0.0.1:4212/films')
  .then(response => films.value = response.data)
  .catch(error => console.log(error))
  
  const del = (id) =>{
    axios
    .delete(`http://127.0.0.1:4212/film/${id}`)
    .then(res =>{console.log('da xoa thanh cong');})

    const i = films.value.map(item => item.film_film_id).indexOf(id)
    films.value.splice(i, 1)
  }

  const add = (data) =>{
    axios
    .post("http://127.0.0.1:4212/film", data)
    .then((res) => films.value.push(res.data));
  }

  const edit = (id) =>{

  }

  return { films, del, add, edit}
})