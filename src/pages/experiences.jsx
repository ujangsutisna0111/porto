const experiences = [
  {
    role: "IT Developer (Flutter)",
    company: "PT Pendekar Bodoh",
    program: "Magang Kemnaker",
    period: "24 November 2025 – 23 Mei 2026",
    responsibilities: [
      "Mempelajari dan memahami alur bisnis (business flow) perusahaan sebagai dasar pengembangan sistem internal.",
      "Berperan sebagai Frontend Developer menggunakan Flutter untuk pengembangan berbagai sistem perusahaan.",
      "Mengembangkan dan melakukan integrasi aplikasi dengan layanan backend berbasis API.",
      "Berkontribusi dalam migrasi dan pengembangan sistem yang sebelumnya menggunakan sistem pihak ketiga.",
      "Melakukan pengujian (testing), perbaikan bug, keamanan data, dan optimalisasi performa aplikasi.",
    ],
  },
];

const Experiences = () => {
  return (
    <main className="flex-1 px-container-mobile py-12 md:px-desktop md:py-16">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          Pengalaman Kerja
        </p>
        <h1 className="text-3xl font-bold text-brand-green">
          Pengalaman profesional saya
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
          Pengalaman mengembangkan aplikasi dan sistem internal perusahaan.
        </p>
      </header>

      <ol className="mx-auto max-w-4xl">
        {experiences.map((experience) => (
          <li key={`${experience.company}-${experience.role}`}>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8">
              <p className="text-sm font-semibold text-brand-green">
                {experience.period}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-brand-green">
                {experience.role}
              </h2>
              <p className="mt-1 font-medium text-gray-700">
                {experience.company} <span aria-hidden="true">—</span>{" "}
                {experience.program}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Experiences;
