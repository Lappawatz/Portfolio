import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { useLocation, useNavigate } from "react-router-dom";
import MotionChar from "./motion/MotionChar.jsx"; // Assuming you have a MotionChar component
export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <div className="font-bold text-2xl  dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">
            <MotionChar />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link
              href={item.path} // เช่น "#projects"
              className={`font-medium transition-all duration-300 hover:scale-105 scroll-smooth ${
                location.hash === item.path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={(e) => {
                e.preventDefault(); // ป้องกันการ jump
                const sectionId = item.path.replace("/", "").replace("#", "");
                const section = document.getElementById(sectionId);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false); // ปิดเมนูหลังคลิก
                }
              }}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            variant="flat"
            className="bg-blue-600 text-white hover:scale-105 transition-transform font-semibold"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      {isMenuOpen && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                color={
                  location.pathname === item.path ? "primary" : "foreground"
                }
                className="w-full"
                href={item.path}
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = item.path.replace("/", "").replace("#", "");
                  const section = document.getElementById(sectionId);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false); // ปิดเมนูหลังคลิก
                  }
                }}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
