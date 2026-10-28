import { useEffect, useState } from "react";
import expressCertificate from "../assets/sertification/Certificate Detail - CODEPOLITAN_page-0001.jpg";
import reactCertificate from "../assets/sertification/Certificate Detail - CODEPOLITANreact_page-0001.jpg";
import backendCertificate from "../assets/sertification/sertifikat_course_271_3212208_180926071220_page-0001.jpg";

const certifications = [
  {
    id: "belajar-dasar-express-js",
    title: "Belajar Dasar Express.js",
    issuer: "CODEPOLITAN",
    category: "Backend Development",
    issueDate: "13 Juli 2026",
    expiryDate: "12 Juli 2029",
    credentialUrl: "https://codepolitan.com/c/KHK69WO",
    description:
      "Sertifikat penyelesaian kelas online Belajar Dasar Express.js.",
    skills: ["JavaScript", "Node.js", "Express.js", "Backend Development"],
    image: expressCertificate,
  },
  {
    id: "belajar-react-js",
    title: "Belajar ReactJS",
    issuer: "CODEPOLITAN",
    category: "Frontend Development",
    issueDate: "22 Oktober 2026",
    expiryDate: "22 Oktober 2029",
    credentialUrl: "https://codepolitan.com/c/9QBXREU",
    description: "Sertifikat penyelesaian kelas online Belajar ReactJS.",
    skills: ["ReactJS", "JavaScript", "Frontend Development"],
    image: reactCertificate,
  },
  {
    id: "belajar-fundamental-backend-javascript",
    title: "Belajar Fundamental Back-End dengan JavaScript",
    issuer: "Dicoding",
    category: "Backend Development",
    issueDate: "18 September 2026",
    expiryDate: "18 September 2029",
    credentialId: "98XW8V2EWPM3",
    credentialUrl: "https://www.dicoding.com/certificates/98XW8V2EWPM3",
    description:
      "Kelas pengembangan RESTful API untuk membangun aplikasi back-end yang dapat mengelola data dan mengamankan akses server. Pembelajaran mengacu pada standar industri yang divalidasi AWS.",
    skills: [
      "JavaScript",
      "Node.js",
      "Hapi.js",
      "RESTful API",
      "PostgreSQL",
      "Amazon RDS",
      "Authentication",
      "Authorization",
      "Joi",
      "Database Normalization",
      "RabbitMQ",
      "Amazon MQ",
      "Amazon S3",
      "Redis",
      "Amazon ElastiCache",
    ],
    learningMaterials: [
      {
        title: "Hapi Plugin dan Data Validation",
        description:
          "Mengelola source code menggunakan sistem plugin Hapi agar lebih mudah dipelihara serta menerapkan validasi data menggunakan Joi.",
        durationHours: 7,
      },
      {
        title: "Database menggunakan Amazon RDS",
        description:
          "Menggunakan PostgreSQL sebagai penyimpanan data persisten, baik secara lokal untuk development maupun di Amazon RDS untuk production.",
        durationHours: 6,
      },
      {
        title: "Authentication dan Authorization",
        description:
          "Menerapkan autentikasi untuk memvalidasi pengguna RESTful API dan otorisasi untuk memvalidasi akses pengguna terhadap resource.",
        durationHours: 13,
      },
      {
        title: "Normalisasi Database",
        description:
          "Menerapkan normalisasi database untuk membangun fitur kompleks yang membutuhkan join dari beberapa tabel.",
        durationHours: 7,
      },
      {
        title: "Message Broker dengan Amazon MQ",
        description:
          "Menangani permintaan secara asynchronous menggunakan RabbitMQ, baik secara lokal maupun production melalui Amazon MQ.",
        durationHours: 7,
      },
      {
        title: "Storage dengan Amazon S3",
        description:
          "Mengelola penyimpanan file secara lokal menggunakan core module fs dan memanfaatkan Amazon S3 untuk penyimpanan cloud.",
        durationHours: 5,
      },
      {
        title: "Caching menggunakan Amazon ElastiCache",
        description:
          "Menerapkan memory caching menggunakan Redis untuk mempercepat respons dalam menampilkan resource, baik secara lokal maupun production melalui Amazon ElastiCache.",
        durationHours: 5,
      },
    ],
    evaluation: {
      type: "Submission",
      description:
        "Membangun proyek RESTful API yang menerapkan database, storage, message broker, caching, authentication, dan authorization.",
    },
    totalLearningHours: 90,
    image: backendCertificate,
  },
];

