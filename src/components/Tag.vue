<template>
  <div class="tag"
    :class="{success, info, warning, danger}"
  >
    <slot></slot>
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

.tag{
    background-color: var(--primary);
    padding: 1px 4px;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    text-transform: capitalize;
    min-width: 45px;
    max-width: 80px;
    text-align: center;
    
    & ~ .tag{
        margin-left: 8px;
    }
    &.danger{
        background-color: var(--danger);
    }
    &.success{
        background-color: var(--success);
    }
    &.info{
        background-color: var(--info);
    }
    &.warning{
        background-color: var(--warning);
    }
}

</style>