<template>
  <div class="my-auto-complete" :class="{full}">
    <label>
      {{ label }}:
    </label>
    <div class="content">
      <input
        type="text"
        :name="name"
        :value="value"
        :placeholder="placeholder"
      />
      <button><font-awesome-icon icon="fa-solid fa-angle-down"/></button>
    </div>
  </div>
</template>
<script setup>
// import Button from "@/components/Button.vue";
defineProps({
  label: String,
    name: String,
    value: String,
    full: Boolean,
    placeholder: String,

})
</script>
<style scoped lang="scss">
.my-auto-complete{
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
  label{
    margin: 6px 8px;
    font-size: 15px;
    font-weight: 700;
  }
  .content{
    input{
      color: #495057;
      background: #ffffff;
      border: 1px solid #ced4da;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      line-height: 30px;
      padding: 4px 16px;
      width: calc(100% - 42px);
     
    }
    input:not(:placeholder-shown),
    input:focus{
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem #C7D2FE;
      border-color: var(--primary);
    }
    button{
      background-color: var(--primary);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      height: 41px;
      width: 41px;
      border: 1px solid #ced4da;
      
      &:hover{
        box-shadow: 0 0 0 0.2rem #C7D2FE;

      }
    }
    input:not(:placeholder-shown) + button,
    input:focus ~ button{
      box-shadow: 0 0 0 0.2rem #C7D2FE;
    }
  }
}
</style>
