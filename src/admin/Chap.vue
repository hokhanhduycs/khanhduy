<template>
  <div class="labiry">
    <div class="bg-war">
      <div class="war">
        <div class="title">Thư viên</div>
        <div class="content">
        
          <div v-for="index in list" :key="index" class="item">
            <div class="img">
              <img src="" alt="">
            </div>
            <div class="text">
              Autodesk.Products.2018.Keygen.Only_3ds.Max
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue"
const list = ref([1, 2])

</script>
<style scoped>
  .labiry{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #c9c9c9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg-war{
    background: #6ee3f3ad;
    padding: 8px;
  }
  .war{
    background: #71d7ff;
    width: 1224px;
    height: 600px;
    position: relative;
    overflow: hidden;
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3ef8ef;
    height: 45px;
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: 600;
  }
  .content{
    /* background-color: #413ef8; */
    /* height: calc(100% - 53px); */
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    /* overflow-y: scroll; */
  }
  .item{
    width: 300px;
    height: 220px;
    background-color: red;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
</style>