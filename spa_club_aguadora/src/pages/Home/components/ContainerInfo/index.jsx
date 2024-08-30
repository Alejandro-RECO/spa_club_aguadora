import { Img } from "../../../../components/Image";
import { MEDIA_PATHS } from "../../../../Utils/Writers";

export const ContainerInfo = () => {
   return (
      <article className="w-[50%] text-primary-900 p-8 shadow-xl ">
         <h2 className="text-3xl text-center font-serif pb-5 font-bold">
            {" "}
            {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.SUBTITLE_2}
         </h2>
         <Img
            src={MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.IMAGE_1}
            alt="Example"
            size={"l"}
            shape={"rounded"}
            className="float-left mr-4 mb- h-auto"
         />
         <p className="text-gray-700 text-justify">
            {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DESCRIPTION_2}
         </p>
      </article>
   );
};
