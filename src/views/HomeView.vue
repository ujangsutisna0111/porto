<script setup>
import { onMounted, ref } from "vue";
import { profile } from "../data/profile";

const roles = [
  "Front End Developer",
  "Back End Developer( Node.js, Express)",
  "Mobile Developer ( Dart & Flutter )",
];
const typedText = ref("");
const currentRoleIndex = ref(0);
const charIndex = ref(0);
const deleting = ref(false);

onMounted(() => {
  const tick = () => {
    const currentRole = roles[currentRoleIndex.value];

    if (!deleting.value) {
      charIndex.value += 1;
      typedText.value = currentRole.slice(0, charIndex.value);

      if (charIndex.value >= currentRole.length) {
        deleting.value = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      charIndex.value -= 1;
      typedText.value = currentRole.slice(0, charIndex.value);

      if (charIndex.value <= 0) {
        deleting.value = false;
        currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting.value ? 70 : 120);
  };

  setTimeout(tick, 400);
});
</script>

<template>
  <section class="hero">
    <div class="wrap">
      <div v-reveal>
        <p class="hero-role">{{ profile.role }}</p>
        <h1>Halo, saya {{ profile.name }}</h1>
        <H4>{{ profile.tagline }}</H4>
        <br />

        <div class="hero-actions">
          <router-link to="/portfolio" class="btn-solid"
            >Lihat Portfolio</router-link
          >
          <router-link to="/contact" class="btn-outline-custom"
            >Hubungi Saya</router-link
          >
        </div>
        <ul class="hero-meta">
          <li><i class="bi bi-geo-alt"></i>{{ profile.location }}</li>
          <li><i class="bi bi-envelope"></i>{{ profile.email }}</li>
        </ul>
      </div>

      <div class="hero-card" v-reveal data-reveal-delay="150">
        <div class="hero-stat">
          <span>Status</span><strong>Fresh Graduate 2025</strong>
        </div>
        <div class="hero-stat">
          <span>Fokus</span><strong>{{ typedText }}</strong>
        </div>
        <div class="hero-stat">
          <span>Pengalaman</span><strong>IT Developer</strong>
        </div>
        <div class="hero-stat">
          <span>Proyek dikerjakan</span><strong>7+ proyek</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-typing {
  min-height: 1.8em;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #111827;
}

.cursor {
  display: inline-block;
  margin-left: 0.08rem;
  color: #2563eb;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}
</style>
