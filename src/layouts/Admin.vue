<template>
  <div class="admin">
    <MenuAdmin></MenuAdmin>
    <Film></Film>
    <!-- <TypeTag></TypeTag> -->
    <NavAdmin></NavAdmin>
    <!-- <Add></Add> -->
  </div>
</template>
<script setup>
import NavAdmin from '@/admin/NavAdmin.vue'
import MenuAdmin from '@/admin/MenuAdmin.vue'
import Film from '@/admin/Film.vue'
import TypeTag from '@/admin/TypeTag.vue'
// import Add from '@/admin/Add.vue'
</script>
<style lang="scss" scoped>
  .admin{
    // position: relative;
    display: flex;
    margin-top: 60px;
    padding-top: 5px;
    background-color: #f5f9ff;
  }
</style>