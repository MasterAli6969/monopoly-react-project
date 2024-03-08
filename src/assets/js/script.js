// TooltipInitializer.js
import { useEffect } from "react";

export default function TooltipInitializer() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      // eslint-disable-next-line no-undef
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    console.log(tooltipList);
    };
  }, []);
  return null;
}
