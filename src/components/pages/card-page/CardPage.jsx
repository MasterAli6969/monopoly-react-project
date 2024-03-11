import { useEffect, useState, useMemo } from "react";
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
  const memoizedCartData = useMemo(() => cartDataRedus, [cartDataRedus]);
  console.log("Данные пришли все норм", cartDataRedus);
  useEffect(() => {
    // const reduxCardData = localStorage.getItem("cardData");
    // const parsedData = reduxCardData ? JSON.parse(reduxCardData) : null;
    if (memoizedCartData && memoizedCartData.data) {
      setCardData(memoizedCartData.data);
    }
  }, [memoizedCartData]);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container _cardPage">
          <div className="row justify-content-between">
            <>
              <TooltipInitializer />
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
