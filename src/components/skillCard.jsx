import { useState } from "react";

const SkillCard = ({ title, skills, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article className="skill-card-scene group relative">
      <button
        type="button"
        aria-label={`${isFlipped ? "Kembali ke daftar" : "Lihat detail"} ${title}`}
        aria-expanded={isFlipped}
        className="absolute right-4 top-4 z-10 rounded-full border border-gray-300 bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-brand-green hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        onClick={() => setIsFlipped((flipped) => !flipped)}
      >
        {isFlipped ? "Kembali" : "Detail"}
      </button>
      <div className={`skill-card-inner${isFlipped ? " is-flipped" : ""}`}>
        <section className="skill-card-face skill-card-front rounded-2xl border border-gray-300 bg-white p-6 shadow-2xl shadow-gray-300 transition-colors group-hover:border-brand-green/60">
          <h2 className="mb-6 pr-16 text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <ul className="grid grid-cols-3 gap-x-3 gap-y-5">
            {skills.map(({ name, icon }) => (
              <li
                key={name}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="flex h-16 w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-sm transition-all duration-200 group-hover:border-brand-green/20 hover:shadow-md">
                  {icon ? (
                    <img
                      className="h-10 w-10 object-contain"
                      src={icon}
                      alt=""
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-sm font-bold text-brand-green"
                    >
                      {name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </span>
                <span className="text-xs font-medium leading-tight text-gray-700">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section
          aria-label={`Detail teknologi pendukung ${title}`}
          className="skill-card-face skill-card-back flex flex-col overflow-y-auto rounded-2xl border border-brand-green/30 bg-white p-6 shadow-2xl shadow-gray-300"
        >
          <h2 className="mb-1 pr-16 text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-green">
            Teknologi Pendukung
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {details.map(({ name, description }) => (
              <li key={name}>
                <h4 className="font-semibold text-gray-900">{name}</h4>
                <p className="text-xs leading-relaxed text-gray-600">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-5 text-xs text-gray-400">
            Klik tombol untuk kembali ke daftar skill.
          </p>
        </section>
      </div>
    </article>
  );
};

export default SkillCard;
