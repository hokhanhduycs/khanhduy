<script setup>
import { ref } from "vue";
// import axios from "axios";

import Button from "@/components/Button.vue";
import Tag from "@/components/Tag.vue";
import Input from "@/components/Input.vue";
import Textarea from "@/components/Textarea.vue";
import AutoComplete from "@/components/AutoComplete.vue";
// import CustomInput from '@/layouts/CustomInput.vue'

import { useAdminStore } from "../stores/counter";
import { useTagFilmsStore } from "../stores/tag-films";
import { useTypeFilmsStore } from "../stores/type-films";
import { useFilmsStore } from "../stores/films";

const adminStore = useAdminStore();
const tagFilmsStore = useTagFilmsStore();
const typeFilmsStore = useTypeFilmsStore();
const filmsStore = useFilmsStore();
const propsd = defineProps({
  // showAdd: Boolean
  dataFilm: Object,
});

const selectTag = ref([])
const selectType = ref([])
const addFilm = () => {
  filmsStore.add(propsd.dataFilm, selectTag, selectType)
  // adminStore.setShowAdd(false)
  // console.log(selectTag.value);
  // console.log(selectType.value);
};

const img_src = ref("./images/film/filmTest.jpg");


const data = ref(propsd.dataFilm);
const loadFile = () => {
  // console.log(event.target.files[0].name);
  propsd.dataFilm.film_img = event.target.files[0].name;
};
</script>
<template>
  <div v-show="adminStore.showAdd" class="add">
    <div class="box">
      <h2 class="title">Film</h2>
      <!-- {{ data }} -->
      <hr />
      <div class="content row">
        <div class="film_id c-6">
          <label for="film_name">Film id:</label>
          <span class="content_id">{{ dataFilm.id }}</span>
        </div>
        <div class="film_chap c-6 row">
          <label for="film_name">Film Chap:</label>
          <span>
            <Tag v-show="dataFilm.chap">{{ dataFilm.chap }}</Tag>
          </span>
        </div>
        <div class="film_name c-12">
          <Input
            label="Film name"
            placeholder="Film name"
            v-model="data.film_name"
          ></Input>
        </div>
        <div class="film_img c-12 row">
          <div class="c-12">
            <label for="film_img ">Film Image:</label>
          </div>
          <div class="c-4">
            <img :src="img_src" alt="image film" />
          </div>
          <div class="c-8">
            <input type="file" accept="image/*" @change="loadFile(event)" />
          </div>
        </div>
        <div class="film_describe c-12">
          <Textarea
            v-model="dataFilm.film_describe"
            label="Film describe"
            placeholder="Describe ..."
          ></Textarea>
        </div>
        <div class="film_tags c-12">
          <!-- {{ tagFilmsStore.tag_films }} -->
          <AutoComplete
            :type="'tag'"
            :lists="tagFilmsStore.tag_films"
            @updateSelected="selectTag = $event"
            :selected="selectTag"
            label="Tags of Film"
            ></AutoComplete>
        </div>
        <!-- {{ dataFilm.film_tags }} -->
        <div class="film_types c-12">
          <!-- {{ typeFilmsStore.type_films }} -->
          <AutoComplete
            :type="'type'"
            :lists="typeFilmsStore.type_films"
            :selected="selectType"
            label="Types of Film"
            @updateSelected="selectType = $event"
          ></AutoComplete>
        </div>
        <!-- {{ dataFilm.film_types }} -->
      </div>
      <hr />
      <div class="btn">
        <Button @click.native="adminStore.setShowAdd(false)" danger
          >Close</Button
        >
        <Button @click.native="addFilm()" success>Save</Button>
      </div>
    </div>
    <div class="close" @click="adminStore.setShowAdd(false)">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.add {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff71;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 60vw;
    height: 80vh;
    background-color: #fff;
    box-shadow: 0px 0px 68px 12px rgba(0, 0, 0, 0.1);
    padding: 18px;
    border-radius: 8px;
    min-width: 600px;
    padding: 16px;

    .title {
      margin: 4px 12px;
      font-size: 18px;
    }
    .content {
      overflow-y: scroll;
      min-height: 600px;
      max-height: 650px;
      margin: 16px;
      overflow-y: scroll;

      label,
      .content_id {
        margin: 6px 8px;
        font-size: 15px;
        font-weight: 700;
      }
      .film_img {
        padding: 0 16px;
        img {
          height: 80px;
        }
      }
    }

    .btn {
      width: 95%;
      display: flex;
      justify-content: end;
      margin: 16px;
      height: 40px;
    }
  }
  .close {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-2vh, -40vh);
    &:hover {
      background-color: #c00000;
    }
  }
}
</style>
