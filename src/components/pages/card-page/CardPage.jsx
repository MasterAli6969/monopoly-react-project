import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import CardSlider from "./CardSlider";
import CardDescriptions from "./CardDescriptions";
import WhoForm from "./WhoForm";
import WhoDataForm from "./WhoDataForm";
import RepliesAccordion from "./RepliesAccordion";
import RecomendCard from "./RecomendCard";
import OtherDescriptions from "./OtherDescriptions";

function CardPage() {
  const [cardData, setCardData] = useState({});
  useEffect(() => {
    const reduxCardData = localStorage.getItem("cardData");
    const parsedData = reduxCardData ? JSON.parse(reduxCardData) : null;
    if (parsedData && parsedData.data) {
      setCardData(parsedData.data);
      console.log("Данные состояние данных карты", cardData);
    }
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container _cardPage">
          <div className="row justify-content-between">
            <>
              <Breadcrumbs />
              <CardSlider dataImg={cardData.image_url} />
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
