import { auth } from "./firebase/config";
import './styles/Home.css'

const Home = ({user}) => {
    return (
        <div className="Home">
            <div className="results">
                <h1>Salom {user.displayName} 👋 </h1>
                <h3>Email: {user.email}</h3>
                <img src={user.photoURL} alt="userImage" />
            </div>
            <button className="signout" onClick={() => auth.signOut()}>
                Sign Out
            </button>
        </div>
    );
}

export default Home;