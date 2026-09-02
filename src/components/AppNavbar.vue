<script setup>
import { ref } from 'vue'

const open = ref(false)
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' }
]
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <router-link to="/" class="brand">Ujang<span>.dev</span></router-link>

      <nav :class="['nav-links', { open }]">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="open = false"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <button class="nav-toggle" @click="open = !open" aria-label="Toggle menu">
        <i :class="open ? 'bi bi-x-lg' : 'bi bi-list'"></i>
      </button>
    </div>
  </header>
</template>
