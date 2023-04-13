<template>
  <div class="film">
    {{ films }}
    <h3 class="title">Film</h3>
    <div class="btn">
      <Button @click.native="addNew()">+ Add new</Button>
    </div>
    <div class="table-th row">
      <div class="c-1 t-j id">ID</div>
      <div class="c-1 t-j img">Image</div>
      <div class="c-3 t-j name-film">Name Film</div>
      <div class="c-3 t-j tags-film">Tags Film</div>
      <div class="c-2 t-j current-chap">Current Chap</div>
      <div class="c-2 t-j control">Control</div>
    </div>

    <div v-for="(film, index) in films" :key="index" class="table-td row">
      <div class="c-1 t-j id">{{ film.film_id }}</div>
      <div class="c-1 t-j img">
        <img :src="film.film_img" alt="">
      </div>
      <div class="c-3 t-j name-film">{{ film.film_name }}</div>
      <div class="c-3 t-j tags-film row">
        <div class="tag" small v-for="tag in film.tags" :key="tag">
          {{ tag.tag_title }}
        </div>
      </div>
      <div class="c-2 t-j current-chap">{{ film.chap }}</div>
      <div class="c-2 t-j control row">
        <div class="edit" @click="editFilm()">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        </div>
        <div class="del"><font-awesome-icon icon="fa-solid fa-trash" /></div>
      </div>
    </div>
    <Add :showAdd="showAdd" :dataFilm="dataFilm"></Add>
  </div>
</template>
<script setup>
import Button from "@/components/Button.vue";
import Add from '@/admin/Add.vue'
import { onMounted, ref } from "vue";
import { useAdminStore } from '../stores/counter';
import axios from "axios";

const showAdd = ref(true)
const adminStore = useAdminStore()
const dataFilm = ref({
  film_id: -1,
  film_chap: '',
  film_name: '',
  film_img: '',
  film_describe: '',
  film_tags: [],
  film_types: []

})
const addNew = () =>{
  adminStore.setShowAdd(true)
  const id = -1
  dataFilm.value.film_id = null
  dataFilm.value.film_chap = ""
  dataFilm.value.film_name= ""
  dataFilm.value.film_img = ""
  dataFilm.value.film_describe = ""
  dataFilm.value.film_tags = []
  dataFilm.value.film_types = []
}
// const editFilm = (id) =>{
const editFilm = () =>{
  adminStore.setShowAdd(true)
  const id = 1
  dataFilm.value.film_id = id
  dataFilm.value.film_chap = "tap 10"
  dataFilm.value.film_name= 'aaflkj'
  dataFilm.value.film_img = ""
  dataFilm.value.film_describe = "hay"
  dataFilm.value.film_tags = ['tag 1', 'tag 2']
  dataFilm.value.film_types = ['type 1']
}
const films = ref([]);



onMounted(() => {
    axios
    .get('http://127.0.0.1:4212/films')
    .then(response => films.value = response.data)
    .catch(error => console.log(error))
  })
</script>
<style scoped lang="scss">
.film {
  background-color: #47d4f752;
  min-height: calc(100vh - 120px);
  position: relative;
  width: 100%;
  margin: 18px;
  background-color: #ffffff;
  min-height: 97%;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 12px;
  .tag {
    background-color: #6ab0ff;
    border-radius: 8px;
    height: 20px;
    font-size: 15px;
    text-transform: capitalize;
    padding: 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    & ~ .tag {
      margin-left: 2px;
    }
  }
  .title {
    margin-bottom: 8px;
    font-size: 18px;
  }
  .btn {
    margin: 8px 16px;
  }
  .table-th {
    background-color: #e0e0e0;
    padding: 8px;
    border-radius: 8px;
    min-width: 500px;
    .t-j {
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .table-td {
    padding: 8px;
    border-bottom: solid 1px #ccc;
    min-width: 500px;
    .id {
      font-weight: 600;
    }
    .t-j {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .edit {
        color: #22c55e;
        margin: 0 12px;
      }
      .del {
        color: #ce1d1d;
        padding: 0 12px;
      }
    }
  }
}
</style>
