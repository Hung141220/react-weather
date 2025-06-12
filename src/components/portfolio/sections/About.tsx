import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const backendSkills = ["PHP", "Laravel", "MySql", "Oracle"];

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex justify-center items-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
                Passionate developer with expertise is building scalable web
                application and creating innovative solution
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Fontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["ReactJs", "TailwindCSS", "Bootstrap"].map(
                      (tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 mt-8">
                {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>It Plus</li>
                </ul>
              </div> */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                  <div className="space-y-4 text-gray-300 ">
                    <div className="">
                      <h4 className="font-semibold indent-8">
                        - CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ VÀ THƯƠNG MẠI BK247{" "}
                        <strong>(06/2022 - 12/2022)</strong>
                      </h4>
                      <p>Developer and maintained current projects.</p>
                    </div>
                    <div className="">
                      <h4 className="font-semibold indent-8">
                        - Newway Software <strong>(01/2023 - Present)</strong>
                      </h4>
                      <p>Developer and maintained current projects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export default About;
