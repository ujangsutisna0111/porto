import { useEffect, useState } from "react";
import codeigniterIcon from "../assets/svg/codeigniter.svg";
import dartIcon from "../assets/svg/dart.svg";
import expressIcon from "../assets/svg/express.svg";
import flutterIcon from "../assets/svg/flutter.svg";
import phpIcon from "../assets/svg/php.svg";
import dashboardSales from "../assets/portfolio/sales-portal/dashboard.png";
import loginSales from "../assets/portfolio/sales-portal/login.png";
import mobileSales from "../assets/portfolio/sales-portal/mobile.png";
import lms1 from "../assets/portfolio/lms-pendekar-akademi/lms1.png";
import lms2 from "../assets/portfolio/lms-pendekar-akademi/lms2.png";
import lms3 from "../assets/portfolio/lms-pendekar-akademi/lms3.png";
import lms4 from "../assets/portfolio/lms-pendekar-akademi/lms4.png";
import ecommerceDashboard from "../assets/portfolio/sistem-informasi-e-commerce/dashboard-admin.jpeg";
import ecommerceProducts from "../assets/portfolio/sistem-informasi-e-commerce/all-product.jpeg";
import ecommerceSprinter from "../assets/portfolio/sistem-informasi-e-commerce/sprinter.jpeg";
import sitbPoster from "../assets/portfolio/spparu/spparu-poster.png";

const stackOptions = {
  "Dart (Flutter)": [
    { name: "Flutter", icon: flutterIcon },
    { name: "Dart", icon: dartIcon },
  ],
  "PHP (CodeIgniter 3)": [
    { name: "PHP", icon: phpIcon },
    { name: "CodeIgniter 3", icon: codeigniterIcon },
  ],
  "Flutter, Dart, Express.js": [
    { name: "Flutter", icon: flutterIcon },
    { name: "Dart", icon: dartIcon },
    { name: "Express.js", icon: expressIcon },
  ],
  Figma: [{ name: "Figma" }],
};

