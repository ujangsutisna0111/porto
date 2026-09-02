<script setup>
import { services } from '../data/profile'
import SectionHeading from '../components/SectionHeading.vue'
</script>

<template>
  <section class="section" style="padding-top: 56px">
    <div class="wrap">
      <SectionHeading
        eyebrow="Layanan"
        title="Yang Bisa Saya Bantu Kerjakan"
        lead="Dari perancangan sistem sampai aplikasi siap pakai, di web maupun mobile."
      />

      <div class="card-grid">
        <div
          v-for="service in services"
          :key="service.title"
          class="plain-card"
          v-reveal
        >
          <i class="bi" :class="service.icon"></i>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
