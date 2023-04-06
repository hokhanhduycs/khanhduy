<template>
  <div class="my-input-field" :class="{full}">
    <input
      type="text"
      :name="name"
      :value="value"
      placeholder=" "
    />
    <label>
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
    props: {
      label: String,
      name: String,
      value: String,
      full: Boolean
    // placeholder: String,

  },
};
</script>
<style lang="scss">
.my-input-field{
  position: relative;
  display: block;
  // width: 300px;
  // background-color: red;
  margin: 16px 16px 4px 16px;
  height: 42px;

  input{
    position: absolute;
    color: #495057;
    background: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 6px;
    line-height: 30px;
    padding: 4px 16px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-transform: capitalize;

  }
  input:not(:placeholder-shown),
  input:focus{
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #C7D2FE;
    border-color: var(--primary);
  }
  label{
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    // width: 100%;
    transition: .3s;
    margin: 0 16px;
    padding: 0 8px;
    color: #5c5c5c;
    font-size: 12px;
  }
  input:not(:placeholder-shown) + label,
  input:focus + label{
    color: black;
    font-weight: 600;
    transform: translateY(-160%);
    // font-size: 16px;
    margin: 0 8px;
    border-radius: 5px;
    background-color: var(--primary);
    color: white;

  }
  // &.full{
  //   width: calc(100% - 32px);
  // }
}
</style>
