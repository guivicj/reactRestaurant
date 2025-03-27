import {useAuth} from "../contexts/AuthContext";
import Spacer from "../components/Spacer";
import {useState} from "react";

function Login() {

    return (
        <div className="log-in-container">
            <div className="image-side">
                <img src={""} alt={""}/>
            </div>
            <div className="form-side">
                <h1 className="main-title">SIGN IN</h1>
                <Spacer size={64}/>
                <LoginForm/>
            </div>
        </div>
    )
}

function LoginForm() {
    const {login} = useAuth()
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const handleLogin = () => {
        if (!email || !name || !lastName || !tel) {
            alert("Please, Fill all the blanks")
            return
        }
        login({ email, name, lastName, tel });
    };

    return (
        <div className="log-in-form">
            <input type="text" placeholder="First Name" className="field" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="Last Name" className="field" value={lastName} onChange={e => setLastName(e.target.value)}/>
            <input type="email" placeholder="Email" className="field" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="tel" placeholder="Mobile Phone" className="field" value={tel} onChange={e => setTel(e.target.value)}/>
            <button className="yellow-btn" onClick={handleLogin}>SIGN IN ———</button>
        </div>
    )
}

export default Login;