<script setup>
import {ref} from 'vue'
import Button from "@/components/Button.vue";
import Tag from "@/components/Tag.vue";
import Input from '@/components/Input.vue'
import Textarea from '@/components/Textarea.vue'
import AutoComplete from '@/components/AutoComplete.vue'

import { useAdminStore } from '../stores/counter';


const lists = ref(
  [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Durian' },
    { id: 5, name: 'Elderberry' },
    { id: 6, name: "sfafsfa" },
    { id: 7, name: "adsffdas" }
  ]
  )
const tag_film = ref([
    {id: 1, name: "thuyet minh"},
    {id: 2, name: "vietsub"},
    {id: 3, name: "new"},
])
const type_film = ref([
    {id: 1, name: "Hoat hinh"},
    {id: 2, name: "Thuyet minh"},
    {id: 3, name: "Hanh dong"},
])
const img_src = ref('./images/film/filmTest.jpg')

const adminStore = useAdminStore()
defineProps({
    // showAdd: Boolean
    dataFilm: Object
})

</script>
<template>
    <div v-show="adminStore.showAdd" class="add" >
        <div class="box">
            <h2 class="title">Film</h2>
            <hr>
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
                    <Input label="Film name" placeholder="Film name" :value="dataFilm.name"></Input>
                </div>
                <div class="film_img c-12 row">
                    <div class="c-12">
                        <label for="film_img ">Film Image:</label>
                    </div>
                    <div class="c-4">
                        <img :src="img_src" alt="image film">
                    </div>
                    <div class="c-8">
                        <input type="file" accept="image/*" onchange="loadFile(event)">
                    </div>
                </div>
                <div class="film_describe c-12">
                    <Textarea :value="dataFilm.describe" label="Film describe" placeholder="Describe ..."></Textarea>

                </div>
                <div class="film_tags c-12">
                    <AutoComplete :lists="tag_film" :selected="dataFilm.tags" label="Tags of Film"></AutoComplete>

                </div>
                <div class="film_types c-12"> 
                    <AutoComplete :lists="type_film" :selected="dataFilm.types" label="Types of Film"></AutoComplete>

                </div>
            </div>
            <hr>
            <div class="btn" >
                <Button @click.native="adminStore.setShowAdd(false)" danger>Close</Button>
                <Button success>Save</Button>
                
            </div>

        </div>
        <div class="close" @click="adminStore.setShowAdd(false)">
        <font-awesome-icon icon="fa-solid fa-xmark"/>
        </div>
    </div>
</template>



<style scoped lang="scss">
    .add{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #ffffff71;
        display: flex;
        justify-content: center;
        align-items: center;
        .box{
            width: 60vw;
            height: 80vh;
            background-color: #fff;
            box-shadow: 0px 0px 68px 12px rgba(0,0,0,0.1);
            padding: 18px;
            border-radius: 8px;
            min-width: 600px;
            padding: 16px;
            
            .title {
                margin: 4px 12px;
                font-size: 18px;
            }
            .content{
                overflow-y: scroll;
                min-height: 600px;
                max-height: 650px;
                margin: 16px;
                overflow-y: scroll;

                label, .content_id{
                    margin: 6px 8px;
                    font-size: 15px;
                    font-weight: 700;
                }
                .film_img{
                    padding: 0 16px;
                    img{
                        height: 80px;
                        // width: 50px;
                            
                        }
                }
          
            }

            .btn{
                width: 95%;
                display: flex;
                justify-content: end;
                margin: 16px;
                height: 40px;
            }
        }
        .close{
            width: 30px;
            height: 30px;
            border-radius: 50px;
            background-color: #000;
            color: #fff;
            display:flex;
            justify-content: center;
            align-items: center;
            transform: translate(-2vh, -40vh);
            &:hover{
                background-color: #c00000;
            }
        }
    }
</style>