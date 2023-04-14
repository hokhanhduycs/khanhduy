import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFilmStore = defineStore('film', () => {
  const film = ref({
    film_id: null,
    film_chap: '',
    film_name: '',
    film_img: '',
    film_describe: '',
    film_tags: [],
    film_types: []
  })
  function setName(name) {
    film.film_name = name
  }
  function setChap(Chap) {
    film.film_Chap = Chap
  }
  function setImg(Img) {
    film.film_Img = Img
  }
  function setDescribe(Describe) {
    film.film_Describe = Describe
  }
  function setTaps(Taps) {
    film.film_Taps = Taps
  }
  function setTypes(Types) {
    film.film_Types = Types
  }
  return { film, setChap, setName, setChap, setImg, setDescribe, setTaps, setTypes }
})