<script setup>
  import {ref} from 'vue'

  import Button from '@/components/Button.vue'
  // import InputField from '@/components/InputField.vue'
  import CardFilm from '@/components/CardFilm.vue'
  import Tag from '@/components/Tag.vue'
  
  const listFilm = ref([
    {
      title: "Title sf laksf lkasf askf alksfd alfskf 1 asdkfj asdf asdflka sflkasf ",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf 2 sdalfk asflkd fasfkj",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf 3",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf 4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf 4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkds "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf dfa sajfhafsadkfjasldfdsfassfasf  4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf lakafsd asfj",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "adsjkfh afdjfhkjaf "
    },
    {
      title: "Title4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf 4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkds "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf dfa sajfhafsadkfjasldfdsfassfasf  4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf lakafsd asfj",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "adsjkfh afdjfhkjaf "
    },
    {
      title: "Title4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf 4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkds "
    },
    {
      title: "Title sf laksf lkasf askf alksfd alfskf dfa sajfhafsadkfjasldfdsfassfasf  4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },
    {
      title: "Title sf lakafsd asfj",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "adsjkfh afdjfhkjaf "
    },
    {
      title: "Title4",
      img: "./images/film/filmTest.jpg",
      alt: "filmTest",
      tag: "lkdsfjalkkfjasl asldfk sdgf;sdlgk s;lfdgk "
    },

  ])
</script>
<template>
  <div class="home grid wide">
    <h1 class="page-title c-12">Home Page</h1>

    <h2 class="home-title">Tag</h2>
    <div class="home-tag row">
      <Tag>Primary</Tag>
      <Tag success>Success</Tag>
      <Tag warning>Warning</Tag>
      <Tag info>Info</Tag>
      <Tag danger>Danger</Tag>

    </div>

    <h2 class="home-title">Gird</h2>
    <div class="home-content row">
      <div class="l-3 m-6 c-12"><div class="box">1</div></div>
      <div class="l-3 m-6 c-12"><div class="box">2</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
      <div class="l-3 m-6 c-12"><div class="box">3</div></div>
    </div>

    <h2 class="home-title">Button</h2>
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
      <div class="c-4">
        <Button full>Button Full</Button>
      </div>
      <div class="c-4">
        <Button full pill>Button Full</Button>
      </div>
      <div class="c-4">
        <Button full outline>Button Full</Button>
      </div>

    </div>

    <!-- <h2 class="home-title">Input Field</h2>
    <div class="home-input-field row">
      <div class="c-12">
        <InputField label="Ho Khanh Duy"></InputField>
      </div>
    </div> -->
    
    <h2 class="home-title">Card</h2>
    <div class="home-card row">
      <div class="c-9">
        <div class="home-card-left row">

          <div class="card-item-film c-6 m-4 l-3" 
          v-for="(item, index) in listFilm" :key="index">
          <CardFilm 
          :src="item.img"
          :alt="item.alt"
          :tag="item.tag" 
          >
          {{ item.title }}
        </CardFilm>
      </div>
        </div>
      </div>
    </div>

    <div class="home-card row">

    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  // background: #a8f1f773;
  padding-top: 20px;
}
.home-title{
  margin-top: 20px;
  margin-bottom: 10px;
}
.home-content{
  margin: 0 -8px;
  .box{
    // background: #72C953;
    border: solid 1px blue;
    height: 200px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.home-btn{
  background: #a8d7f773;
}

.home-input-field{
  background: #f1e8bdc7;
  // margin: 8px 0;
}
.home-card{
  // background-color: blueviolet;
  max-height: 600px;
  overflow-y: scroll;

  .home-card-left{
    // background: #72C953;
    // margin: auto -8px;
    .card-item-film{
      margin: 8px 0;
    }
  }
}

</style>
