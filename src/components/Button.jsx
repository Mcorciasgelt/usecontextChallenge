import { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"

function Button() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme} className={`btn ${theme}`}>
            Cambiar Tema a {theme === "light" ? "Dark" : "Light"}
        </button>
    )
}

export default Button