function CertificationDetail({ certification, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="certification-detail-title"
        aria-modal="true"
        className="max-h-[94dvh] w-full max-w-4xl overflow-y-auto rounded-sm bg-white shadow-2xl"
        role="dialog"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
            Detail sertifikasi
          </p>
          <button
            aria-label="Tutup detail sertifikasi"
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-gray-100 text-2xl leading-none text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-brand-green"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        </div>

        <div className="space-y-8 p-5 sm:p-8">
          <img
            alt={`Sertifikat ${certification.title} dari ${certification.issuer}`}
            className="max-h-[55vh] w-full rounded-sm bg-gray-100 object-contain"
            src={certification.image}
          />

          <header>
            <span className="inline-flex rounded-sm bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
              {certification.category}
            </span>
            <h2
              className="mt-3 text-2xl font-bold text-brand-text sm:text-3xl"
              id="certification-detail-title"
            >
              {certification.title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Diterbitkan oleh {certification.issuer}
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              {certification.description}
            </p>
          </header>

          <dl className="grid gap-4 rounded-sm border border-gray-200 bg-gray-50 p-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Tanggal terbit
              </dt>
              <dd className="mt-1 font-semibold text-gray-900">
                {certification.issueDate}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Berlaku hingga
              </dt>
              <dd className="mt-1 font-semibold text-gray-900">
                {certification.expiryDate}
              </dd>
            </div>
            {certification.credentialId && (
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Credential ID
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {certification.credentialId}
                </dd>
              </div>
            )}
            {certification.totalLearningHours && (
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Durasi belajar
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {certification.totalLearningHours} jam
                </dd>
              </div>
            )}
          </dl>

          <section aria-label="Keahlian yang dipelajari">
            <h3 className="mb-3 text-lg font-semibold text-brand-text">
              Keahlian
            </h3>
            <ul className="flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <li
                  className="rounded-sm border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {certification.learningMaterials && (
            <section aria-label="Materi pembelajaran">
              <h3 className="mb-3 text-lg font-semibold text-brand-text">
                Materi pembelajaran
              </h3>
              <ul className="space-y-3">
                {certification.learningMaterials.map((material) => (
                  <li
                    className="rounded-sm border border-gray-200 bg-gray-50 p-4"
                    key={material.title}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-gray-900">
                        {material.title}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {material.durationHours} jam
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {material.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {certification.evaluation && (
            <section
              aria-label="Evaluasi pembelajaran"
              className="rounded-sm border border-green-200 bg-green-50/70 p-5"
            >
              <h3 className="text-lg font-semibold text-brand-text">
                Evaluasi: {certification.evaluation.type}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {certification.evaluation.description}
              </p>
            </section>
          )}

          <a
            className="inline-flex rounded-sm bg-brand-green px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            href={certification.credentialUrl}
            rel="noreferrer"
            target="_blank"
          >
            Verifikasi sertifikat
          </a>
        </div>
      </section>
    </div>
  );
}

function Certification() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <main className="flex-1 px-container-mobile py-12 md:px-desktop md:py-16">
      <header
        data-aos="fade-right"
        className="mb-10 max-w-2xl text-center md:text-justify"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          Sertifikasi
        </p>
        <h1 className="text-3xl font-bold text-brand-green">
          Sertifikasi &amp; pencapaian
        </h1>
        <p className="mt-4 leading-relaxed text-gray-600 text-justify">
          Sertifikasi yang mendukung perjalanan belajar dan pengembangan
          keterampilan saya.
        </p>
      </header>

      <section
        data-aos="fade-up"
        aria-label="Daftar sertifikasi"
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {certifications.map((certification) => (
          <article
            className="flex min-w-0 flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none"
            key={certification.id}
          >
            <button
              aria-label={`Lihat detail sertifikat ${certification.title}`}
              className="group flex h-full flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              onClick={() => setSelectedCertification(certification)}
              type="button"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-gray-100">
                <img
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  loading="lazy"
                  src={certification.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="w-fit rounded-sm bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                  {certification.category}
                </span>
                <h2 className="mt-3 text-lg font-bold text-brand-text">
                  {certification.title}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {certification.issuer} &middot; {certification.issueDate}
                </p>
                <span className="mt-5 text-sm font-semibold text-brand-green">
                  Lihat detail &rarr;
                </span>
              </div>
            </button>
          </article>
        ))}
      </section>

      {selectedCertification && (
        <CertificationDetail
          certification={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </main>
  );
}

export default Certification;
