import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import CardSlider from "./CardSlider";
import CardDescriptions from "./CardDescriptions";
import WhoForm from "./WhoForm";
import WhoDataForm from "./WhoDataForm";
import RepliesAccordion from "./RepliesAccordion";
import RecomendCard from "./RecomendCard";
import OtherDescriptions from "./OtherDescriptions";
import TooltipInitializer from "../../../assets/js/script";

function CardPage() {
  const [cardData, setCardData] = useState({});
  useEffect(() => {
    const reduxCardData = localStorage.getItem("cardData");
    const parsedData = reduxCardData ? JSON.parse(reduxCardData) : null;
    console.log(parsedData);
    if (parsedData && parsedData.data) {
      setCardData(parsedData.data);
    }
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container _cardPage">
          <div className="row justify-content-between">
            <>
              <TooltipInitializer />
              <Breadcrumbs />
              <CardSlider dataImg={cardData.image_url} />
              <CardDescriptions />
              <WhoForm />
              <WhoDataForm />
              <RepliesAccordion />
              <RecomendCard />
              <OtherDescriptions />
            </>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardPage;
