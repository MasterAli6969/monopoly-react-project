import { useEffect } from "react";

export default function TooltipInitializer() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      /* global bootstrap */
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);
  return null;
}
