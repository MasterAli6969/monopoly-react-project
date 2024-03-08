import { Outlet } from "react-router-dom";
import { ErrorHandler } from "../services/middleware/ErrorHandler";
import { Suspense } from "react";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import LoadingSpinner from "./common/LoadingSpinner";
import TooltipInitializer from "../assets/js/script";
export default function Layout() {
  return (
    <>
      <TooltipInitializer>
        <ErrorHandler>
          <NavBar />
          <Suspense
            fallback={
              <div>
                <LoadingSpinner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
          <Footer />
        </ErrorHandler>
      </TooltipInitializer>
    </>
  );
}
