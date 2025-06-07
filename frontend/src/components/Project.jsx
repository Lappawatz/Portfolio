import { Card, CardHeader, CardBody, Chip, Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import port from "../assets/imgProjects/port.png";
import scg from "../assets/imgProjects/SCGG.jpg";
import kshop from "../assets/imgProjects/epict.jpg";
import moneyc from "../assets/imgProjects/moneyChange.jpg";
import moneyi from "../assets/imgProjects/moneyIncome.jpg";
import todo from "../assets/imgProjects/todo.jpg";

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Project() {
  const projects = [
    {
      title: "Develop Cement Plant SCG",
      description:
        "Developed a web-based system to track skill application and machine usage after training. Included evaluations, point rewards, and a dynamic UI",
      image: scg,
      tags: ["React", "PHP Laravel", "SQL server", "DaisyUI", "Tailwind CSS"],
      github: "https://github.com/Lappawatz/Cosmic-complier",
      demo: "#",
    },
    {
      title: "FOLK.DEV My Portfolio",
      description:
        "A personal portfolio showcasing my skills, projects, and experience.",
      image: port,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Lappawatz/Portfolio",
      demo: "#",
    },
    {
      title: "Money Converter",
      description:
        "A front-end Web application for managing currency exchange rates and transactions.",
      image: moneyc,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Lappawatz/MoneyExchange",
      demo: "#",
    },
    {
      title: "Manage Money",
      description:
        "Web application for calculate income and expenses and remaining amount.",
      image: moneyi,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Lappawatz/ManageMoney",
      demo: "#",
    },
    {
      title: "Todo List",
      description:
        "Help you organize your work systematically and not forget what needs to be done.",
      image: todo,
      tags: ["HTML", "CSS", "React", "Javascript"],
      github: "https://github.com/Lappawatz/ToDoList",
      demo: "#",
    },
    {
      title: "K-SHOP e-commerce",
      description:
        "K-shop is a simple e-commerce project built with Node.js and Express. Includes product listings, user login, cart, and order management.",
      image: kshop,
      tags: ["EJS", "Node.js", "Express.js", "MongoDB", "CSS"],
      github: "https://github.com/Lappawatz/K-SHOP",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Some of my recent work that I'm proud of
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className="max-w-full hover:scale-105 transition-transform duration-200 bg-slate-100 dark:bg-slate-700 shadow-lg"
                isPressable
              >
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    width="300"
                    height="200"
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        variant="solid"
                        size="sm"
                        className="bg-emerald-600 dark:bg-emerald-600 text-white dark:text-slate-200"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <div className="flex gap-2 justify-end w-full">
                    <Button
                      variant="bordered"
                      size="md"
                      startContent={
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      }
                      as={Link}
                      href={project.github}
                    >
                      Code
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
