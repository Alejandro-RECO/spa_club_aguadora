import { MEDIA_PATHS } from "../../Utils/Writers";
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
         <article className="text-center text-primary-900 py-3">
            <h3 className="text-3xl font-bold font-serif pt-3 uppercase">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.SUBTITLE_1}
            </h3>
            <p className="text-sm text-primary-400">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DESCRIPTION_1}
            </p>
         </article>
         <Tabs />
      </section>
   );
};
