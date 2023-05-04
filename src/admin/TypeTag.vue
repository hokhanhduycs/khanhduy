<template>
  <div class="typetag row">
    <div class="c-6 type">
      <div class="table">
        <h3 class="title">Types</h3>
        <div class="btn">
          <Button @click.native="addNewType()">+ Add new</Button>
        </div>
        <div class="table-th row">
          <div class="c-2 t-j id">ID</div>
          <div class="c-7 t-j name-film">Name Type</div>
          <div class="c-3 t-j control">Control</div>
        </div>
        <div v-for="(type, index) in typeFilmsStore.type_films" :key="index" class="table-td row">
          <div class="c-2 t-j id">{{ type.type_film_id }}</div>
          <div class="c-7 t-j name-film">{{ type.type_film_name }}</div>
          <div class="c-3 t-j control">
            <div class="edit" @click="editType(type.type_film_id)">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </div>
            <div class="del" @click="delType(type.type_film_id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-6 tag">
      <div class="table">
        <h3 class="title">Tags</h3>
        <div class="btn">
          <Button @click.native="addNewTag()">+ Add new</Button>
        </div>
        <div class="table-th row">
          <div class="c-2 t-j id">ID</div>
          <div class="c-7 t-j name-film">Name Tag</div>
          <div class="c-3 t-j control">Control</div>
        </div>
        <div v-for="(tag, index) in tagFilmsStore.tag_films" :key="index" class="table-td row">
          <div class="c-2 t-j id">{{ tag.tag_film_id }}</div>
          <div class="c-7 t-j name-film">{{ tag.tag_film_name }}</div>
          <div class="c-3 t-j control">
            <div class="edit" @click="editTag(tag.tag_film_id)">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </div>
            <div class="del" @click="delTag(tag.tag_film_id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddTypeTag
      v-show="showAddTypeTag.showAddTypeTag"
      :title="typeData"
      :data="data"
      @updateData="data = $event"
    ></AddTypeTag>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import AddTypeTag from "./AddTypeTag.vue";
import { ref } from "vue";
import { useTagFilmsStore } from "../stores/tag-films";
import { useTypeFilmsStore } from "../stores/type-films";
import axios from "axios";

import { addTypeTagStore } from "../stores/counter";

const showAddTypeTag = addTypeTagStore();
const tagFilmsStore = useTagFilmsStore();
const typeFilmsStore = useTypeFilmsStore();


const type = ref({
  type_film_id: 1,
  type_film_name: "asdfasf",
});
const tag = ref({
  tag_film_id: null,
  tag_film_name: "",
});
const data = ref({});
const typeData = ref("");

const addNewType = () => {
  showAddTypeTag.setShowAddTypeTag(true);
  (type.value.type_film_id = null), (type.value.type_film_name = "");
  data.value = type.value;
  typeData.value = "type";
};
const addNewTag = () => {
  showAddTypeTag.setShowAddTypeTag(true);
  (tag.value.tag_film_id = null), (tag.value.tag_film_name = "");
  data.value = tag.value;
  typeData.value = "tag";
};
const editTag = (id) => {
  showAddTypeTag.setShowAddTypeTag(true);
  axios.get(`http://127.0.0.1:4212/tag_film/${id}`).then((res) => {
    (tag.value.tag_film_id = res.data.tag_film_id),
      (tag.value.tag_film_name = res.data.tag_film_name);
  });
  data.value = tag.value;
  typeData.value = "tag";
};
const editType = (id) => {
  showAddTypeTag.setShowAddTypeTag(true);
  // console.log(id);
  axios.get(`http://127.0.0.1:4212/type_film/${id}`).then((res) => {
    (type.value.type_film_id = res.data.type_film_id),
      (type.value.type_film_name = res.data.type_film_name);
  });
  data.value = type.value;
  typeData.value = "type";
};

const delTag = (id) => {
  tagFilmsStore.del(id)
};
const delType = (id) => {
  typeFilmsStore.del(id)
};
</script>

<style scoped lang="scss">
.typetag {
  position: relative;
  width: 100%;
  margin: 18px 0;
  .type,
  .tag {
    .table {
      margin-right: 18px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      min-height: calc(100vh - 120px);
      padding: 12px;
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
        .t-j {
          font-weight: 600;
        }
      }

      .t-j {
        display: flex;
        justify-content: center;
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
            cursor: pointer;
          }
          .del {
            color: #ce1d1d;
            padding: 0 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
