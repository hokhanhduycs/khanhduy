<template>
  <button
    :disabled="disabled"
    class="my-button"
    :class="{ 
        outline, text, pill, //class
        small, large,  //size
        danger, success, info //color
        }"
  >
    <slot></slot> 
  </button>
</template>
<script>
export default {
  props: {
    //    to: String,
    //    href: String,

    // class (type): solid/outline/text/pill
    //df: solid
    outline: Boolean,
    text: Boolean,
    pill: Boolean,

    // icon truyen qua slot (+ leadingicon/ trailling icon)

    // size: small/large/ df: m
    small: Boolean,
    large: Boolean,

    //State
    disabled: Boolean,

    //
    danger: Boolean,
    success: Boolean, 
    info: Boolean
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">

.my-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    padding: 9px 16px;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: var(--font-family);
    cursor: pointer;
    background-color: var(--primary);
    border: 1px solid transparent;
    user-select: none;


    + .my-button {
        margin-left: 8px;
    }

    &[disabled] {
        cursor: not-allowed;
        pointer-events: none;
        opacity: .6;
    }

    &:hover {
        border-color: var(--primary);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), var(--primary-hover);
    }

    &.outline {
        color: var(--primary);
        border-color: var(--primary);
        background-color: var(--white);

        &:hover {
            color: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), var(--primary-hover);
        }
    }

    &.text {
        border: none;
        background-color: transparent;
        &:hover {
            text-decoration: underline;
            color: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), var(--primary-hover);

        }
    }  
    
    &.pill {
        border-radius: 50px;
        padding: 9px 9px;
        min-width: 38px;
    }

    // Button sizes
    &.small {
        min-width: 88px;
        padding: 4px 16px;
    }

    &.large {
        padding: 14px 16px;
        min-width: 140px;
    }

    // 
    &.danger {
    background-color: var(--danger);
    color: #fff;
  }
  &.success {
    background-color: var(success);
    color: #fff;
  }
  &.info {
    background-color: var(--info);
    color: #fff;
  }
    
}
</style>
