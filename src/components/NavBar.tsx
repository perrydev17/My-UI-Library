import { Moon, Sun } from "lucide-react";
 import { useTheme } from "../providers/theme-provider";
import Button  from "./Button";

export default function NavBar() {
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <nav className="py-4 px-12 flex justify-between items-center">
      <h1>Navbar</h1>
      <Button shape={"circle"} size={"icon"}  onClick={handleThemeToggle} >
        {
          theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          :<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        }
      </Button>
    </nav>
  )
}