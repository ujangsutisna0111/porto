export const profile = {
  name: "Ujang Sutisna",
  role: "Software Engineer — Web & Mobile (Flutter)",
  tagline: "Membangun aplikasi web dan mobile dari desain sampai deploy.",
  email: "Ujangsutisna0111@gmail.com",
  phone: "+62 838-7748-1603",
  location: "Sepatan Timur, Tangerang",
  birthDate: "01 November 2002",
  photo: "/images/profile/myimage.jpeg",
  summary:
    "Fresh graduate Teknik Informatika dengan konsentrasi Software Engineering dari Institut Teknologi dan Bisnis Bina Sarana Global. Tertarik pada software development, pemrograman, dan analisis sistem, dengan kemampuan di UI/UX Design, Web Development, dan Mobile Development. Mengutamakan penerapan OOP, Clean Architecture, MVVM, dan enkripsi data untuk menghasilkan aplikasi yang mudah dikembangkan, dipelihara, dan aman.",
};

export const education = [
  {
    degree: "S1 Teknik Informatika — Software Engineering",
    period: "2022 – 2025",
    institution: "Institut Teknologi dan Bisnis Bina Sarana Global",
    detail: "IPK sementara: 3.62",
  },
];

export const experience = [
  {
    title: "IT Developer (Flutter)",
    period: "24 November 2025 – 23 Mei 2026",
    company: "PT Pendekar Bodoh — Magang Kemnaker",
    points: [
      "Mempelajari dan memahami alur bisnis (business flow) perusahaan sebagai dasar pengembangan sistem internal.",
      "Berperan sebagai Frontend Developer menggunakan Flutter untuk pengembangan berbagai sistem perusahaan.",
      "Mengembangkan dan melakukan integrasi aplikasi dengan layanan backend berbasis API.",
      "Berkontribusi dalam migrasi dan pengembangan sistem yang sebelumnya menggunakan sistem pihak ketiga.",
      "Melakukan pengujian (testing), perbaikan bug, keamanan data, dan optimalisasi performa aplikasi.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend Web",
    items: [
      "CSS",
      "Bootstrap",
      "Tailwind",
      "Vue.js (JavaScript)",
      "Flutter (Dart)",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter (Dart)", "GetX"],
  },
  {
    title: "Backend",
    items: ["Node.js (JavaScript)", "Express.js"],
  },
  {
    title: "Basis Data",
    items: ["MySQL", "SQL Server Management","PostgreSQL"],
  },
  {
    title: "Desain UI/UX",
    items: ["Figma"],
  },
  {
    title: "Analisis & Perancangan Sistem",
    items: ["UML", "Data Flow Diagram"],
  },
];

export const softSkills = [
  "Manajemen waktu",
  "Pemecahan masalah",
  "Komunikasi",
  "Kreativitas",
  "Kolaborasi dalam tim",
];

export const services = [
  {
    icon: "bi-phone-fill",
    title: "Mobile App Development",
    description:
      "Membangun aplikasi mobile lintas platform dengan Flutter dan GetX, dari integrasi API sampai optimalisasi performa.",
  },
  {
    icon: "bi-code-slash",
    title: "Web Development",
    description:
      "Frontend dengan Vue.js, Bootstrap, dan Tailwind; backend dengan Node.js/Express serta PHP (CodeIgniter).",
  },
  {
    icon: "bi-server",
    title: "Backend Development",
    description:
      "Membangun API dan layanan backend dengan Node.js dan Express, mulai dari routing, autentikasi, hingga integrasi database.",
  },
  {
    icon: "bi-diagram-3",
    title: "Analisis & Perancangan Sistem",
    description:
      "Pemetaan proses bisnis dan struktur data dengan UML dan Data Flow Diagram sebelum masuk ke tahap coding.",
  },
  {
    icon: "bi-hdd-network",
    title: "Integrasi Backend & API",
    description:
      "Menghubungkan aplikasi frontend dengan layanan backend berbasis API, termasuk migrasi dari sistem pihak ketiga.",
  },
  {
    icon: "bi-shield-lock",
    title: "Keamanan & Optimalisasi Data",
    description:
      "Menerapkan enkripsi data serta pengujian dan perbaikan bug untuk aplikasi yang aman dan stabil.",
  },
];

export const projects = [
  {
    slug: "sales-portal",
    title: "Sales Portal",
    role: "Front End Web & Mobile Developer",
    stack: "Dart (Flutter)",
    category: "Mobile & Web",
    cover: "/images/portfolio/sales-portal/dashboard.png",
    gallery: [
      "/images/portfolio/sales-portal/dashboard.png",
      "/images/portfolio/sales-portal/login.png",
      "/images/portfolio/sales-portal/mobile.png",
    ],
    summary:
      "Portal penjualan lintas web dan mobile, dikembangkan bersama backend developer dan tim Business Development.",
    points: [
      "Analisa perancangan sistem bersama backend developer.",
      "Berkoordinasi dengan CEO dan Business Development untuk analisis kebutuhan serta pengembangan fitur baru.",
      "Testing, bug tracking, dan vulnerability checking.",
    ],
  },
  {
    slug: "lms-pendekar-akademi",
    title: "LMS Pendekar Akademi",
    role: "Frontend Web Developer",
    stack: "Dart (Flutter)",
    category: "Web",
    cover: "/images/portfolio/lms-pendekar-akademi/lms-soal.png",
    gallery: ["/images/portfolio/lms-pendekar-akademi/lms-soal.png"],
    summary:
      "Learning Management System internal untuk kebutuhan training, dibangun dari hasil wawancara langsung dengan Divisi Training.",
    points: [
      "Wawancara dengan Divisi Training untuk user requirement dan flow.",
      "Berkolaborasi dengan backend developer.",
      "Implementasi desain UI/UX yang ramah pengguna.",
      "Implementasi coding sesuai desain dan backend, dengan batasan sistem sesuai API.",
    ],
  },
  {
    slug: "sistem-informasi-e-commerce",
    title: "Sistem Informasi E-Commerce",
    role: "Fullstack Web Developer",
    stack: "PHP (CodeIgniter 3)",
    category: "Web",
    cover: "/images/portfolio/sistem-informasi-e-commerce/dashboard-admin.jpeg",
    gallery: [
      "/images/portfolio/sistem-informasi-e-commerce/dashboard-admin.jpeg",
      "/images/portfolio/sistem-informasi-e-commerce/all-product.jpeg",
      "/images/portfolio/sistem-informasi-e-commerce/sprinter.jpeg",
    ],
    summary:
      "Modul e-commerce fullstack mulai dari perancangan hingga pengujian.",
    points: [
      "Melakukan analisa perancangan modul sistem e-commerce.",
      "Implementasi coding.",
      "Testing web.",
    ],
  },
  {
    slug: "karirku",
    title: "Karirku",
    role: "Fullstack Developer",
    stack: "CodeIgniter 3",
    category: "Web",
    summary:
      "Sistem informasi dan pendaftaran lowongan kerja, dilengkapi sistem penggajian.",
    points: [
      "Sistem informasi dan pendaftaran lowongan kerja.",
      "Sistem penggajian terintegrasi.",
    ],
  },
  {
    slug: "spparu",
    title: "SPParu",
    role: "Mobile Developer",
    stack: "Flutter",
    category: "Mobile",
    cover: "/images/portfolio/spparu/spparu-poster.png",
    gallery: ["/images/portfolio/spparu/spparu-poster.png"],
    summary:
      "Sistem pakar diagnosa penyakit paru-paru menggunakan algoritma Naive Bayes.",
    points: [
      "Implementasi algoritma Naive Bayes untuk diagnosa.",
      "Aplikasi mobile berbasis Flutter.",
    ],
  },
  {
    slug: "redesign-gais",
    title: "Redesign UI/UX GAIS",
    role: "UI/UX Designer",
    stack: "Figma",
    category: "Design",
    summary: "Redesign fitur nilai untuk Global Institute (GAIS).",
    points: [
      "Riset dan redesign fitur nilai.",
      "Prototype interaktif di Figma.",
    ],
  },
  {
    slug: "sistem-rawat-jalan",
    title: "Sistem Informasi Rawat Jalan",
    role: "UI/UX Designer",
    stack: "Figma",
    category: "Design",
    summary:
      "Desain UI/UX sistem informasi rawat jalan menggunakan pendekatan FIFO dan prioritas.",
    points: [
      "Alur antrian berbasis FIFO dan prioritas.",
      "Desain UI/UX lengkap di Figma.",
    ],
  },
];
