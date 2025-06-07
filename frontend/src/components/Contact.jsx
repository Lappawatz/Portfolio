import React, { useState } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { EnvelopeIcon as EnvelopeSolid } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import MotionLeft from "./motion/MotionLeft.jsx";
import MotionRight from "./motion/MotionRight.jsx";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import MessageModal from "./ModelForm.jsx";
import { Modal, ModalContent, ModalBody } from "@heroui/react";
function Contact() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          <Typewriter
            options={{
              strings: ["Let's Work Together"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
          I'm always interested in new opportunities and exciting projects.
          Let's create something amazing together!
        </p>
        <MotionLeft delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mb-12 justify-center ">
            <a href="mailto:lappawatyahtung@gmail.com">
              <Card
                className="text-center w-full hover:scale-105 transition-transform duration-200"
                isPressable
              >
                <CardBody className=" p-6 justify-center items-center">
                  <EnvelopeSolid className="h-8 w-8 text-amber-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    lappawatyahtung@gmail.com
                  </p>
                </CardBody>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/in/lappawat-yahtung-589a39366/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="text-center w-full hover:scale-105 transition-transform duration-200"
                isPressable
              >
                <CardBody className="w-full p-6 justify-center items-center">
                  <svg
                    className="h-8 w-8 text-blue-500 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    linkedin.com/in/Lappawat
                  </p>
                </CardBody>
              </Card>
            </a>

            <a href="tel:+66808739431">
              <Card
                className="text-center w-full hover:scale-105 transition-transform duration-200"
                isPressable
              >
                <CardBody className="w-full p-6 justify-center items-center">
                  <PhoneIcon className="h-8 w-8 text-green-500 mx-auto mb-4" />

                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    +66 80-873-9431
                  </p>
                </CardBody>
              </Card>
            </a>

            <a
              href="https://github.com/Lappawatz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="text-center w-full hover:scale-105 transition-transform duration-200"
                isPressable
              >
                <CardBody className="w-full p-6 justify-center items-center ">
                  <svg
                    className="h-8 w-8 text-red-600 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    GitHub
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    github.com/Lappawatz
                  </p>
                </CardBody>
              </Card>
            </a>
          </div>
        </MotionLeft>

        <Button
          color="success"
          size="lg"
          startContent={<EnvelopeSolid className="w-5 h-5" />}
          className="text-white bg-emerald-600 hover:bg-emerald-300 hover:scale-105 transition-colors duration-300 font-semibold"
          onClick={() => setIsOpen(true)}
        >
          Send Message
        </Button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent>
            <ModalBody>
              <MessageModal onClose={() => setIsOpen(false)} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
}
export default Contact;
