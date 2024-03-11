import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const cartDataRedus = useSelector((state) => state.cardRenderDataReduce);
  useEffect(() => {
    if (cartDataRedus && cartDataRedus) {
      setCardData(cartDataRedus.data);
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
              {/* Собрать данные карты в  объект */}
              <CardSlider dataImg={cardData.image_url} />
              {/* Собрать данные имени и почтssы в объект */}
              <CardDescriptions dataCard={cardData} />
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
