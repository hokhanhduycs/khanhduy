<template>
    <div class="menu ">
        <h3 class="title">Home</h3>
        <div class="menu-list">
            <div @click="show = 'film'"
            :class="{activate: show == 'film'}"
            class="menu-item">
                <font-awesome-icon icon="fa-solid fa-film"/>
                Film
            </div>
            <div @click="show = 'chap'" 
            :class="{activate: show == 'chap'}"
            class="menu-item">
                <font-awesome-icon icon="fa-solid fa-file-video"/>
                Chap
            </div>
            <div @click="show = 'typetag'"
            :class="{activate: show == 'typetag'}"
            class="menu-item">
                <font-awesome-icon icon="fa-solid fa-tag"/>
                Type/Tag
            </div>
        </div>   
        
    </div>
    <Film v-show="show == 'film'"></Film>
    <TypeTag v-show="show == 'typetag'"></TypeTag>
    <Chap v-show="show == 'chap'"></Chap>
</template>
<script setup>
import Film from '@/admin/Film.vue'
import TypeTag from '@/admin/TypeTag.vue'
import Chap from '@/admin/Chap.vue'
import {ref} from "vue"

const show = ref('film')
</script>
<style scoped lang="scss">
    .menu{
        position: relative;
        height: calc(100vh - 120px);
        width: 20%;
        margin: 18px;
        background-color: #ffffff;
        min-height: 97%;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        border-radius: 10px;
        padding: 12px;
        overflow-y: hidden;
        .title{
            text-align: center;
            margin-bottom: 8px;
            font-size: 18px;
        }
        .menu-list{
            .menu-item{
                height: 42px;
                border-radius: 8px;
                // border: solid 1px;
                margin: 16px;
                display: flex;
                align-items: center;
                justify-content: start;
                padding: 8px 16px;
                box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.05);
                cursor: pointer;
                &:hover{
                    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
                }
                svg{
                    margin-right: 16px;
                }

                
            }
            .activate{
                box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
                background-color: var(--primary)
            }
        }
    }
</style>