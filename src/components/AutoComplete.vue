<template>
  <div class="auto-complete" :class="{full}">
    <label>
      {{ label }}:
    </label>
    <div class="content row">
      <div class="ul-content c-11">
        <div class="list row">
            <Chip v-for="(item, index) in selectedT" 
            :key="index"
            @click.native="delSelect(index)"
            >{{ item }}</Chip>
          <!-- ============ -->
          <input
            type="search"

            placeholder="Search"
            v-model="searchSelect"
          />
        </div>
      </div>
      <button class="c-1"
      @click="showSelect = !showSelect"
      ><font-awesome-icon icon="fa-solid fa-angle-down"/></button>
    </div>
    <ul class="ul-select"
    v-show="showSelect && filterList.length > 0"
    >
      <li v-for="(item, index) in filterList" 
      :key="index"
      @click="addSelect(item)"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>
<script setup>
 import Chip from "@/components/Chip.vue";
 import {computed, ref} from 'vue'
  const propsd = defineProps({
    label: String,
    name: String,
    value: String,
    full: Boolean,
    lists: Object,
    selected: Array

  })
  const emits = defineEmits(['updateSelected'])
  const showSelect = ref(false)
 const selectedT = computed(()=> propsd.selected)
 const addSelect = (value) =>{
   selectedT.value.push(value.name)
   showSelect.value = false
   searchSelect.value = ""
   emits("updateSelected", selectedT.value)
   return selectedT
  }
  const delSelect = (value) =>{
    selectedT.value.splice(value, 1)
   console.log(selectedT.value)
  return selectedT
 }
 const searchSelect = ref("")
 const filterList = computed(() =>{
  if(searchSelect.value.length > 0){
    showSelect.value = true
  }else{
    showSelect.value = false

  }
  // console.log(propsd.label)
  // return propsd.lists
  return propsd.lists.filter(list => {
    return list.name.toLowerCase().includes(searchSelect.value.toLowerCase())
  })
 })

</script>
<style scoped lang="scss">
.auto-complete{
  max-width: 100%;
  margin: 16px;
  position: relative;
  label{
    margin: 6px 8px;
    font-size: 15px;
    font-weight: 700;

  }
  .ul-content{
      color: #495057;
      background: #ffffff;
      border: 1px solid #ced4da;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      line-height: 30px;
      padding: 4px 16px;
      min-height: 50px;
      &:active{
        box-shadow: 0 0 0 0.2rem #C7D2FE;
        border-color: var(--primary);
      }
      input{
        margin: 8px;
        font-size: 14px;
      }

    }
    button{
        background-color: var(--primary);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid #ced4da;
        color: white;
        &:hover{
          box-shadow: 0 0 0 0.2rem #C7D2FE;
  
        }
    }
    .ul-select{
      position: fixed;
      background-color: #fff;
      border-radius: 5px;
      padding: 16px 0; 
      box-shadow: 3px 10px 15px -3px rgba(0,0,0,0.1);      
      // width: calc(100% - 48px);
      min-width: 400px;
      overflow-y: scroll;
      max-height: 200px;
      transition: 0.2s;
      z-index: 9;
      
      li{
        position: relative;
        list-style: none;
        transition: 0.2s;
        margin: 1px;
        padding: 6px 22px;
        cursor: pointer;
        text-transform: capitalize;
        &:hover{
          background-color: #acacac;
        }
      }
    }

}
</style>
