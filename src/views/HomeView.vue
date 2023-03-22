<template>
  <div class="home grid wide">
    <h1 class="home-title c-12">Home Page</h1>
    <div class="home-content row">
      <div class="l-3 m-6 c-12"><div class="box">1</div></div>
      <div class="l-3 m-6 c-12"><div class="box">2</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
      <!-- <div class="c-3">2</div>
      <div class="c-3">3</div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  background: #a8f1f773;
  padding-top: 20px;
}
.home-content{
  margin: 0 -8px;
  .box{
    background: #72C953;
    border: solid 1px blue;
    height: 200px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
