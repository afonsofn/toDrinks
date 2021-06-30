import { useEffect } from 'react'
import M from  'materialize-css'

import { DrinksContextProvider } from './context/drinksContext'

import Header from './components/Header'
import Highlights from './components/Highlights'
import Search from './components/Search'
import ModalDetails from './components/ModalDetails'

import { getAllDrinks } from './services/api'

import './styles/style.scss'

function App() {

  window.addEventListener('scroll', function() {
    Object.values(document.querySelectorAll('.slideanim')).map(test => test.classList.add('slide'))
  });

  useEffect(() => {
    getAllDrinks()
    M.Parallax.init(document.querySelectorAll('.parallax'))
    M.Tabs.init(document.querySelectorAll('.tabs'))
    M.Modal.init(document.querySelectorAll('.modal'))
  }, [])

  return (
    <div className="App">
      <DrinksContextProvider>
        <Header />
        <Highlights />
        <Search />
        <ModalDetails />
      </DrinksContextProvider>
    </div>
  );
}

export default App;
