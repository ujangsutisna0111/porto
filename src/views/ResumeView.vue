<script setup>
import { education, experience, skillGroups } from '../data/profile'
import SectionHeading from '../components/SectionHeading.vue'
</script>

<template>
  <section class="section" style="padding-top: 56px">
    <div class="wrap">
      <SectionHeading eyebrow="Resume" title="Pendidikan & Pengalaman" />

      <div class="contact-grid">
        <div>
          <h3 style="font-size: 1.1rem; margin-bottom: 20px" v-reveal>Pendidikan</h3>
          <div class="timeline">
            <div
              v-for="item in education"
              :key="item.degree"
              class="timeline-item"
              v-reveal
            >
              <p class="period">{{ item.period }}</p>
              <h4>{{ item.degree }}</h4>
              <p class="org">{{ item.institution }}</p>
              <p style="color: var(--ink-soft); font-size: 0.92rem">{{ item.detail }}</p>
            </div>
          </div>

          <h3 style="font-size: 1.1rem; margin: 40px 0 20px" v-reveal>Keterampilan Teknis</h3>
          <div v-for="group in skillGroups" :key="group.title" class="skill-block" v-reveal>
            <h4>{{ group.title }}</h4>
            <div class="skill-tags">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 style="font-size: 1.1rem; margin-bottom: 20px" v-reveal>Pengalaman Kerja</h3>
          <div class="timeline">
            <div
              v-for="job in experience"
              :key="job.title"
              class="timeline-item"
              v-reveal
            >
              <p class="period">{{ job.period }}</p>
              <h4>{{ job.title }}</h4>
              <p class="org">{{ job.company }}</p>
              <ul>
                <li v-for="(point, i) in job.points" :key="i">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
