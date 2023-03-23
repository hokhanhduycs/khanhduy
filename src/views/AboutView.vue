<template>
  <div class="about grid wide">
    <h1>About Page</h1>
    <div class="about-content row">
      <div class="l-3 m-6 c-12"><div class="box">1</div></div>
      <div class="l-3 m-6 c-12"><div class="box">2</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  background: #a8f1f773;
  padding-top: 20px;
}
.about-content { 
    margin: 0 -8px;
    .box {
    background: #53c1c9;
    border: solid 1px rgb(3, 1, 1);
    height: 200px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
