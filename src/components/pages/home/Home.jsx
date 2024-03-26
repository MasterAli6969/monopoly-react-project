import Head from "./Head";
import Slider from "./Slider";
import ModalTabs from "./ModalTabs";
import RecomendCard from "./RecomendCard";
import InstructionCardUse from "./InstructionCardUse";
import Banner from "./Banner";
import CardFeatures from "./CardFeatures";
import OurClients from "./OurClients";
import FeedbackSlider from "./FeedbackSlider";
import "../../../assets/css/index.css";
import IconLinksList from "./IconLinksList";
import Test from "../card-page/Test";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Head />
        <Slider />
        <ModalTabs />
        <RecomendCard />
        <IconLinksList />
        <InstructionCardUse />
        <Banner />
        <CardFeatures />
        <OurClients />
        <FeedbackSlider />
        <Test />
      </div>
    </div>
  );
}
export default Home;
