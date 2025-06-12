import RevealOnScroll from "./RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="
        flex
        min-h-screen
        items-center justify-center relative
      "
    >
      <RevealOnScroll>
        <div
          className="
          px-4
          text-center
        "
        >
          <h1
            className="
            mb-6
            text-5xl font-bold text-transparent leading-tight
            bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text
            md:text-7xl
            select-none
          "
          >
            Hi, I'm Le Manh Hung
          </h1>
          <p
            className="
            max-w-4xl
            mb-8 mx-auto
            text-gray-400 text-lg
          "
          >
            I have three years of hands-on experience working with PHP Laravel,
            one of the most popular and powerful web development frameworks.
            Throughout this time, I have developed, maintained, and optimized
            various web applications using Larave's robust features such as
            Eloquent ORM, Blade templating, and built-in authentication systems.
            My experience includes designing RESTful APIs.
          </p>
          <div
            className="
            flex
            space-x-4
            justify-center
          "
          >
            <a
              href="#projects"
              className="
              overflow-hidden
              py-3 px-6
              text-white font-medium
              bg-blue-500
              rounded transiotion relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            "
            >
              View Project
            </a>
            <a
              href="#contact"
              className="
              py-3 px-6
              text-blue-500 font-medium
              border border-blue-500/50
              transition-all
              rounded duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10
            "
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
