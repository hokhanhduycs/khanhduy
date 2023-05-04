import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
export const useTagFilmsStore = defineStore('tag_films', () => {
  const tag_films = ref()

  axios
  .get("http://127.0.0.1:4212/tag_films")
  .then((res) => (tag_films.value = res.data));

  return { tag_films }
})