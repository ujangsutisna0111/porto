# Ujang Sutisna — Portfolio (Vue 3 + Vite)

Portfolio pribadi, dibangun ulang dari template Bootstrap **FolioOne** ke Vue 3,
diisi dengan data dari CV Ujang Sutisna.

## Menjalankan proyek

Butuh Node.js 18+ terpasang di komputer kamu.

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk build produksi:

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  data/profile.js       -> semua data CV (edit di sini untuk update konten)
  components/           -> Navbar, Footer, SectionHeading
  views/                -> Home, About, Resume, Services, Portfolio, PortfolioDetail, Contact
  router/index.js       -> routing multi-halaman (Vue Router)
  assets/main.css       -> desain & warna
```

## Mengubah isi

Semua teks CV (pengalaman, pendidikan, skill, proyek) ada di satu file:
`src/data/profile.js`. Edit file itu untuk memperbarui konten tanpa menyentuh
komponen halaman.

## Catatan

- Form kontak memakai `mailto:` (membuka aplikasi email) karena tidak ada
  backend PHP seperti template aslinya. Ganti `submit()` di
  `src/views/ContactView.vue` dengan pemanggilan API kamu sendiri kalau perlu.
- Gambar profil/portofolio belum disertakan (file asset template asli tidak
  ikut ter-upload) — tambahkan gambar sendiri di `public/` lalu referensikan
  di `src/data/profile.js` bila diperlukan.
