import { Information } from "./components/Information/index"
import { Carousel } from "./components/Carousel";
import { Notiaguadora } from "./components/Notiaguadora/index"

export const Home = () => {
   return (
      <section>
         <Carousel />
         <Notiaguadora />
         <Information />
      </section>
   );
};
