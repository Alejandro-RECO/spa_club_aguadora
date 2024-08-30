// import { MEDIA_PATHS } from "../../Utils/Writers";
import { MEDIA_PATHS } from "../../../../Utils/Writers";
import { Tabs } from "../Tabs";
import { ContainerInfo } from "../ContainerInfo";
import { Img } from "../../../../components/Image";

export const Notiaguadora = () => {
   return (
      <section className="px-3 md:px-14 py-16 bg-secondary flex flex-col gap-5">
         <div className="uppercase md:flex items-center justify-between  font-semibold text-xl text-primary-800 border-y-2 py-2 mb-10 border-primary-800">
            <h2 className="font-bold font-serif uppercase text-xl md:text-6xl text-primary-900 ">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.TITLE}
            </h2>
            <div className="text-sm flex gap-x-3">
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.EDITION}</span>|
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DATE}</span>
            </div>
         </div>
         <div className="md:flex gap-x-5 justify-center">
            <Tabs />
            <ContainerInfo />
         </div>
         <article className="containe text-primary-900 py-2 shadow-lg flex flex-col xl:flex-row justify-center items-center md:mx-16 p-5 gap-5">
            <Img
               size={"l"}
               shape={"rounded"}
               src={MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.IMAGE_1}
               alt="Imagen"
            />
            <div className="flex flex-col items-end py-5 font-serif">
               <h3 className="font-bold uppercase text-primary-800 pb-3 text-2xl">
                  {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.SUBTITLE_3}
               </h3>
               <div className="text-primary-700">
                  <p>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.TEXT_1}</p>
                  <p>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.TEXT_2}</p>
                  <p>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.TEXT_3}</p>
                  <p>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.TEXT_4}</p>
               </div>
               <q className="font-semibold">{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.PRESIDENT}</q>
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.POST}</span>
            </div>
         </article>
      </section>
   );
};
