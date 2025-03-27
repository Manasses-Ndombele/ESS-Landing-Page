import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/base.sass";
import TopClock from "./components/TopClock";
import IntroArea from "./components/IntroArea";
import VideoCta from "./components/VideoCta";
import CheckList from "./components/CheckList";
import SolutionsArea from "./components/SolutionsArea";
import TestimoniesArea from "./components/TestimoniesArea";
import BonusArea from "./components/BonusArea";
import SpecialOfferArea from "./components/SpecialOfferArea";
import InstructorArea from "./components/InstructorArea";
import FAQ from "./components/FAQ";
import MainFooter from "./components/MainFooter";
import WhatsappBtn from "./components/WhatsappBtn";
import ArrowBottom from "./components/ArrowBottom";
import ModalPromotion from "./components/ModalPromotion";
import ModalCheckout from "./components/ModalCheckout";

function App() {
  return (
    <>
      <TopClock />
      <IntroArea />
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
      <ArrowBottom />
      <ModalPromotion />
      <ModalCheckout />
    </>
  );
}

export default App;
