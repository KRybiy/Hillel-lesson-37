import Button from './components/Button.jsx'
import Input from './components/Input.jsx'


const App = () => {
  return (
    <div className="container">
      <h1 className="title">First React App</h1>
      <Button text="Submit button" type="submit"/>
      <Button text="Reset button" type="reset"/>
      <Button text="Cancel button" type="cancel"/>

      <Input text="Email" type="email" id="email-input"/>
      <Input text="Password" type="password" id="password-input"/>

    </div>
  )
}

export default App
