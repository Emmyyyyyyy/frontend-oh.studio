import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Navbar from '../src/component/navbar'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}
