import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layouts";
import { MEDIA_PATHS } from "./Utils/Writers";
import { Restaurant } from "./pages/Restaurant";
import { AboutUs } from "./pages/AboutUs";

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path={MEDIA_PATHS.NAV_LINKS.HOME} element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path={MEDIA_PATHS.NAV_LINKS.RESTAURANT} element={<Restaurant/>} />
                  <Route path={MEDIA_PATHS.NAV_LINKS.ABOUT_US} element={<AboutUs/>} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
