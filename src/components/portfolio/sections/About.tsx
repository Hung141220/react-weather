import RevealOnScroll from "../../shared/RevealOnScroll";

const About = () => {
  const backendSkills = ["PHP", "Laravel", "MySql", "Oracle"];

  return (
    <>
      <section
        id="about"
        className="flex min-h-screen items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent">
              About me
            </h2>

            <div className="rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-1">
              <p className="mb-6 text-gray-300">
                Passionate developer with expertise is building scalable web
                application and creating innovative solution
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                  <h3 className="mb-4 text-xl font-bold">Fontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["ReactJs", "TailwindCSS", "Bootstrap"].map(
                      (tech, key) => (
                        <span
                          key={key}
                          className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                  <h3 className="mb-4 text-xl font-bold">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1">
                {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>It Plus</li>
                </ul>
              </div> */}
                <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
                  <h3 className="mb-4 text-xl font-bold">Work Experience</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="">
                      <h4 className="indent-8 font-semibold">
                        - CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ VÀ THƯƠNG MẠI BK247{" "}
                        <strong>(06/2022 - 12/2022)</strong>
                      </h4>
                      <p>Developer and maintained current projects.</p>
                    </div>
                    <div className="">
                      <h4 className="indent-8 font-semibold">
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
