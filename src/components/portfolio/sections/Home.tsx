const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          Hi, I'm Lê Mạnh Hùng
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-4xl mx-auto">
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
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transiotion relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Project
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
