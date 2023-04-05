<template>
    <div class="add">
        <div class="box">
            <h2 class="title">Film</h2>
            <hr>
            <div class="content">
                <div class="film_id">
                    <label for="film_name">Film id:</label>
                    1 
                </div>
                <div class="film_name">
                    <label for="film_name">Film name:</label>
                    <input type="text">
                </div>
                <div class="film_img">
                    <label for="film_img">Film Image:</label>
                    <input type="file" accept="image/*" onchange="loadFile(event)">
                </div>
                <div class="film_describe">
                    <label for="film_name">Film describe:</label>
                    <input type="text">
                </div>
                <div class="film_chaps row">
                    <label for="film_chaps">Film chaps:</label>
                    <Tag success>Chap 1</Tag>
                    <Tag success>Chap 2</Tag>
                    <Tag success>Chap 3</Tag>
                </div>
                <div class="film_tags row">
                    <label for="film_chaps">Film tags:</label>
                    <Tag info>Tag 1</Tag>
                    <Tag info>Tag 2</Tag>
                    <Tag info>Tag 3</Tag>
                </div>
                <div class="film_types row"> 
                    <label for="film_chaps">Film types:</label>
                    <Tag warning>Type 1</Tag>
                    <Tag warning>Type 2</Tag>
                    <Tag warning>Type 3</Tag></div>
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
import Tag from "@/components/Tag.vue";

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