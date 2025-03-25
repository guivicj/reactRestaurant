import {useNavigate} from "react-router-dom";

export default function BlackButton({value, destination}) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(destination)
    }
    return (
        <button className="black-btn" type="button" onClick={handleClick}>{value}</button>
    )
}