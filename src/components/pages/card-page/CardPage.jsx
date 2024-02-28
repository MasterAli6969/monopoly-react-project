import { useState, useEffect } from "react";
import Breadcrumbs from "./Breadcrumbs";
import CardSlider from "./CardSlider";
import CardDescriptions from "./CardDescriptions";
import WhoForm from "./WhoForm";
import WhoDataForm from "./WhoDataForm";
import RepliesAccordion from "./RepliesAccordion";
import RecomendCard from "./RecomendCard";
import OtherDescriptions from "./OtherDescriptions";
import { renderCardPageData } from "../../../services/api/apiCatalog";
//import { dataCard } from "./data";
function CardPage() {
  const [card, setCard] = useState({});
  useEffect(() => {
    const getData = async () => {
      const cardData = await renderCardPageData();
      setCard(cardData);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container _cardPage">
          <div className="row justify-content-between">
            <Breadcrumbs />
            <CardSlider dataImg={card.data.image_url} />
            <CardDescriptions dataCard={card} />
            <WhoForm />
            <WhoDataForm />
            <RepliesAccordion />
            <RecomendCard />
            <OtherDescriptions />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPage;
