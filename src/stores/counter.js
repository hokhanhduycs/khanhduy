import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useAdminStore = defineStore('admin', () => {
  const showAdd = ref(false)
  function setShowAdd(b){
    showAdd.value = b
  }
  return{showAdd, setShowAdd}
})

export const addTypeTagStore = defineStore('addTypeTag',  () =>{
  const showAddTypeTag = ref(false)
  function setShowAddTypeTag(b){
    showAddTypeTag.value = b
  }
  return {showAddTypeTag, setShowAddTypeTag}
})