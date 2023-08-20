import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import {Routes, Route, Link} from "react-router-dom"
import Welcome from './components/Welcome'
import UserPrompt from './components/UserPrompt'

function App() {

  return (
    <>
      <nav>
        <div>
          Logo
        </div>
        <ul>
          <Link to='/' className="navLink">Home</Link>
          <Link to='/login' className="navLink">login</Link>
          <Link to='/SignUp' className="navLink">Sign Up</Link>
        </ul>
        <div>
          <Link to='/'><div>Home</div></Link>
          <Link to='/login'><div>login</div></Link>
          <Link to='/SignUp'><div>Sign Up</div></Link>
          <Link to='/actionplan'><div>Get Started</div></Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/actionplan' element={<UserPrompt />} />
        </Routes>
      </main>
    </>
  )
}

export default App
