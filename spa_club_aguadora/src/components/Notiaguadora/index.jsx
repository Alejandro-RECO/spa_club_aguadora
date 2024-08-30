// import { MEDIA_PATHS } from "../../Utils/Writers";
import { MEDIA_PATHS } from "../../Utils/Writers";
import { Img } from "../Image";
import { Tabs } from "../Tabs";

export const Notiaguadora = () => {
   return (
      <section className=" px-14 py-16 bg-secondary">
         <div className="flex uppercase items-center justify-between  font-semibold text-xl text-primary-800 border-y-2 py-2 mb-10 border-primary-800">
            <h2 className="font-bold font-serif uppercase text-7xl text-primary-900 ">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.TITLE}
            </h2>
            <div className="text-sm flex gap-x-3">
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.EDITION}</span>|
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DATE}</span>
            </div>
         </div>
         <div className="flex gap-x-5 justify-center">
            <Tabs />
            <article className="w-[50%] text-primary-900 p-8 shadow-xl ">
               <h2 className="text-3xl text-center font-serif pb-5 font-bold"> {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.SUBTITLE_2}</h2>
               <Img
                  src={MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.IMAGE_1}
                  alt="Example"
                  size={"l"}
                  shape={"rounded"}
                  className="float-left mr-4 mb-4 w-48 h-auto"
               />
               <p className="text-gray-700 text-justify">
                  {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DESCRIPTION_2}
               </p>
            </article>
         </div>
      </section>
   );
};
