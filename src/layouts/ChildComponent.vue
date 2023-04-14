<template>
  <div>
    <p>Prop 1: {{ prop1 }}</p>
    <button @click="updateProp1">Update Prop 1</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  prop1: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['updateProp1'])

function updateProp1() {
  emits('updateProp1', 'Hello World')
}
</script>
