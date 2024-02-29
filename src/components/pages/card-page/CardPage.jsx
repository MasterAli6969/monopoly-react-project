import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Breadcrumbs from "./Breadcrumbs";
import CardSlider from "./CardSlider";
import CardDescriptions from "./CardDescriptions";
import WhoForm from "./WhoForm";
import WhoDataForm from "./WhoDataForm";
import RepliesAccordion from "./RepliesAccordion";
import RecomendCard from "./RecomendCard";
import OtherDescriptions from "./OtherDescriptions";

function CardPage() {
  const reduxCardData = useSelector((state) => state.cardRenderDataReduce);
  const [localCardData, setLocalCardData] = useState(reduxCardData);

  useEffect(() => {
    setLocalCardData(reduxCardData);
  }, [reduxCardData]);

  console.log("ВАМ ТУТ ПРИШЛА КАКАЯ ТО ХacsascЕРНЯ", localCardData);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container _cardPage">
          <div className="row justify-content-between">
            <>
              <Breadcrumbs />
              <CardSlider />
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
