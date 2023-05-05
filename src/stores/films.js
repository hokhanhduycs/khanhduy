import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
export const useFilmsStore = defineStore('film', () => {
  const films = ref([])
  axios
  .get('http://127.0.0.1:4212/films')
  .then(res => {
    res.data.map((film) =>{
      axios
      .get(`http://127.0.0.1:4212/tags_of_film/${film.film_id}`)
      .then(tags => {
        axios
        .get(`http://127.0.0.1:4212/types_of_film/${film.film_id}`)
        .then(types => {
          films.value.push({
            ...film,
            film_tags: tags.data,
            film_types: types.data
          })
        })
      })      
    })
  })
  .catch(error => console.log(error))
  
  const del = (id) =>{
    axios
    .delete(`http://127.0.0.1:4212/film/${id}`)
    .then(res =>{console.log('da xoa thanh cong');})

    const i = films.value.map(item => item.film_id).indexOf(id)
    films.value.splice(i, 1)
  }

  const add = (data, tags, types) =>{
    // let film_id = 0
    axios
    .post("http://127.0.0.1:4212/film", data)
    .then((res) => {
      films.value.push({
        ...res.data,
        film_tags: tags,
        film_types: types
      })
  
      tags.value.map(tag =>{
        axios
        .post('http://127.0.0.1:4212/film_tag', {
            film_id: res.data.film_id, 
            tag_id: tag.tag_film_id
        })
        .then(res => console.log(res.data))
      })

      types.value.map(type =>{
        axios
        .post('http://127.0.0.1:4212/film_type',{
          film_id: res.data.film_id, 
          type_id: type.type_film_id
        })
        .then(res => console.log(res.data))
      })
    });
  }

  const edit = (id) =>{

  }

  return { films, del, add, edit}
})