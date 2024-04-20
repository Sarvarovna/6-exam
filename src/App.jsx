import { useState } from 'react'
import './App.css'
import Authentification from "./Authentification.jsx"
import UnAuthentification from "./UnAuthentification.jsx"

function App() {
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    const [signUpData, setSignUpData] = useState(JSON.parse(window.localStorage.getItem("new")) || false)

    if (signUpData) {
        if (token.login == signUpData.newLogin && token.password == signUpData.newPassword) {
            return <Authentification />
        }
        else {
            return <UnAuthentification setSignUpData={setSignUpData} setToken={setToken} />
        }
    }
    else {
        if (token.login == "Arjumandbonu" && token.password == "1234") {
            return <Authentification />
        }
        else {
            return <UnAuthentification setSignUpData={setSignUpData} setToken={setToken} />
        }
    }
}

export default App
