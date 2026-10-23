import dartIcon from "../assets/svg/dart.svg";
import flutterIcon from "../assets/svg/flutter.svg";
import javascriptIcon from "../assets/svg/javascript.svg";
import mysqlIcon from "../assets/svg/mysql.svg";
import nodejsIcon from "../assets/svg/nodejs.svg";
import phpIcon from "../assets/svg/php.svg";
import postgresqlIcon from "../assets/svg/postgresql.svg";
import rabbitmqIcon from "../assets/svg/rabbitmq.svg";
import reactIcon from "../assets/svg/react.svg";
import tailwindIcon from "../assets/svg/tailwindcss.svg";
import developerPhoto from "../assets/photo.png";

const orbitSkills = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "Dart", icon: dartIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "RabbitMQ", icon: rabbitmqIcon },
  { name: "PHP", icon: phpIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
];

const Home = () => {
  return (
    <main className="flex  flex-1 flex-col-reverse items-center gap-10 px-container-mobile py-12 md:flex-row md:gap-8 md:px-desktop md:py-0">
      <section className="flex w-full flex-col gap-4 items-center md:items-start md:flex-1">
        <p className="text-shadow-mauve-300 md:text-xl text-brand-green font-bold text-center md:text-left">
          Sofware Developer ( Web & Mobile developer )
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-brand-green text-center md:text-left">
          Halo, Saya Ujang sutisna
        </h2>
        <p className="text-sm md:text-md text-justify font-extralight text-gray-500">
          Software Developer yang berfokus pada pengembangan aplikasi Web dan
          Mobile dengan memperhatikan kualitas kode, arsitektur yang
          terstruktur, performa, dan keamanan. Memiliki pengalaman menggunakan
          berbagai teknologi untuk membangun aplikasi yang efisien,
          maintainable, dan scalable.
        </p>
      </section>
      <section
        className="flex w-full flex-col items-center gap-5 md:flex-1"
        aria-labelledby="developer-skills-title"
      >
        <div className="developer-orbit">
          <div className="developer-orbit-track" aria-hidden="true" />
          <ul
            className="developer-orbit-skills"
            aria-label="Teknologi yang dikuasai"
          >
            {orbitSkills.map(({ name, icon }, index) => {
              const angle = (index * 2 * Math.PI) / orbitSkills.length;

              return (
                <li
                  key={name}
                  className="developer-orbit-skill"
                  style={{
                    "--orbit-x": `${50 + 50 * Math.cos(angle)}%`,
                    "--orbit-y": `${50 + 50 * Math.sin(angle)}%`,
                  }}
                >
                  <img
                    src={icon}
                    alt=""
                    className="h4 w-4 md:h-7 md:w-7 object-contain"
                  />
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
          <div className="developer-portrait">
            <img
              src={developerPhoto}
              alt="Potret Ujang Sutisna"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
