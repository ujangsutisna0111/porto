<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' }
})
</script>

<template>
  <div class="section-head" v-reveal>
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="lead">{{ lead }}</p>
  </div>
</template>
