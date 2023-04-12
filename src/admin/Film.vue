<template>
  <div class="film">
    <h3 class="title">Film</h3>
    <div class="btn">
      <Button @click.native="addNew()">+ Add new</Button>
    </div>
    <div class="table-th row">
      <div class="c-1 t-j id">ID</div>
      <div class="c-4 t-j name-film">Name Film</div>
      <div class="c-3 t-j tags-film">Tags Film</div>
      <div class="c-2 t-j current-chap">Current Chap</div>
      <div class="c-2 t-j control">Control</div>
    </div>

    <div v-for="(film, index) in films" :key="index" class="table-td row">
      <div class="c-1 t-j id">{{ film.id }}</div>
      <div class="c-4 t-j name-film">{{ film.title }}</div>
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
import { ref } from "vue";
import { useAdminStore } from '../stores/counter';

const showAdd = ref(true)
const adminStore = useAdminStore()
const dataFilm = ref({
  id: -1,
  chap: '',
  name: '',
  img: '',
  describe: '',
  tags: [],
  types: []

})
const addNew = () =>{
  adminStore.setShowAdd(true)
  const id = -1
  dataFilm.value.id = null
  dataFilm.value.chap = ""
  dataFilm.value.name= ''
  dataFilm.value.img = ""
  dataFilm.value.describe = ""
  dataFilm.value.tags = []
  dataFilm.value.types = []
}
// const editFilm = (id) =>{
const editFilm = () =>{
  adminStore.setShowAdd(true)
  const id = 1
  dataFilm.value.id = id
  dataFilm.value.chap = "tap 10"
  dataFilm.value.name= 'aaflkj'
  dataFilm.value.img = ""
  dataFilm.value.describe = "hay"
  dataFilm.value.tags = ['tag 1', 'tag 2']
  dataFilm.value.types = ['type 1']
}
const films = ref([
  {
    id: 1,
    title: "Title  sflkasf ",
    tags: [
      {
        tag_id: 1,
        tag_title: "tag 1",
      },
      {
        tag_id: 2,
        tag_title: "tag 2",
      },
    ],
    chap: "Tap 1",
  },
  {
    id: 1,
    title: "Title  sflkasf ",
    tags: [
      {
        tag_id: 1,
        tag_title: "tag 1",
      },
      {
        tag_id: 2,
        tag_title: "tag 2",
      },
    ],
    chap: "Tap 1",
  },
  {
    id: 1,
    title: "Title  sflkasf ",
    tags: [
      {
        tag_id: 1,
        tag_title: "tag 1",
      },
      {
        tag_id: 2,
        tag_title: "tag 2",
      },
    ],
    chap: "Tap 1",
  },
  {
    id: 1,
    title: "Title  sflkasf ",
    tags: [
      {
        tag_id: 1,
        tag_title: "tag 1",
      },
      {
        tag_id: 2,
        tag_title: "tag 2",
      },
    ],
    chap: "Tap 1",
  },
]);
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
