<template>
  <div class="chap">
    <h3 class="title">Chap</h3>
    <div class="btn">
      <Button @click.native="addNew()">+ Add new</Button>
    </div>
    <div class="table-th row">
      <div class="c-1 t-j id">ID</div>
      <div class="c-1 t-j img">Image</div>
      <div class="c-3 t-j name-film">Name Film</div>
      <div class="c-3 t-j tags-film">Tags Film</div>
      <div class="c-2 t-j current-chap">Current Chap</div>
      <div class="c-2 t-j control">Control</div>
    </div>
  </div>
</template>
<script setup>
  import Button from "@/components/Button.vue";

  const addNew = () =>{

  }
</script>
<style lang="scss" scoped>
  .chap {
  background-color: #47d4f752;
  min-height: calc(100vh - 120px);
  position: relative;
  width: 100%;
  margin: 18px;
  background-color: #ffffff;
  min-height: 97%;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 12px;
  }
</style>