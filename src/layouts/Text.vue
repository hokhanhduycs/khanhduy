<template>
    <div>
      <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post }}
      </li>
    </ul>
    <input type="text" v-model="film.film_name">
    <p>The film is: {{ film.film_name }}</p>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import {  ref, onMounted  } from 'vue'
  
  const posts = ref([])

  const film = ref({
    film_id: -1,
    film_chap: '',
    film_name: '',
    film_img: '',
    film_describe: '',
    film_tags: [],
    film_types: []
  });



  onMounted(() => {
    axios
    .get('http://127.0.0.1:4212/films')
    .then(response => posts.value = response.data)
    .catch(error => console.log(error))
  })

  </script>
  