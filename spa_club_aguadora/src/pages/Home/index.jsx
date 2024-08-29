import { Carousel } from "../../components/Carousel";
import { Information } from "../../components/Information";  
import { Notiaguadora } from "./Notiaguadora";


export const Home = () => {
   return (
    <section>
      <Carousel />
      <Notiaguadora/>
      <Information/>
    </section>
   );
};
