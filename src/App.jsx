import { Navbar } from '@components/Navbar'
import {RoutesApp} from './routers'
import { Button } from '@components/Button'
import { Footer } from '@components/Footer'
import './global.css'

function App() {

  return (
    <div className="App">
        <Navbar />
        <Button />
        <RoutesApp />
        <Footer />
    </div>
  )
}

export default App
