//Give access to App CSS and Nav and LoginForm javascript files
import './App.css'
import Nav from './Nav'
import LoginForm from './LoginForm'

//in the App function we combine the nav and loginform components
function App() {
  return <div className="App">
    <Nav/>
    <LoginForm/>
  </div>
}

//makes component available to be imported elsewhere
export default App;