const projects = [
  {
    slug: "sales-portal",
    title: "Sales Portal",
    role: "Front End Web & Mobile Developer",
    stack: "Dart (Flutter)",
    category: "Mobile & Web",
    cover: dashboardSales,
    gallery: [dashboardSales, loginSales, mobileSales],
    summary:
      "Portal penjualan lintas web dan mobile untuk mendukung pemantauan data penjualan dan kebutuhan Business Development.",
    problem:
      "Pemantauan performa penjualan membutuhkan penyajian data yang terstruktur agar informasi transaksi, performa cabang, dan produk terlaris lebih mudah dianalisis.",
    solution:
      "Mengembangkan antarmuka Sales Portal untuk web dan mobile dengan visualisasi data penjualan, filter berdasarkan area, cabang, dan rentang tanggal, serta ringkasan performa penjualan.",
    points: [
      "Menganalisis kebutuhan dan merancang sistem bersama backend developer.",
      "Berkoordinasi dengan CEO dan Business Development untuk pengembangan fitur.",
      "Melakukan testing, bug tracking, dan vulnerability checking.",
    ],
  },
  {
    slug: "lms-pendekar-akademi",
    title: "LMS Pendekar Akademi",
    role: "Frontend Web Developer",
    stack: "Dart (Flutter)",
    category: "Web",
    cover: lms1,
    gallery: [lms1, lms2, lms3, lms4],
    summary:
      "Learning Management System internal untuk mendukung pengelolaan training dan pembelajaran karyawan.",
    problem:
      "Kegiatan training karyawan membutuhkan sistem terpusat untuk mengelola materi, kelas, modul, kuis, dan kehadiran sesuai alur kerja Divisi Training.",
    solution:
      "Mengembangkan antarmuka LMS berdasarkan hasil wawancara dan kebutuhan Divisi Training, termasuk pengelolaan kelas, materi pembelajaran, kuis, dan fitur pendukung training melalui integrasi API.",
    points: [
      "Melakukan wawancara dengan Divisi Training untuk menggali kebutuhan pengguna.",
      "Berkolaborasi dengan backend developer dalam integrasi API.",
      "Mengimplementasikan desain UI/UX yang mudah digunakan.",
      "Menyesuaikan implementasi fitur dengan kontrak dan kemampuan API.",
    ],
  },
  {
    slug: "sistem-informasi-e-commerce",
    title: "Sistem Informasi E-Commerce",
    role: "Fullstack Web Developer",
    stack: "PHP (CodeIgniter 3)",
    category: "Web",
    cover: ecommerceDashboard,
    gallery: [ecommerceDashboard, ecommerceProducts, ecommerceSprinter],
    summary:
      "Sistem e-commerce yang mencakup pengembangan fitur dari sisi frontend hingga backend.",
    problem:
      "Pengelolaan informasi produk dan penyajian katalog membutuhkan sistem yang terstruktur agar pengguna dapat melihat produk dan administrator dapat mengelola informasi yang tersedia.",
    solution:
      "Merancang dan mengimplementasikan modul e-commerce menggunakan CodeIgniter 3, mencakup antarmuka web, logika aplikasi, pengelolaan data, dan pengujian fitur.",
    points: [
      "Menganalisis kebutuhan dan merancang modul e-commerce.",
      "Mengembangkan fitur frontend dan backend.",
      "Melakukan pengujian untuk memeriksa fungsionalitas aplikasi.",
    ],
  },
  {
    slug: "karirku",
    title: "Karirku",
    role: "Fullstack Developer",
    stack: "PHP (CodeIgniter 3)",
    category: "Web",
    summary:
      "Sistem informasi lowongan kerja dan pendaftaran kandidat yang dilengkapi fitur penggajian.",
    problem:
      "Informasi lowongan kerja, proses pendaftaran kandidat, dan data penggajian membutuhkan pengelolaan yang terstruktur agar proses administrasi lebih mudah dilakukan.",
    solution:
      "Mengembangkan sistem informasi Karirku dengan fitur informasi dan pendaftaran lowongan kerja serta modul penggajian untuk mendukung kebutuhan pengelolaan data.",
    points: [
      "Mengembangkan fitur informasi lowongan kerja.",
      "Mengimplementasikan proses pendaftaran kandidat.",
      "Mengembangkan modul penggajian.",
    ],
  },
  {
    slug: "spparu",
    title: "SITB",
    role: "Mobile Developer",
    stack: "Flutter, Dart, Express.js",
    category: "Mobile",
    cover: sitbPoster,
    gallery: [sitbPoster],
    summary:
      "Aplikasi sistem pakar untuk membantu deteksi dini indikasi Tuberkulosis menggunakan Forward Chaining dan Certainty Factor.",
    problem:
      "Diperlukan media pendukung yang dapat membantu pengguna memahami indikasi awal Tuberkulosis berdasarkan gejala yang dialami, tanpa menggantikan diagnosis tenaga kesehatan.",
    solution:
      "Mengembangkan aplikasi mobile Flutter yang menerapkan Forward Chaining untuk penelusuran aturan dan Certainty Factor untuk perhitungan tingkat keyakinan berdasarkan gejala dan bobot pakar.",
    points: [
      "Mengimplementasikan algoritma Forward Chaining dan Certainty Factor.",
      "Melakukan penelitian dan pengambilan data di Puskesmas Kedaung Barat.",
      "Mengembangkan aplikasi Flutter dengan backend Express.js.",
    ],
  },
  {
    slug: "redesign-gais",
    title: "Redesign UI/UX GAIS",
    role: "UI/UX Designer",
    stack: "Figma",
    category: "Design",
    summary:
      "Redesign antarmuka fitur nilai pada Global Institute Academic Information System (GAIS).",
    problem:
      "Fitur nilai membutuhkan penyajian informasi akademik yang lebih terstruktur agar pengguna dapat memahami informasi nilai dengan lebih mudah.",
    solution:
      "Melakukan riset dan merancang ulang antarmuka fitur nilai menggunakan Figma, dilengkapi prototipe interaktif untuk menggambarkan alur penggunaan.",
    points: [
      "Melakukan riset dan evaluasi kebutuhan desain fitur nilai.",
      "Merancang ulang antarmuka dan alur pengguna.",
      "Membuat prototipe interaktif menggunakan Figma.",
    ],
  },
  {
    slug: "sistem-rawat-jalan",
    title: "Sistem Informasi Rawat Jalan",
    role: "UI/UX Designer",
    stack: "Figma",
    category: "Design",
    summary:
      "Perancangan UI/UX sistem informasi rawat jalan dengan konsep antrean FIFO dan prioritas.",
    problem:
      "Proses antrean pasien perlu memiliki alur yang jelas dengan mempertimbangkan urutan kedatangan dan kebutuhan prioritas pasien.",
    solution:
      "Merancang antarmuka dan alur antrean menggunakan pendekatan FIFO serta prioritas, sehingga proses pelayanan dapat divisualisasikan secara terstruktur melalui prototipe Figma.",
    points: [
      "Merancang alur antrean berdasarkan FIFO dan prioritas.",
      "Mendesain antarmuka sistem informasi rawat jalan.",
      "Membuat prototipe alur pengguna menggunakan Figma.",
    ],
  },
];

