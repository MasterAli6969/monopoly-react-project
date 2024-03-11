import { useEffect, useState, useRef } from "react";
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
  // eslint-disable-next-line no-unused-vars
  const [parentData, setParentData] = useState(null);
  const formRef = useRef(null);
  const cartDataRedus = useSelector((state) => state.cardRenderDataReduce);
  useEffect(() => {
    if (cartDataRedus && cartDataRedus) {
      setCardData(cartDataRedus.data);
    }
  }, []);

  const handleChildData = (childData) => {
    setParentData(childData);
  };

  const handleSubmit = () => {
    formRef.current.submit();
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container _cardPage">
          <div className="row justify-content-between">
            <>
              <TooltipInitializer />
              <Breadcrumbs />
              <form ref={formRef}>
                {/* Собрать данные карты в  объект */}
                <CardSlider dataImg={cardData.image_url} />
                {/* Собрать данные имени и почтssы в объект */}
                <CardDescriptions
                  onData={handleChildData}
                  dataCard={cardData}
                />
                <WhoForm />
                <WhoDataForm
                  dataLog={parentData}
                  handleSubmitProps={handleSubmit}
                />
              </form>
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
