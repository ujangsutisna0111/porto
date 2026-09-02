<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading.vue'

const form = ref({ name: '', email: '', subject: '', message: '' })
const status = ref('')

function submit() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    status.value = 'err'
    return
  }
  const body = encodeURIComponent(
    `Dari: ${form.value.name} (${form.value.email})\n\n${form.value.message}`
  )
  const subject = encodeURIComponent(form.value.subject || 'Pesan dari Portfolio')
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  status.value = 'ok'
}
</script>

<template>
  <section class="section" style="padding-top: 56px">
    <div class="wrap">
      <SectionHeading
        eyebrow="Kontak"
        title="Mari Terhubung"
        lead="Terbuka untuk peluang kerja, magang, maupun kolaborasi proyek."
      />

      <div class="contact-grid">
        <div v-reveal>
          <div class="contact-item">
            <i class="bi bi-geo-alt"></i>
            <div><h4>Lokasi</h4><p>{{ profile.location }}</p></div>
          </div>
          <div class="contact-item">
            <i class="bi bi-telephone"></i>
            <div><h4>Telepon</h4><p>{{ profile.phone }}</p></div>
          </div>
          <div class="contact-item">
            <i class="bi bi-envelope"></i>
            <div><h4>Email</h4><p>{{ profile.email }}</p></div>
          </div>
        </div>

        <form class="contact-form" v-reveal data-reveal-delay="100" @submit.prevent="submit">
          <div class="form-row">
            <input v-model="form.name" class="form-control-custom" placeholder="Nama Anda" required />
            <input v-model="form.email" type="email" class="form-control-custom" placeholder="Email Anda" required />
          </div>
          <div style="margin-bottom: 16px">
            <input v-model="form.subject" class="form-control-custom" placeholder="Subjek" />
          </div>
          <div style="margin-bottom: 16px">
            <textarea
              v-model="form.message"
              class="form-control-custom"
              rows="6"
              placeholder="Pesan"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn-solid">Kirim Pesan</button>
          <p v-if="status === 'ok'" class="form-status ok">
            Terima kasih! Aplikasi email Anda akan terbuka untuk mengirim pesan.
          </p>
          <p v-if="status === 'err'" class="form-status err">Mohon lengkapi nama, email, dan pesan.</p>
        </form>
      </div>
    </div>
  </section>
</template>
