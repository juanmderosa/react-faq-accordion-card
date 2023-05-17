import './App.css'
import { FAQ } from './FAQ'

function App() {
  return(
    <main>
    
      <section className='img-section'>
        <img className='box-desktop'  src='./images/illustration-box-desktop.svg' alt='illustration box'/>
        <img className='illustration-mobile' src='./images/illustration-woman-online-mobile.svg' alt='illustration woomen'/>
        <img className='background-mobile' src='./images/bg-pattern-mobile.svg' alt='background-mobile'/>
      </section>
      <section className='FAQ-section'>
        <h1 className='title'>FAQ</h1>
        <FAQ/>
      </section>
    </main>
  )
}

export default App
