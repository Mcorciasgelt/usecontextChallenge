import { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"
import Button from "../components/Button"

function Home() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`page ${theme}`}>
            <h1>Esta es la Home</h1>
            <Button />
        </div>
    )
}

export default Home