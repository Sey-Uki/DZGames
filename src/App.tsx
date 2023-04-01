import './App.css'
import { AboutGame } from './components/AboutGame/AboutGame'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Footer } from './components/Footer/Footer'
import { Game } from './components/Game/Game'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Main />   */}
      {/* <AboutUs /> */}
      {/* <AboutGame /> */}
      <Game />
      {/* <Footer /> */}
    </div>
  )
}

export default App
