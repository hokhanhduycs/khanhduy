<script setup>
import { ref } from "vue";
import axios from "axios";

import Button from "@/components/Button.vue";

import Input from "@/components/Input.vue";

import { addTypeTagStore } from "../stores/counter";
import { useTagFilmsStore } from "../stores/tag-films";
import { useTypeFilmsStore } from "../stores/type-films";


const showAddTypeTag = addTypeTagStore();
const tagFilmsStore = useTagFilmsStore();
const typeFilmsStore = useTypeFilmsStore();
const propsd = defineProps({
  // showAdd: Boolean
  // dataFilm: Object
  title: String,
  data: Object,
});

const emits = defineEmits(['updateData'])


const addType = () => {
  typeFilmsStore.add(propsd.data)
  showAddTypeTag.setShowAddTypeTag(false)
};
const close = () => {
  showAddTypeTag.setShowAddTypeTag(false)
}
const addTag = () => {
  tagFilmsStore.add(propsd.data)
  showAddTypeTag.setShowAddTypeTag(false)
};
</script>
<template>
  <!-- <div v-show="adminStore.showAdd" class="add" > -->
  <div  class="add">
    <div class="box">
      <h2 class="title">{{ title }}</h2>
      {{ data }}
      <hr />
      <div class="content row">
        <div class="film_id c-12">
          <label for="film_name">{{ title }} id:</label>
          <!-- <span class="content_id">{{ data[`${title}_film_id`] }}</span>  -->
          <span class="content_id">{{ data[`${title}_film_id`] }}</span>
        </div>

        <div class="film_name c-12">
          <Input
            :label="`${title} name`"
            :placeholder="`${title} name`"
            v-model="data[`${title}_film_name`]"
          ></Input>
        </div>
      </div>
      <hr />
      <div class="btn">
        <Button @click.native="close()" danger>Close</Button>
        <Button v-if="title == 'type'" @click.native="addType()" success>Save</Button>
        <Button v-if="title == 'tag'" @click.native="addTag()" success>Save</Button>
      </div>
    </div>
    <div @click="close()" class="close">
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
    width: 40vw;
    height: 50vh;
    background-color: #fff;
    box-shadow: 0px 0px 68px 12px rgba(0, 0, 0, 0.1);
    padding: 18px;
    border-radius: 8px;
    min-width: 500px;
    padding: 16px;

    .title {
      margin: 4px 12px;
      font-size: 18px;
      text-transform: capitalize;
    }
    .content {
      height: 300px;
      margin: 16px;

      label,
      .content_id {
        margin: 6px 8px;
        font-size: 15px;
        font-weight: 700;
        text-transform: capitalize;
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
    transform: translate(-2vh, -25vh);
    &:hover {
      background-color: #c00000;
    }
  }
}
</style>
