import { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"
import Button from "../components/Button"

function Profile() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`page ${theme}`}>
            <h1>Esta es la Profile</h1>
            <Button />
        </div>
    )
}

export default Profile