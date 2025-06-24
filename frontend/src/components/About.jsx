import React from "react";
import { Card, CardBody } from "@heroui/react";
import MotionLeft from "./motion/MotionLeft.jsx";
import MotionRight from "./motion/MotionRight.jsx";
import { useNavigate } from "react-router-dom";
import Scg from "../assets/LogoScg.png";
import Img from "./ImgProfile.jsx";
import Psu from "../assets/LogoPsu.png";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
export default function About() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
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
            website development, application development, and UX/UI design. I am
            excited to use my skills and gain practical experience by working on
            real projects. I am looking for an opportunity to contribute, learn,
            and grow as part of a dynamic team.
          </p>
        </div>

        <MotionLeft delay={0.3}>
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
              <MotionRight delay={0.5}>
                <Card
                  className="text-center bg-blue-50 dark:bg-gray-900 "
                  isPressable
                >
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
              </MotionRight>

              <MotionRight delay={0.7}>
                <Card
                  className="text-center bg-green-50 dark:bg-gray-900"
                  isPressable
                >
                  <CardBody className="p-6">
                    <GlobeAltIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Backend
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Node.js, Express.Js, MongoDB , SQL Server
                    </p>
                  </CardBody>
                </Card>
              </MotionRight>

              <MotionRight delay={0.9}>
                <Card
                  className="text-center bg-purple-50 dark:bg-gray-900"
                  isPressable
                >
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
              </MotionRight>

              <MotionRight delay={1.1}>
                <Card
                  className="text-center w-full bg-amber-50 dark:bg-gray-900"
                  isPressable
                >
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
              </MotionRight>
            </div>
          </div>
        </MotionLeft>

        <div className="mt-16 text-start">
          <MotionLeft delay={0.2}>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Education
            </h4>
          </MotionLeft>
          <div className="flex items-center gap-4 mb-4 justify-between">
            <MotionLeft delay={0.4}>
              <div className="flex items-center gap-4">
                <Img
                  src={Psu}
                  alt="SCG"
                  width="100"
                  height="100"
                  className="mr-2 m-0"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-semibold text-slate-900 dark:text-white ">
                    Prince of Songkla University
                  </h1>
                  <a className="card text-sm md:text-base bg-emerald-500 px-2 rounded-md text-white">
                    Bachelor of ComputerScience
                  </a>
                </div>
              </div>
            </MotionLeft>
            <span className="hidden sm:inline text- font-semibold text-blue-800 dark:text-amber-100">
              Graduation year : 2025
            </span>
          </div>
        </div>

        <div className="mt-12 text-start">
          <MotionLeft delay={0.2}>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Work Experience
            </h4>
          </MotionLeft>
          <div className="flex items-center gap-4 mb-4 justify-between">
            <MotionLeft delay={0.4}>
              <div className="flex items-center gap-4">
                <Img
                  src={Scg}
                  alt="SCG"
                  width="100"
                  height="100"
                  className="mr-2"
                />
                <div className="flex flex-col  gap-2">
                  <h1 className="text-xl font-semibold text-slate-900 dark:text-white ">
                    Siam Cement Group
                  </h1>
                  <a className="card text-sm md:text-base bg-emerald-500 px-2 rounded-md text-white">
                    UX/UI Designer & Front-end
                  </a>
                </div>
              </div>
            </MotionLeft>
            <span className="hidden sm:inline text-sm font-semibold text-blue-800 dark:text-amber-100">
              November 2024 - March 2025 (Internship)
            </span>
          </div>
          <MotionRight delay={0.6}>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              The organization regularly provides training and bootcamps, but it
              lacks tools to measure how well employees apply their skills in
              real work. To solve this, I developed a tracking system with
              evaluations. Employees who meet the set criteria can earn points
              and redeem them for rewards.
            </p>
          </MotionRight>
          <MotionLeft delay={0.8}>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
              The system also helps track daily tasks, monitor and record
              machine maintenance, and collect employee work data. This
              information can then be analyzed to improve performance and
              support future development.
            </p>
          </MotionLeft>
        </div>
      </div>
    </section>
  );
}
