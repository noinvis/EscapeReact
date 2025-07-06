import './App.scss'
import Featured from './components/featured/Featured'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Recent from './components/recent/Recent'
import Type from './components/type/Type'

function App() {
  return (
    <>
      <Header/>
      <Type/>
      <Featured/>
      <Recent/>
      <Footer/>
    </>
  )
}

export default App
