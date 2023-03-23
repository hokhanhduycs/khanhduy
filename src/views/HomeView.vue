<script setup>
  import Button from '@/components/Button.vue'
  
</script>
<template>
  <div class="home grid wide">
    <h1 class="home-title c-12">Home Page</h1>

    <div class="home-content row">
      <div class="l-3 m-6 c-12"><div class="box">1</div></div>
      <div class="l-3 m-6 c-12"><div class="box">2</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
    </div>

    <div class="home-btn row">
      <div class="c-12">

        <Button>Ho Khanh Duy</Button>
        <Button disabled>disabled</Button>
        <Button outline>outline</Button>
        <Button outline disabled>outline</Button>
        <Button text>outline</Button>
        <Button text disabled>outline</Button>
        
        <Button pill>Ho Khanh Duy</Button>
        <Button outline pill>outline pill</Button>
        <Button outline pill>pill</Button>
        <Button outline pill>x</Button>
        <Button outline small>Button small</Button>
        <Button outline large>Button large</Button>
        
      </div>

      <div class="c-12">
        <Button>
          <span>Button icon</span>
          <font-awesome-icon icon="fa-solid fa-check" />
        </Button>
        <Button outline pill>
          <font-awesome-icon icon="fa-solid fa-check" />
          <span>Button icon</span>
        </Button>
        <Button outline>
          <font-awesome-icon icon="fa-solid fa-check" />
          <span>Button icon</span>
          <font-awesome-icon icon="fa-solid fa-check" />
        </Button>
        <Button pill>
          <font-awesome-icon icon="fa-solid fa-check" />
        </Button>
      </div>

      <div class="c-12">
        <Button danger>danger</Button>
        <Button success>success</Button>
        <Button info>info</Button>
      </div>

      <div class="c-12">
        <a href=""><Button danger>Link A</Button></a>
        <RouterLink to="/about"><Button>About</Button></RouterLink>
      </div>

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
.home-btn{
  height: 200px;
}

</style>
