<template>
  <div class="my-textarea" :class="{full}">
    <label>
      {{ label }}:
    </label>
    <textarea
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      rows="3" cols="30"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>
  </div>
</template>
<script setup>
  defineProps({
    label: String,
    name: String,
    modelValue: String,
    full: Boolean,
    placeholder: String,
  })
  defineEmits(['update:modelValue'])
</script>
<style lang="scss">
.my-textarea{
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
  // width: 300px;
  label{
    margin: 6px 8px;
    font-size: 15px;
    font-weight: 700;
  }
  textarea{
    color: #495057;
    background: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 6px;
    line-height: 20px;
    padding: 4px 16px;
  }
  textarea:not(:placeholder-shown),
  textarea:focus{
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
