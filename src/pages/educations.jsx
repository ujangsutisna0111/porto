const education = [
  {
    type: "Pendidikan Formal",
    title: "S1 Teknik Informatika",
    institution: "Institut Teknologi dan Bisnis Bina Sarana Global",
    description:
      "Konsentrasi Software Engineering, dengan fokus pada pengembangan perangkat lunak, pemrograman, dan perancangan sistem.",
    detailLabel: "Konsentrasi",
    detail: "Software Engineering",
  },
  {
    type: "Pembelajaran Online",
    title: "Dicoding",
    institution: "Kelas online teknologi dan pengembangan keterampilan",
    description:
      "Pembelajaran teknologi dan pengembangan keterampilan melalui kelas online.",
    detailLabel: "Fokus",
    detail: "Backend Development",
  },
  {
    type: "Pembelajaran Online",
    title: "CodePolitan",
    institution: "Pembelajaran pemrograman",
    description:
      "Memperdalam pengetahuan teknis dan praktik pengembangan aplikasi.",
    detailLabel: "Fokus",
    detail: "Pemrograman dan Backend Development",
  },
];

const Educations = () => {
  return (
    <main className="flex-1 px-container-mobile py-12 md:px-desktop md:py-16">
      <header className=" mb-12 max-w-3xl text-center md:text-left">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          Pendidikan &amp; Pembelajaran
        </p>
        <h1 className="text-3xl font-bold text-brand-green">
          Terus belajar, terus bertumbuh
        </h1>
        <p className="mt-4 text-base text-justify leading-relaxed text-gray-600 md:text-lg">
          Membangun fondasi teknologi melalui pendidikan formal dan pembelajaran
          berkelanjutan.
        </p>
      </header>

      <ol className="relative mx-auto max-w-5xl before:absolute before:bottom-3 before:left-3 before:top-3 before:w-px before:bg-brand-green/30 md:before:left-1/2 md:before:-translate-x-1/2">
        {education.map((item, index) => {
          const isRight = index % 2 === 1;

          return (
            <li
              key={item.title}
              className="relative pb-8 pl-10 last:pb-0 md:grid md:grid-cols-2 md:gap-12 md:pb-12 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-brand-green md:left-1/2 md:-translate-x-1/2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>

              <article
                className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6 ${
                  isRight
                    ? "md:col-start-2"
                    : "md:col-start-1 md:row-start-1 md:text-right"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
                  {item.type}
                </p>
                <h2 className="mt-2 text-xl font-bold text-brand-green sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-1 font-medium leading-relaxed text-gray-700">
                  {item.institution}
                </p>
                <p className="mt-3 text-sm text-justify leading-relaxed text-gray-600 sm:text-base">
                  {item.description}
                </p>
                <div
                  className={`mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600 ${
                    !isRight ? "md:justify-end" : ""
                  }`}
                >
                  <span className="font-semibold text-gray-800">
                    {item.detailLabel}:
                  </span>
                  <span>{item.detail}</span>
                </div>
                {item.certificate && (
                  <p className="mt-2 text-sm text-gray-500">
                    Sertifikat: {item.certificate}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </main>
  );
};

export default Educations;
