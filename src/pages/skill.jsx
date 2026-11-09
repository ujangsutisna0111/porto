import { useState } from "react";
import codeigniterIcon from "../assets/svg/codeigniter.svg";
import bootstrapIcon from "../assets/svg/bootstrap.svg";
import cssIcon from "../assets/svg/css.svg";
import dartIcon from "../assets/svg/dart.svg";
import expressIcon from "../assets/svg/express.svg";
import fastapiIcon from "../assets/svg/fastapi.svg";
import flutterIcon from "../assets/svg/flutter.svg";
import htmlIcon from "../assets/svg/html.svg";
import javascriptIcon from "../assets/svg/javascript.svg";
import nextjsIcon from "../assets/svg/nextjs.svg";
import nodejsIcon from "../assets/svg/nodejs.svg";
import sqlServerIcon from "../assets/svg/microsoftsqlserver.svg";
import mysqlIcon from "../assets/svg/mysql.svg";
import phpIcon from "../assets/svg/php.svg";
import pythonIcon from "../assets/svg/python.svg";
import postgresqlIcon from "../assets/svg/postgresql.svg";
import rabbitmqIcon from "../assets/svg/rabbitmq.svg";
import reactIcon from "../assets/svg/react.svg";
import redisIcon from "../assets/svg/redis.svg";
import tailwindIcon from "../assets/svg/tailwindcss.svg";

const skillGroups = [
  {
    title: "Frontend Development",
    details: [
      {
        name: "React",
        description: "Komponen, Hooks, dan proses menampilkan antarmuka.",
      },
      {
        name: "Next.js",
        description:
          "Pengembangan aplikasi React dengan routing dan rendering.",
      },
      {
        name: "Tailwind CSS",
        description: "Styling dan pembuatan desain responsif.",
      },
      {
        name: "JavaScript",
        description: "Manipulasi DOM dan operasi asinkron.",
      },
      {
        name: "HTML",
        description: "Markup semantik dan struktur halaman web.",
      },
      {
        name: "CSS",
        description: "Pengaturan tata letak, tampilan, dan animasi.",
      },
      { name: "Figma", description: "Desain UI/UX, wireframe, dan prototipe." },
    ],
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextjsIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
    ],
  },
  {
    title: "Backend Development",
    details: [
      {
        name: "Python",
        description: "Pengembangan backend dan logika aplikasi.",
      },
      {
        name: "FastAPI",
        description: "Pembuatan REST API menggunakan Python.",
      },
      {
        name: "REST API",
        description: "Perancangan API dan penggunaan metode HTTP.",
      },
      { name: "JWT", description: "Autentikasi dan otorisasi berbasis token." },
      {
        name: "Middleware",
        description: "Pemrosesan, pemeriksaan, dan validasi request.",
      },
      {
        name: "RabbitMQ",
        description: "Antrean pesan dan pemrosesan asinkron.",
      },
      {
        name: "Bcrypt",
        description: "Hash kata sandi untuk melindungi kredensial.",
      },
      { name: "AES", description: "Enkripsi data untuk menjaga kerahasiaan." },
      {
        name: "MVC",
        description: "Pola arsitektur Model, View, dan Controller.",
      },
    ],
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "PHP", icon: phpIcon },
      { name: "CodeIgniter 3", icon: codeigniterIcon },
      { name: "RabbitMQ", icon: rabbitmqIcon },
    ],
  },
  {
    title: "Mobile Development",
    details: [
      {
        name: "GetX",
        description: "Manajemen state, navigasi, dan injeksi dependensi.",
      },
      {
        name: "Dio",
        description: "Klien HTTP untuk REST API dan pengelolaan interceptor.",
      },
      {
        name: "Hive",
        description: "Database lokal, caching, dan penyimpanan offline.",
      },
      {
        name: "SharedPreferences",
        description:
          "Penyimpanan data sederhana berbentuk key-value dan preferensi pengguna.",
      },
      {
        name: "Clean Architecture",
        description:
          "Pemisahan lapisan aplikasi agar kode lebih terstruktur dan mudah dirawat.",
      },
      {
        name: "MVVM",
        description:
          "Pola arsitektur yang memisahkan Model, View, dan ViewModel.",
      },
    ],
    skills: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
    ],
  },
  {
    title: "Database Management",
    details: [
      {
        name: "PostgreSQL",
        description: "Database relasional dan pengelolaan transaksi.",
      },
      {
        name: "MySQL",
        description: "Database relasional dan pengelolaan data.",
      },
      {
        name: "SQL Server",
        description: "Penggunaan T-SQL dan pengambilan data.",
      },
      { name: "Redis", description: "Penyimpanan in-memory dan caching." },
      { name: "SQL", description: "Operasi CRUD, JOIN, dan agregasi data." },
      {
        name: "Database Design",
        description: "Perancangan ERD dan relasi antartabel.",
      },
      {
        name: "Database Migration",
        description: "Pengelolaan versi skema dan pembaruan struktur database.",
      },
    ],
    skills: [
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "SQL Server", icon: sqlServerIcon },
      { name: "Redis", icon: redisIcon },
    ],
  },
];

