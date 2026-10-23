import flutterIcon from "../assets/svg/flutter.svg";
import reactIcon from "../assets/svg/react.svg";
import nodejsIcon from "../assets/svg/nodejs.svg";

const expertise = [
  {
    title: "Mobile",
    technologies: "Flutter · Dart",
    icon: flutterIcon,
  },
  {
    title: "Web",
    technologies: "React · JavaScript",
    icon: reactIcon,
  },
  {
    title: "Backend",
    technologies: "Node.js · Express.js",
    icon: nodejsIcon,
  },
];

const About = () => {
  return (
    <main className="flex flex-1 flex-col md:flex-row gap-12 px-container-mobile py-10 sm:gap-16 sm:px-8 sm:py-12 lg:gap-20 lg:px-desktop lg:py-16">
      <section className=" flex-1">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          Tentang Saya
        </p>
        <p className="text-3xl text-brand-green font-bold">
          Halo, saya Ujang Sutisna.
        </p>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-gray-600 text-justify md:text-lg">
          <p>
            Saya seorang Tech Enthusiast dengan latar belakang Teknik
            Informatika dan ketertarikan dalam pengembangan aplikasi web,
            mobile, serta backend. Saya senang membangun solusi digital yang
            tidak hanya berfungsi dengan baik, tetapi juga memiliki struktur
            kode yang rapi, performa optimal, dan mudah dikembangkan.
          </p>
          <p>
            Saya terbiasa bekerja dengan Flutter, JavaScript, React, Node.js,
            dan berbagai teknologi pendukung untuk membangun aplikasi serta
            mengintegrasikan API. Saya juga terus mengembangkan kemampuan dalam
            perancangan arsitektur aplikasi, pengelolaan database, dan keamanan
            sistem.
          </p>
          <p>
            Bagi saya, setiap proyek adalah kesempatan untuk memecahkan masalah,
            mempelajari hal baru, dan menciptakan aplikasi yang memberikan
            manfaat nyata bagi penggunanya.
          </p>
        </div>
      </section>

      <section>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          Fokus
        </p>
        <p className="mb-6 text-3xl font-bold text-brand-green ">
          Area yang saya tekuni
        </p>
        <div className="mt-6 mb-5 max-w-3xl text-left text-base leading-relaxed text-gray-600 sm:text-justify md:text-lg">
          <p>berfokus pada pengembangan aplikasi</p>
        </div>
        <div className="grid gap-2 grid-cols-3">
          {expertise.map(({ title, technologies, icon }) => (
            <article
              key={title}
              className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none sm:p-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src={icon}
                  alt=""
                  className="h-8 w-8 shrink-0 animate-bounce object-contain motion-reduce:animate-none"
                />
                <h3 className="text-lg font-semibold text-brand-text">
                  {title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{technologies}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
