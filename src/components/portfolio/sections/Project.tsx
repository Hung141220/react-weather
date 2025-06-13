import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";

const Project = () => {
  return (
    <>
      <section
        id="projects"
        className="flex min-h-screen items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent">
              Fetured Projects
            </h2>
            {/*  */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30">
                <h3 className="mb-2 text-xl font-bold">
                  Invest, buy and sell land
                </h3>
                <p className="mb-4 text-gray-400">
                  Invest in subdivided land, can buy a land, post land lease
                </p>
                <div className="mb-4">
                  {["PHP", "LARAVEL", "Javascript", "JQUERY", "BOOSTRAP"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
                {/* <div className="">
                <a
                  href="https://github.com/Hung141220/vila-247"
                  target="_black"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
              </div>
              {/*  */}
              <div className="hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30">
                <h3 className="mb-2 text-xl font-bold">
                  Scan Qrcode Chùa Bái Đính
                </h3>
                <p className="mb-4 text-gray-400">
                  Visitors to Bai Dinh Pagoda can scan a QR code upon arrival,
                  which displays prominent locations within the pagoda and
                  nearby areas. The system also tracks the number of users who
                  scan the QR code.
                </p>
                <div className="mb-4">
                  {["PHP", "LARAVEL", "Javascript", "JQUERY", "BOOSTRAP"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
                {/* <div className="">
                <a
                  href="https://github.com/Hung141220/vila-247"
                  target="_black"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
              </div>
              {/*  */}
              <div className="hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30">
                <h3 className="mb-2 text-xl font-bold">Hotel Software</h3>
                <p className="mb-4 text-gray-400">
                  The hotel management software enables quick room booking, easy
                  search for available rooms, and accurate time tracking per
                  stay. An optimal solution for efficient and professional hotel
                  operations.
                </p>
                <div className="mb-4">
                  {[
                    "PHP",
                    "LARAVEL",
                    "Amazon S3",
                    "Scheduled Task",
                    "Laravel Queue",
                    "Redis Queue",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="my-1 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="">
                <a
                  href="https://github.com/Hung141220/vila-247"
                  target="_black"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
              </div>
              {/*  */}
              <div className="hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30">
                <h3 className="mb-2 text-xl font-bold">Ticket Buy Software</h3>
                <p className="mb-4 text-gray-400">
                  A smart ticketing system that generates QR codes for each
                  ticket purchase, integrates with MQTT for real-time access
                  control, supports online payments, and automatically issues
                  e-invoices.
                </p>
                <div className="mb-4">
                  {[
                    "PHP",
                    "LARAVEL",
                    "Amazon S3",
                    "Scheduled Task",
                    "Laravel Queue",
                    "Redis Queue",
                    "MQTT",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="my-1 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="">
                <a
                  href="https://github.com/Hung141220/vila-247"
                  target="_black"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
              </div>
              {/*  */}
              <div className="hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30">
                <h3 className="mb-2 text-xl font-bold">
                  Todolist - Redux Toolkit
                </h3>
                <p className="mb-4 text-gray-400">
                  A small Todo List project using Redux Toolkit to explore the
                  React library
                </p>
                <div className="mb-4">
                  {["React", "Redux Toolkit"].map((tech, key) => (
                    <span
                      key={key}
                      className="my-1 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="">
                  <Link
                    to="/todolist"
                    target="_black"
                    className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export default Project;
