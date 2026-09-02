<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="socials">
        <a href="#" aria-label="GitHub"><i class="bi bi-github"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
        <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
      </div>
      <p>© {{ year }} Ujang Sutisna</p>
    </div>
  </footer>
</template>
