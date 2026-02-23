<script setup lang="ts">
const props = defineProps<{
  model: any;
}>();
const counter = ref(0)
</script>

<template>
  <fieldset>
    <h1>{{ model.title }}</h1>
    <p>{{ model.intro }}</p>
    <p>{{ model.bloatedProperty }}</p>
    <button @click="counter++">counter: {{ counter }}</button>
  </fieldset>
</template>
