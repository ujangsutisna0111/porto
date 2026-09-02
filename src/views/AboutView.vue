<script setup>
import { profile, softSkills } from "../data/profile";
import SectionHeading from "../components/SectionHeading.vue";
</script>

<template>
  <section class="section" style="padding-top: 56px">
    <div class="wrap">
      <SectionHeading eyebrow="Profil" title="Tentang Saya" />

      <div class="contact-grid">
        <div v-reveal>
          <p style="color: var(--ink-soft)">{{ profile.summary }}</p>

          <div class="contact-item">
            <i class="bi bi-geo-alt"></i>
            <div>
              <h4>Lokasi</h4>
              <p>{{ profile.location }}</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="bi bi-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>{{ profile.email }}</p>
            </div>
          </div>
        </div>

        <div v-reveal data-reveal-delay="100">
          <h3 style="font-size: 1.1rem; margin-bottom: 16px">Soft Skill</h3>
          <div class="skill-tags">
            <span v-for="skill in softSkills" :key="skill">{{ skill }}</span>
          </div>

          <div class="plain-card">
            <i class="bi bi-mortarboard"></i>
            <h3>Pendidikan</h3>
            <p>
              S1 Teknik Informatika — Software Engineering<br />
              Institut Teknologi dan Bisnis Bina Sarana Global (2022 – 2025)<br />
              IPK sementara: 3.62
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
