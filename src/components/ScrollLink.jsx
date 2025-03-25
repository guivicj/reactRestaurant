import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollLink({ targetId, children, confirmOnExit = false, className = "" }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        const goToTarget = () => {
            if (location.pathname === "/") {
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                sessionStorage.setItem("scrollTarget", targetId);
                navigate("/");
            }
        };

        if (confirmOnExit && location.pathname === "/reserve") {
            const confirmed = window.confirm("Do you really want to exit? Unsaved changes will be lost.");
            if (!confirmed) return;
        }

        goToTarget();
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
}