import { MEDIA_PATHS } from "../../../../Utils/Writers";

export const ContainerInfo = () => {
   return (
      <article className="flex flex-col md:w-[40%] shadow-xl rounded">
         <div className="relative h-36">
            <img
               src={MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.IMAGE_1}
               alt="Ejemplo"
               className="w-full h-full object-cover opacity-90 rounded-t shadow"
            />
            <h2 className="absolute top-0 text-xl md:text-3xl pt-8 rounded-t text-center text-secondary h-full w-full px-14 bg-black bg-opacity-50 font-serif font-bold uppercase">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.SUBTITLE_2}
            </h2>
         </div>
         <div className="">
            <p className="text-gray-700 md:text-justify font-serif p-7">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DESCRIPTION_2}
            </p>
         </div>
      </article>
   );
};
