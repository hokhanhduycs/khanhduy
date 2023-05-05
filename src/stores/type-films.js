import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
export const useTypeFilmsStore = defineStore('type_films', () => {
  const type_films = ref()
  const type_film = ref({
    type_film_id: null,
    type_film_name: ''
  })

  axios
  .get("http://127.0.0.1:4212/type_films")
  .then((res) => (type_films.value = res.data));

  const add = (data) =>{
    axios
    .post("http://127.0.0.1:4212/type_film", data)
    .then((res) => type_films.value.push(res.data));
  }
  const del = (id) =>{
    axios
    .delete(`http://127.0.0.1:4212/type_film/${id}`)
    .then(res =>{console.log('da xoa thanh cong');})

    const i = type_films.value.map(item => item.type_film_id).indexOf(id)
    type_films.value.splice(i, 1)
  }

  const edit = (id) =>{
    // console.log(id);
    axios.get(`http://127.0.0.1:4212/type_film/${id}`)
    .then((res) =>{
      type_film.value.type_film_id = res.data.type_film_id,
      type_film.value.type_film_name = res.data.type_film_name
    })
    // console.log(type_film.value);
    // return d
  }
  return { type_films, type_film, del, add, edit }
})