<script setup>
import {ref} from 'vue'
import axios from 'axios'

import Button from "@/components/Button.vue";

import Input from '@/components/Input.vue'



import { useAdminStore } from '../stores/counter';

const adminStore = useAdminStore()
const propsd = defineProps({
    // showAdd: Boolean
    // dataFilm: Object
    title: String,
    data: Object
})

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

const addType = () =>{
    axios
    .post('http://127.0.0.1:4212/type_film', propsd.data)
    .then(res => console.log(res.data))
}
const addTag = () =>{
    axios
    .post('http://127.0.0.1:4212/tag_film', propsd.data)
    .then(res => console.log(res.data))
}



</script>
<template>
    <!-- <div v-show="adminStore.showAdd" class="add" > -->
    <div v-show="true" class="add" >
        <div class="box">
            <h2 class="title">{{ title }}</h2>
            {{ data }}
            <hr>
            <div class="content row">
                <div class="film_id c-12">
                    <label for="film_name">{{ title }} id:</label>
                    <!-- <span class="content_id">{{ data[`${title}_film_id`] }}</span>  -->
                    <span class="content_id">{{ data[`${title}_film_id`] }}</span> 
                </div>

                <div class="film_name c-12">
                    <Input 
                    :label="`${title} name`" 
                    :placeholder="`${ title } name`" 
                    v-model="data[`${title}_film_name`]"
                    ></Input>
                </div>



            </div>
            <hr>
            <div class="btn" >
                <Button  danger>Close</Button>
                <Button @click.native="addType()" success>Save</Button>
                
            </div>

        </div>
        <div class="close" >
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
            width: 40vw;
            height: 50vh;
            background-color: #fff;
            box-shadow: 0px 0px 68px 12px rgba(0,0,0,0.1);
            padding: 18px;
            border-radius: 8px;
            min-width: 500px;
            padding: 16px;
            
            .title {
                margin: 4px 12px;
                font-size: 18px;
                text-transform: capitalize;
            }
            .content{
                height: 300px;
                margin: 16px;


                label, .content_id{
                    margin: 6px 8px;
                    font-size: 15px;
                    font-weight: 700;
                    text-transform: capitalize;
                }
                .film_img{
                    padding: 0 16px;
                    img{
                        height: 80px;
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