import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
export const useTypeFilmsStore = defineStore('type_films', () => {
  const type_films = ref()

  axios
  .get("http://127.0.0.1:4212/type_films")
  .then((res) => (type_films.value = res.data));

  return { type_films }
})