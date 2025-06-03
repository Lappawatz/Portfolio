import { Button, Card, CardBody, CardHeader, Chip, Link } from "@heroui/react";
import {
  EnvelopeIcon,
  DocumentArrowDownIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon as EnvelopeSolid } from "@heroicons/react/24/solid";
import Img from "../components/ImgProfile.jsx";
import Profile from "../assets/folk.jpg"; // Adjust the path as necessary
import Footer from "../components/Footer.jsx";
import Project from "../components/Project.jsx"; // Assuming you have a Project component
// Assuming you have a Footer component
export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8 justify-center flex">
              <Img src={Profile} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Hi <span className="text-blue-500">I'm FOLK</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & UI/UX Designer passionate about creating
              beautiful, functional digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                color="primary"
                size="lg"
                startContent={<DocumentArrowDownIcon className="w-5 h-5" />}
              >
                Download Resume
              </Button>
              <Button
                variant="bordered"
                size="lg"
                startContent={<EnvelopeIcon className="w-5 h-5" />}
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Link
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
              >
                <EnvelopeIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I am passionate about learning and problem-solving, especially in
              website development, application development, and UX/UI design. I
              am excited to use my skills and gain practical experience by
              working on real projects. I am looking for an opportunity to
              contribute, learn, and grow as part of a dynamic team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                My journey began as a curious university student eager to
                understand how websites and applications work. Starting from the
                basics of HTML and CSS, I gradually developed my skills through
                coursework, self-learning, and real projects. Over time, I
                discovered a passion not only for front-end development but also
                for crafting seamless user experiences.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                University life gave me the opportunity to work on various team
                projects, explore full-stack development, and understand the
                importance of writing clean, maintainable code. It also taught
                me the value of collaboration, problem-solving, and continuous
                learning.
              </p>

              <div className="grid  gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Month Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center" isPressable>
                <CardBody className="p-6">
                  <CodeBracketIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Frontend
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    React, JavaScript, Tailwind CSS , DaisyUI
                  </p>
                </CardBody>
              </Card>

              <Card className="text-center" isPressable>
                <CardBody className="p-6">
                  <GlobeAltIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Backend
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Node.js, Express, SQL, MongoDB , SQL Server
                  </p>
                </CardBody>
              </Card>

              <Card className="text-center" isPressable>
                <CardBody className="p-6">
                  <PaintBrushIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Design
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Figma, UI/UX Design, Adobe Photoshop
                  </p>
                </CardBody>
              </Card>

              <Card className="text-center" isPressable>
                <CardBody className="p-6">
                  <DevicePhoneMobileIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Mobile
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    React Native
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Technologies I work with on a daily basis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "React",
              "React Native",
              "HTML",
              "CSS",
              "Next.js",
              "Node.js",
              "Express.js",
              "SQL",
              "MongoDB",
              "Tailwind CSS",
              "Figma",
              "Github",
              "Postman",
              "DaisyUI",
              "HeroUI",
            ].map((skill) => (
              <Chip
                key={skill}
                variant="flat"
                color="default"
                size="lg"
                className="text-slate-700 dark:text-slate-300"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Project />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            I'm always interested in new opportunities and exciting projects.
            Let's create something amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center" isPressable>
              <CardBody className="p-6">
                <EnvelopeSolid className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  john.doe@example.com
                </p>
              </CardBody>
            </Card>

            <Card className="text-center" isPressable>
              <CardBody className="p-6">
                <svg
                  className="h-8 w-8 text-blue-600 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  LinkedIn
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  linkedin.com/in/johndoe
                </p>
              </CardBody>
            </Card>

            <Card className="text-center" isPressable>
              <CardBody className="p-6">
                <svg
                  className="h-8 w-8 text-blue-600 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  GitHub
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  github.com/johndoe
                </p>
              </CardBody>
            </Card>
          </div>

          <Button
            color="primary"
            size="lg"
            startContent={<EnvelopeSolid className="w-5 h-5" />}
          >
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
