<template>
  <div class="chip"
  >
  <span class="text">
      <slot></slot>
    </span>
    <span class="icon"><font-awesome-icon icon="fa-solid fa-xmark"/></span>
  </div>
</template>

<script>
export default {
    props:{
        success: Boolean,
        info: Boolean,
        warning: Boolean,
        danger: Boolean
    }
}
</script>

<style scoped lang="scss">

.chip{
    background-color: #e0e4e9;
    padding: 4px 12px;
    border-radius: 50px;
    color: #000000;
    font-size: 14px;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    pointer-events: none;
    margin: 2px;
    
    & ~ .chip{
      margin-left: 4px;
    }
    .text{
      margin-right: 8px;
    }
    .icon{
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      border-radius: 50px;
      cursor: pointer;
      pointer-events: all;
      // border: solid 1px #1a1a1a;
      color: #1a1a1a;
    }
    &:hover .icon{
      background-color: #a5a5a5c0;
      ;
    }
 
}

</style>