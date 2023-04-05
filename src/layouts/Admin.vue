<template>
  <div class="admin">
    <MenuAdmin></MenuAdmin>
    <Film></Film>
  </div>
</template>
<script setup>
import MenuAdmin from '@/admin/MenuAdmin.vue'
import Film from '@/admin/Film.vue'
</script>
<style lang="scss" scoped>
  .admin{
    // position: relative;
    display: flex;
  }
</style>