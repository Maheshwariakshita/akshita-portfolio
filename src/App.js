import './App.scss';
import { Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Education from './components/Education'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          
          <Route path='education' element={<Education />} />
          <Route path='dashboard' element={<Dashboard />} />
    </Route>
    </Routes>
    </>
  );
}

export default App;
