<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/profile'
import SectionHeading from '../components/SectionHeading.vue'

const route = useRoute()
const router = useRouter()

const categories = ['All', ...new Set(projects.map((p) => p.category))]
const active = ref('All')

const filtered = computed(() =>
  active.value === 'All' ? projects : projects.filter((p) => p.category === active.value)
)

// Proyek yang sedang dibuka di modal ditentukan dari param URL,
// jadi popup-nya tetap punya link yang bisa dibagikan tanpa pindah page.
const selectedProject = computed(
  () => projects.find((p) => p.slug === route.params.slug) || null
)

function openProject(project) {
  router.push(`/portfolio/${project.slug}`)
}

function closeModal() {
  if (route.params.slug) router.push('/portfolio')
}

function onKeydown(e) {
  if (e.key === 'Escape') closeModal()
}

watch(
  () => !!selectedProject.value,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
)

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="section" style="padding-top: 56px">
    <div class="wrap">
      <SectionHeading
        eyebrow="Portfolio"
        title="Proyek yang Pernah Saya Kerjakan"
        lead="Kombinasi proyek kerja, tugas kuliah, dan eksplorasi desain UI/UX."
      />

      <div class="filters">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="{ active: active === cat }"
          @click="active = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="card-grid" v-reveal>
        <div
          v-for="project in filtered"
          :key="project.slug"
          class="project-card"
          role="button"
          tabindex="0"
          :aria-label="`Lihat detail ${project.title}`"
          @click="openProject(project)"
          @keydown.enter="openProject(project)"
          @keydown.space.prevent="openProject(project)"
        >
          <div v-if="project.cover" class="thumb thumb-img">
            <img :src="project.cover" :alt="project.title" loading="lazy" />
          </div>
          <div v-else class="thumb"></div>
          <div class="body">
            <span class="tag">{{ project.stack }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <span class="link">Lihat detail <i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="selectedProject"
        class="modal-backdrop"
        @click.self="closeModal"
      >
        <div class="modal-panel" role="dialog" aria-modal="true" :aria-label="selectedProject.title">
          <div class="thumb"></div>
          <button class="modal-close" @click="closeModal" aria-label="Tutup">
            <i class="bi bi-x-lg"></i>
          </button>

          <div class="modal-content">
            <p class="eyebrow">{{ selectedProject.category }} — {{ selectedProject.stack }}</p>
            <h2>{{ selectedProject.title }}</h2>
            <p class="modal-role">{{ selectedProject.role }}</p>
            <p class="modal-summary">{{ selectedProject.summary }}</p>

            <h3 class="modal-subhead">Kontribusi</h3>
            <ul class="modal-points">
              <li v-for="(point, i) in selectedProject.points" :key="i">{{ point }}</li>
            </ul>

            <div v-if="selectedProject.gallery?.length" class="portfolio-gallery">
              <img
                v-for="(img, i) in selectedProject.gallery"
                :key="i"
                :src="img"
                :alt="`${selectedProject.title} screenshot ${i + 1}`"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