const SkillCard = ({ title, skills, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      data-aos="fade-up"
      className="skill-card-scene group relative h-[390px]"
    >
      <button
        type="button"
        aria-label={`${isFlipped ? "Kembali ke daftar skill" : "Lihat detail"} ${title}`}
        aria-expanded={isFlipped}
        className="absolute right-4 top-4 z-10 rounded-full border border-gray-300 bg-white/95 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:border-brand-green hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        onClick={() => setIsFlipped((flipped) => !flipped)}
      >
        {isFlipped ? "Kembali" : "Detail"}
      </button>

      <div className={`skill-card-inner${isFlipped ? " is-flipped" : ""}`}>
        <section className="skill-card-face skill-card-front flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors group-hover:border-brand-green/40 sm:p-6">
          <header className="pr-20">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
              Area keahlian
            </p>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </header>

          <ul className="mt-4 grid grid-cols-4 gap-[10px]">
            {skills.map(({ name, icon }) => (
              <li
                className="flex w-16 min-w-0 flex-col items-center gap-1 text-center"
                key={name}
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 p-4 shadow-sm transition-colors group-hover:border-brand-green/30">
                  <img
                    alt=""
                    className="h-full w-full object-contain"
                    src={icon}
                  />
                </span>
                <span className="min-w-0 text-xs font-medium leading-tight text-gray-700">
                  {name}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-auto border-t border-gray-100 pt-4 text-xs text-gray-400">
            Tekan Detail untuk melihat teknologi pendukung.
          </p>
        </section>

        <section
          aria-label={`Detail teknologi pendukung ${title}`}
          className="skill-card-face skill-card-back flex flex-col overflow-hidden rounded-2xl border border-brand-green/30 bg-white p-5 shadow-sm sm:p-6"
        >
          <header className="shrink-0 pr-20">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
              Teknologi pendukung
            </p>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </header>
          <ul className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
            {details.map(({ name, description }) => (
              <li className="rounded-xl bg-gray-50 p-3" key={name}>
                <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

const Skill = () => {
  return (
    <main className="flex-1 px-container-mobile py-12 md:px-desktop md:py-16">
      <header
        data-aos="fade-down"
        className="mb-10 text-center md:text-justify"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          keahlian teknis
        </p>
        <h1 className="text-3xl font-bold text-brand-green">
          Bidang dan teknologi yang saya kuasai
        </h1>
        <p className="mt-4 text-base leading-relaxed text-justify text-gray-600 md:text-lg">
          Teknologi dan tools yang saya gunakan untuk membangun aplikasi web,
          mobile, backend, dan mengelola database.
        </p>
      </header>
      <section
        aria-label="Skill categories"
        className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </section>
    </main>
  );
};

export default Skill;
