import React, {useState, useEffect} from "react";
import firebase from "./firebase/config";
import Home from "./Home";
import Login from "./Login";
import './styles/App.css'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
      console.log(user)
    })
  }, [])

  return (
    <div className="App">
      {user ? <Home user={user} /> : <Login />}
    </div>
  );
}

export default App;
