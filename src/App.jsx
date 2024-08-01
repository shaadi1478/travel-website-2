import { useEffect } from "react"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import AOS from "aos"
import Popular from "./Components/Popular/Popular"


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  return (
    <>
    <div className="max-w-7xl mx-auto">
    <Header />
      <Hero />
      <Popular />
      <Footer />
    </div>
    </>
  )
}

export default App
