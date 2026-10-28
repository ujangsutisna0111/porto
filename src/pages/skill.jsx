import codeigniterIcon from "../assets/svg/codeigniter.svg";
import bootstrapIcon from "../assets/svg/bootstrap.svg";
import cssIcon from "../assets/svg/css.svg";
import dartIcon from "../assets/svg/dart.svg";
import expressIcon from "../assets/svg/express.svg";
import flutterIcon from "../assets/svg/flutter.svg";
import htmlIcon from "../assets/svg/html.svg";
import javascriptIcon from "../assets/svg/javascript.svg";
import nodejsIcon from "../assets/svg/nodejs.svg";
import sqlServerIcon from "../assets/svg/microsoftsqlserver.svg";
import mysqlIcon from "../assets/svg/mysql.svg";
import phpIcon from "../assets/svg/php.svg";
import postgresqlIcon from "../assets/svg/postgresql.svg";
import rabbitmqIcon from "../assets/svg/rabbitmq.svg";
import reactIcon from "../assets/svg/react.svg";
import redisIcon from "../assets/svg/redis.svg";
import tailwindIcon from "../assets/svg/tailwindcss.svg";
import SkillCard from "../components/skillCard";

const skillGroups = [
  {
    title: "Frontend Development",
    details: [
      {
        name: "React",
        description: "Komponen, Hooks, dan proses menampilkan antarmuka.",
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
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
    ],
  },
  {
    title: "Backend Development",
    details: [
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
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} index={index} {...group} />
        ))}
      </section>
    </main>
  );
};

export default Skill;