function ProjectDetail({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const gallery = project.gallery ?? [];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="project-detail-title"
        aria-modal="true"
        className="max-h-[94dvh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        role="dialog"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
            Detail project
          </p>
          <button
            aria-label="Tutup detail project"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl leading-none text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-brand-green"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        </div>

        <div className="space-y-8 p-5 sm:p-8">
          {gallery.length > 0 && (
            <div>
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  alt={`${project.title} - gambar ${activeImage + 1}`}
                  className="max-h-[55vh] w-full object-contain"
                  src={gallery[activeImage]}
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                  {gallery.map((image, index) => (
                    <button
                      aria-label={`Tampilkan gambar ${index + 1}`}
                      aria-pressed={activeImage === index}
                      className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${
                        activeImage === index
                          ? "border-brand-green"
                          : "border-transparent"
                      }`}
                      key={image}
                      onClick={() => setActiveImage(index)}
                      type="button"
                    >
                      <img
                        alt=""
                        className="h-full w-full object-cover"
                        src={image}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <header>
            <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
              {project.category}
            </span>
            <h2
              className="mt-3 text-2xl font-bold text-brand-text sm:text-3xl"
              id="project-detail-title"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{project.role}</p>
            <p className="mt-4 leading-relaxed text-gray-600">
              {project.summary}
            </p>
          </header>

          <section aria-label="Teknologi yang digunakan">
            <h3 className="mb-3 text-lg font-semibold text-brand-text">
              Tech stack
            </h3>
            <StackBadges stack={project.stack} />
          </section>

          <div className="grid gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Masalah
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {project.problem}
              </p>
            </section>
            <section className="rounded-2xl border border-green-200 bg-green-50/70 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Solusi
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {project.solution}
              </p>
            </section>
          </div>

          <section>
            <h3 className="mb-3 text-lg font-semibold text-brand-text">
              Kontribusi
            </h3>
            <ul className="space-y-2">
              {project.points.map((point) => (
                <li
                  className="flex gap-3 text-sm leading-relaxed text-gray-600"
                  key={point}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

function StackBadges({ stack }) {
  const technologies = stackOptions[stack] ?? [{ name: stack }];

  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map(({ name, icon }) => (
        <li
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
          key={name}
        >
          {icon ? (
            <img alt="" className="h-4 w-4 object-contain" src={icon} />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-green/10 text-[9px] font-bold text-brand-green"
            >
              {name.slice(0, 1)}
            </span>
          )}
          {name}
        </li>
      ))}
    </ul>
  );
}

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="flex-1 px-container-mobile py-12 md:px-desktop md:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          Karya &amp; pengalaman
        </p>
        <p className="text-3xl font-bold text-brand-green ">
          Portofolio proyek
        </p>
        <p className="mt-4 leading-relaxed text-gray-600">
          Beberapa project yang pernah saya kerjakan, mulai dari aplikasi web
          dan mobile hingga perancangan UI/UX.
        </p>
      </header>

      <section
        aria-label="Daftar project portfolio"
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <article
            onClick={() => setSelectedProject(project)}
            className="group flex min-w-0 flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none"
            key={project.slug}
          >
            <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
              {project.cover ? (
                <img
                  alt={`Preview ${project.title}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  loading="lazy"
                  src={project.cover}
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-linear-to-br from-green-50 via-white to-gray-100 p-6 text-center">
                  <span className="text-lg font-semibold text-brand-green">
                    {project.title}
                  </span>
                </div>
              )}
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-green shadow-sm">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-lg font-bold text-brand-text">
                {project.title}
              </h2>
              <p className="mt-1 text-xs text-gray-500">{project.role}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                {project.summary}
              </p>
              <div className="mt-4">
                <StackBadges stack={project.stack} />
              </div>
            </div>
          </article>
        ))}
      </section>

      {selectedProject && (
        <ProjectDetail
          key={selectedProject.slug}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </main>
  );
}

export default Portfolio;
