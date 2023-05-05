<template>
  <div class="admin">
    <MenuAdmin></MenuAdmin>
    <NavAdmin></NavAdmin>
  </div>
</template>
<script setup>
import NavAdmin from '@/admin/NavAdmin.vue'
import MenuAdmin from '@/admin/MenuAdmin.vue'
</script>
<style lang="scss" scoped>
  .admin{
    display: flex;
    margin-top: 60px;
    padding-top: 5px;
    background-color: #f5f9ff;
  }
</style>