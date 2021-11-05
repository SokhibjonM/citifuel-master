import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Map from './components/map/Map'
// import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'
import ContactForm from './components/contact/ContactForm'
import WhyUs from './components/whyus/WhyUs'
import Navigation from './components/navigation/Navigation'
import { useState } from 'react'
import Partners from './components/partners/partners'

function App() {
  const [sectionValue, setSectionValue] = useState('01')
  return (
    <div className="containerFluid">
      <Header />
      <Banner setSectionValue={setSectionValue} />
      <About setSectionValue={setSectionValue} />
      <Map setSectionValue={setSectionValue} />
      <WhyUs setSectionValue={setSectionValue} />
      <Partners />
      <ContactForm setSectionValue={setSectionValue} />
      <Footer />
      <div className="container">
        <Navigation sectionValue={sectionValue} />
      </div>
      
    </div>
  )
}

export default App
