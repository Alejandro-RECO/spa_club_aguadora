// import { MEDIA_PATHS } from "../../Utils/Writers";





import { Cart } from "../../../../components/Cart";
import { MEDIA_PATHS } from "../../../../Utils/Writers";
import { ContainerInfo } from "./components/ContainerInfo";
import { OurCommunity } from "./components/OurCommunity";
import { Tabs } from "./components/Tabs";

export const Notiaguadora = () => {
   const CARTS_ELEMENTS = MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_3

   return (
      <section className="px-3 py-16 bg-secondary flex flex-col gap-5 lg:px-16">
         <div className="uppercase lg:flex items-center justify-between  font-semibold text-xl text-primary-800 border-y-2 py-2 mb-10 border-primary-800">
            <h2 className="font-bold font-serif uppercase text-xl lg:text-6xl text-primary-900 ">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.TITLE}
            </h2>
            <div className="text-sm flex gap-x-3">
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.EDITION}</span>|
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DATE}</span>
            </div>
         </div>
         <div className="lg:flex gap-x-5 justify-center">
            <Tabs />
            <ContainerInfo />
         </div>
         <OurCommunity/>
         <article className="py-5 shadow-lg flex flex-col justify-center items-center gap-5">
            <h3 className="uppercase font-serif text-2xl font-semibold text-primary-800 text-wrap px-10 py-5 text-center">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.SUBTITLE_4}
            </h3>
            <div className="flex flex-wrap gap-5 justify-evenly w-full items-center">
               {
                  CARTS_ELEMENTS.map((cart, index) => (
                     <Cart
                        key={index}
                        src={cart.IMAGE}
                        description={cart.TEXT}
                     />
                  ))
               }
            </div>
         </article>
      </section>
   );
};
