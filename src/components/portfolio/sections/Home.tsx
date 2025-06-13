import RevealOnScroll from "./RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px-4 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-5xl leading-tight font-bold text-transparent select-none md:text-7xl">
            Hi, I'm Le Manh Hung
          </h1>
          <p className="mx-auto mb-8 max-w-4xl text-center text-xl text-gray-400 md:text-lg">
            I have three years of hands-on experience working with PHP Laravel,
            one of the most popular and powerful web development frameworks.
            Throughout this time, I have developed, maintained, and optimized
            various web applications using Larave's robust features such as
            Eloquent ORM, Blade templating, and built-in authentication systems.
            My experience includes designing RESTful APIs.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="transiotion relative overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Project
            </a>
            <a
              href="#contact"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
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
