<template>
    <div class="typetag row">
        
        <div class="c-6 type">
            <div class="table">
                <h3 class="title">Film</h3>
                <div class="btn">
                    <Button>+ Add new</Button>
                </div>
                <div class="table-th row">
                    <div class="c-2 t-j id">ID</div>
                    <div class="c-7 t-j name-film">Name Type</div>
                    <div class="c-3 t-j control">Control</div>
                </div>
                <div v-for="(type, index) in types" :key="index" class="table-td row">
                    <div class="c-2 t-j id">{{ type.type_film_id }}</div>
                    <div class="c-7 t-j name-film">{{ type.type_film_name }}</div>
                    <div class="c-3 t-j control">
                        <div class="edit">
                            <font-awesome-icon icon="fa-solid fa-pen-to-square"
                            /></div>
                            <div class="del"
                            ><font-awesome-icon icon="fa-solid fa-trash"
                            /></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-6 tag">
            <div class="table">
                <h3 class="title">Film</h3>
                <div class="btn">
                    <Button>+ Add new</Button>
                </div>
                <div class="table-th row">
                    <div class="c-2 t-j id">ID</div>
                    <div class="c-7 t-j name-film">Name Tag</div>
                    <div class="c-3 t-j control">Control</div>
                </div>
                <div v-for="(tag, index) in tags" :key="index" class="table-td row">
                    <div class="c-2 t-j id">{{ tag.tag_film_id }}</div>
                    <div class="c-7 t-j name-film">{{ tag.tag_film_name }}</div>
                    <div class="c-3 t-j control">
                        <div class="edit">
                            <font-awesome-icon icon="fa-solid fa-pen-to-square"
                            /></div>
                            <div class="del"
                            ><font-awesome-icon icon="fa-solid fa-trash"
                            /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import { ref } from "vue";
const types = ref([
    {
        type_film_id: 1,
        type_film_name: "Test hh",
    },
    {
        type_film_id: 1,
        type_film_name: "Test hh",
    },
    {
        type_film_id: 1,
        type_film_name: "Test hh",
    }

])
const tags = ref([
    {
        tag_film_id: 1,
        tag_film_name: "Tag 1"
    },
    {
        tag_film_id: 1,
        tag_film_name: "Tas 1"
    },
    {
        tag_film_id: 1,
        tag_film_name: "Tas 1"
    }
])
</script>

<style scoped lang="scss">
    .typetag{
        position: relative;
        width: 100%;
        margin: 18px 0;
        .type, .tag{
            .table{
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
                .table-th{
                    background-color: #e0e0e0;
                    padding: 8px;
                    border-radius: 8px;
                    .t-j{
                        font-weight: 600;
                    }
                }

                .t-j{
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
    .t-j{
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .edit{
            color: #22c55e;
            margin: 0 12px;
        }
        .del{
            color: #ce1d1d;
            padding: 0 12px;
        }
    }
  }
            }

        }
    }

</style>