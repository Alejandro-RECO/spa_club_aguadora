import { useState } from "react";
import { MEDIA_PATHS } from "../../Utils/Writers";
import { Img } from "../Image";

export const Tabs = () => {
   const [activeTab, setActiveTab] = useState(0);

   const TABS = MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.CONTENT_1;

   return (
      <>
         <article className="w-[50%] text-primary-900 py-2 shadow-lg flex flex-col justify-center">
            <h3 className="text-3xl text-center font-bold font-serif uppercase">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.SUBTITLE_1}
            </h3>
            <p className="text-sm text-center text-primary-400">
               {MEDIA_PATHS.HOME.NOTIAGUADORA_ED_2.DESCRIPTION_1}
            </p>
            <div className="flex flex-col items-center py-5">
               {/* Tab Headers */}
               <div className="flex justify-center gap-x-5 w-[55%] p-2 rounded-md">
                  {TABS.map((tab, index) => (
                     <button
                        key={index}
                        className={`py-1 px-4 text-sm font-semibold transition-all duration-300 font-serif ${
                           activeTab === index
                              ? "border-b-2 text-primary-500 "
                              : "text-primary-800 hover:bg-secondary/70"
                        }`}
                        onClick={() => setActiveTab(index)}>
                        {tab.TITLE}
                     </button>
                  ))}
               </div>

               {/* Tab Content */}
               <div>
                  {TABS.map(
                     (tab, index) =>
                        activeTab === index && (
                           <div
                              key={index}
                              className="flex flex-col items-center">
                              <p className=" w-[80%] font-serif py-3 px-4 my-2">
                                 {tab.DESCRIPTION}
                              </p>
                              <div className="flex items-center justify-center gap-x-10">
                                 <Img
                                    src={tab.IMAGE_1}
                                    alt={tab.TITLE}
                                    size={"m"}
                                    shape={"rounded"}
                                 />
                                 <Img
                                    src={tab.IMAGE_2}
                                    alt={tab.TITLE}
                                    size={"m"}
                                    shape={"rounded"}
                                 />
                              </div>
                           </div>
                        )
                  )}
               </div>
            </div>
         </article>
      </>
   );
};
