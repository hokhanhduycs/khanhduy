import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
export const useTagFilmsStore = defineStore('tag_films', () => {
  const tag_films = ref()

  axios
  .get("http://127.0.0.1:4212/tag_films")
  .then((res) => (tag_films.value = res.data));

  const add = (data) =>{
    axios
    .post("http://127.0.0.1:4212/tag_film", data)
    .then((res) => tag_films.value.push(res.data));
  }
  const del = (id) =>{
    axios
    .delete(`http://127.0.0.1:4212/tag_film/${id}`)
    .then(res =>{console.log('da xoa thanh cong');})

    const i = tag_films.value.map(item => item.tag_film_id).indexOf(id)
    tag_films.value.splice(i, 1)
  }

  const edit = (id) =>{

  }
  return { tag_films, del, add, edit }
})