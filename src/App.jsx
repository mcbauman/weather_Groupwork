import "./App.scss"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import logo from "./image/logo.png"

function App(props) {

  const [ login, setLogin ] = useState(null)

  const inputCode = useRef()


  function Login (e) {
    e.preventDefault()
    setLogin(inputCode.current.value)
  }

return (

<div className="App" >

{login==='15032022' ? 

  <div className="App-wrapper">
      <Navigation />
      <Main />
  </div>

    : 

  <div>
      <img className="front-page-logo" src={logo} alt="" />
      <h1 className="front-page-title">Welcome to the page, Password=15032022</h1>
      <form action="" onSubmit={Login}>
          <input type="password" placeholder="login code..." ref={inputCode} />
          <button className="loginButton" >login</button>
     </form>
  </div> }

</div> )
}

export default App;
