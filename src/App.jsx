import Header from './components/common/Header'
import About from './pages/about/About'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>


      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  )

}

export default App;

