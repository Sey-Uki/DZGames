import './App.css'
import { AppRoutes } from './AppRoutes'
import { AboutGame } from './components/AboutGame/AboutGame'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Footer } from './components/Footer/Footer'
import { Game } from './components/Game/Game'
import { Header } from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />

      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
