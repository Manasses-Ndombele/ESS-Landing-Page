import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainHeader from './components/MainHeader'
import VideoCta from './components/VideoCta'
import CheckList from './components/CheckList'
import SolutionsArea from './components/SolutionsArea'
import TestimoniesArea from './components/TestimoniesArea'
import BonusArea from './components/BonusArea'
import SpecialOfferArea from './components/SpecialOfferArea'
import InstructorArea from './components/InstructorArea'
import FAQ from './components/FAQ'
import MainFooter from './components/MainFooter'
import WhatsappBtn from './components/WhatsappBtn'

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <VideoCta />
        <CheckList />
        <SolutionsArea />
        <TestimoniesArea />
        <BonusArea />
        <SpecialOfferArea />
        <InstructorArea />
        <FAQ />
      </main>
      <MainFooter />
      <WhatsappBtn />
    </>
  )
}

export default App
