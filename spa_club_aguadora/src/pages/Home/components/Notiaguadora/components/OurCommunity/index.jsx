import { Img } from "../../../../../../components/Image"
import { MEDIA_PATHS } from "../../../../../../Utils/Writers"


export const OurCommunity = () => {
  return (
    <article className="text-primary-900 py-2 shadow-lg flex flex-col lg:flex-row justify-center items-center p-5 gap-5">
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
               <q className="font-semibold pt-2">{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.PRESIDENT}</q>
               <span>{MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_2.POST}</span>
            </div>
         </article>
  )
}
