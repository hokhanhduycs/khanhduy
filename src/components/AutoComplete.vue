<template>
  <div class="auto-complete" :class="{full}">
    <label>
      {{ label }}:
    </label>
    <div class="content row">
      <div class="ul-content c-11">
        <div class="list row">
            <Chip>Ho</Chip>
            <Chip>Hofvdfsa</Chip>
            <Chip>Hoasdfa</Chip>
            <Chip>Hasf asfdo</Chip>
            <Chip>Hoaf s ffasfd</Chip>
            <Chip>Ha dsf o</Chip>
            <Chip>H afsd  asdfo</Chip>
            <Chip>Hoasd</Chip>
          <!-- ============ -->
          <input
            type="text"
            :name="name"
            :value="value"
            placeholder="Search"
          />
        </div>
      </div>
      <button class="c-1"><font-awesome-icon icon="fa-solid fa-angle-down"/></button>
    </div>
  </div>
</template>
<script setup>
// import Button from "@/components/Button.vue";
 import Chip from "@/components/Chip.vue";
defineProps({
  label: String,
    name: String,
    value: String,
    full: Boolean,

})
</script>
<style scoped lang="scss">
.auto-complete{
  max-width: 100%;
  margin: 16px;
  .label{
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
      &:active{
        box-shadow: 0 0 0 0.2rem #C7D2FE;
        border-color: var(--primary);
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

}
</style>
