import { useEffect } from 'react'
import M from  'materialize-css'

import Header from './components/Header'
import Highlights from './components/Highlights'
import Search from './components/Search'
import ModalDetails from './components/ModalDetails'

import './styles/style.scss'

function App() {

  window.addEventListener('scroll', function() {
    Object.values(document.querySelectorAll('.slideanim')).map(test => test.classList.add('slide'))
  });

  useEffect(() => {
    M.Parallax.init(document.querySelectorAll('.parallax'))
    M.Tabs.init(document.querySelectorAll('.tabs'))
    M.Modal.init(document.querySelectorAll('.modal'))
  }, [])

  return (
    <div className="App">

      <Header />
      <Highlights />
      <Search />
      <ModalDetails />
      
    </div>
  );
}

export default App;
