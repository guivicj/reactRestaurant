import {useNavigate} from "react-router-dom";

export default function YellowButton({value, destination}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(destination)
    }

    return (
        <button className="yellow-btn" onClick={handleClick}>{value}</button>
    )
}