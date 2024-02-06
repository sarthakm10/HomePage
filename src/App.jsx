import './App.css'
import './index.css'; 
import Card from './Card'
import Food from './Food'
import Footer from './Footer'
import Header from './Header'
import Button from './Button/Button'
import Student from './Student'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'


function App() {

  return (
    <>
      {/* <Header/> */}
      <NavBar/>
      {/* <HomePage /> */}
      {/* <Footer/> */}
      {/*<Food/> */}
      {/* <Card /> */}
      {/* <Button/> */}
      {/* <Student name="Sarthak" age={23} isStudent={true}/>
      <Student name="Hello" age="23" isStudent={false}/> This will issue a warning for age being string in console */}
      
    </>
  )
}

export default App
