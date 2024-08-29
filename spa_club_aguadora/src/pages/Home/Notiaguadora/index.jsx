// import { MEDIA_PATHS } from "../../Utils/Writers";
import { MEDIA_PATHS } from "../../../Utils/Writers";
import { Tabs } from "./Tabs";

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
         <Tabs />
      </section>
   );
};
