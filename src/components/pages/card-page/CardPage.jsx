import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import CardSlider from "./CardSlider";
import CardDescriptions from "./CardDescriptions";
import QuestionButton from "./QuestionButton";
import WhoForm from "./WhoForm";
import WhoDataForm from "./WhoDataForm";
import RepliesAccordion from "./RepliesAccordion";
import RecomendCard from "./RecomendCard";
import OtherDescriptions from "./OtherDescriptions";
function CardPage() {
  return (
    <>
      <div class="container-fluid p-0">
        <div class="container _cardPage">
          <div class="row justify-content-between">
            <Breadcrumbs />
            <CardSlider />
            <CardDescriptions />
            <QuestionButton />
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
