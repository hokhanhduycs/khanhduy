<script setup>
defineProps({
  label: String,
  name: String,
  modelValue: String,
  full: Boolean,
  placeholder: String
})
// defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
  <div class="my-input" :class="{full}">
    <label>
      {{ label }}:
    </label>
    <input
      type="text"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<style lang="scss">
.my-input{
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
  // width: 300px;
  label{
    margin: 6px 8px;
    font-size: 15px;
    font-weight: 700;
  }
  input{
    color: #495057;
    background: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 6px;
    line-height: 30px;
    padding: 4px 16px;
  }
  input:not(:placeholder-shown),
  input:focus{
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #C7D2FE;
    border-color: var(--primary);
  }
  // &.full{
  //   width: calc(100% - 32px);
  // }
}
</style>
