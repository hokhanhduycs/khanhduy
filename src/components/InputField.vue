<template>
  <div class="my-input-field">
    <label>
      {{ label }}
      <input
        type="text"
        :name="name"
        :value="value"
      />
    </label>
  </div>
</template>
<script>
export default {
    props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss"></style>
