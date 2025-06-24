import React from "react";
import { Button, Link } from "@heroui/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Img from "./ImgProfile.jsx";
import Profile from "../assets/folk.jpg";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-10 md:pt-20 pb-16 px-10 sm:px-6 lg:px-8 mt-10 md:mt-10"
    >
      <div className="w-full">
        {/* เปลี่ยนจาก max-w-6xl mx-auto เป็น w-full */}
        <div className="text-center py-1 ">
          <div className="mb-8 justify-center flex">
            <Img src={Profile} />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 flex flex-wrap items-center justify-center gap-2">
            Hi I'M <span className="text-blue-600">FOLK</span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            <Typewriter
              options={{
                strings: [
                  "Front-end ",
                  "UX/UI Designer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            passionate about creating beautiful, functional digital experiences
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                color="primary"
                size="lg"
                startContent={<DocumentArrowDownIcon className="w-5 h-5" />}
                className="bg-blue-600 hover:bg-blue-400 text-white hover:scale-105 transition-transform duration-200"
              >
                Download Resume
              </Button>
            </a>
            <a href="mailto:lappawatyahtung@gmail.com">
              <Button
                variant="bordered"
                size="lg"
                startContent={<EnvelopeIcon className="w-5 h-5" />}
              >
                Get In Touch
              </Button>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Lappawatz"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/lappawat-yahtung-589a39366/?trk=opento_sprofile_topcard"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="mailto:lappawatyahtung@gmail.com"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
            >
              <EnvelopeIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
