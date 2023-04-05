<template>
    <div class="add">
        <div class="box">
            <h2 class="title">Film</h2>
            <hr>
            <div class="content">
                <div class="film_id">id</div>
                <div class="film_name">name</div>
                <div class="film_img">img</div>
                <div class="film_describe">describe</div>
                <div class="film_chaps">chaps</div>
                <div class="film_tags">tags</div>
                <div class="film_types">types</div>
            </div>
            <hr>
            <div class="btn">
                <Button danger>Close</Button>
                <Button success>Save</Button>
                
            </div>

        </div>
        <div class="close">
        <font-awesome-icon icon="fa-solid fa-xmark"/>
        </div>
    </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

</script>

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
                min-height: 80%;
                max-height: 82%;
                margin: 16px;
                overflow: hidden;
            }

            .btn{
                width: 95%;
                display: flex;
                justify-content: end;
                margin: 16px;
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