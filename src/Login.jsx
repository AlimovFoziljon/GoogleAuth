import { signInWithGoogle } from "./firebase/config";
import './styles/Login.css'
import GoogleIcon from './assets/Google__G__Logo.svg.png'

const Login = () => {
    return (
        <div className="Login">
            <h1>Google Auth 👾</h1>
            <button className="google__auth" onClick={signInWithGoogle}>
                <img width={'20px'} src={GoogleIcon} alt="google" />
                Sign in with Google
            </button>
        </div>
    );
}

export default Login;