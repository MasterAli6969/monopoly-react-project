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

function CardPage() {
  const [card, setCard] = useState({});

  useEffect(() => {
    const getData = async () => {
      const cardData = await renderCardPageData();
      setCard(cardData);
      console.log("ТУТ ДОЛЖНЫ БЫТЬ ДАННЫЕ О КАРТЕ", cardData);
    };
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container _cardPage">
          <div className="row justify-content-between">
            {Object.keys(card).length !== 0 ? (
              <>
                <Breadcrumbs />
                <CardSlider dataImg={card.data && card.data.image_url} />
                <CardDescriptions dataCard={card.data && card.data} />
                <WhoForm />
                <WhoDataForm />
                <RepliesAccordion />
                <RecomendCard />
                <OtherDescriptions />
              </>
            ) : (
              <h1>402</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPage;
