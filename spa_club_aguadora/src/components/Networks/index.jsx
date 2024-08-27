import { MEDIA_PATHS } from "../../Utils/Writers";
import {
   RiFacebookCircleFill,
   RiInstagramFill,
   RiTwitterXFill,
} from "react-icons/ri";
export const Networks = () => {
   const networksStyles =
      "text-3xl text-gray-50 hover:text-primary-900 transition-all";

   return (
      <ul className="h-full p-3 flex items-center gap-x-2 ">
         <li>
            <a target="_blank" href={MEDIA_PATHS.HEADER.NETWORKS.FACEBOOK}>
               <RiFacebookCircleFill className={`${networksStyles}`} />
            </a>
         </li>
         <li>
            <a target="_blank" href={MEDIA_PATHS.HEADER.NETWORKS.INSTAGRAM}>
               <RiInstagramFill className={`${networksStyles}`} />
            </a>
         </li>
         <li>
            <a target="_blank" href={MEDIA_PATHS.HEADER.NETWORKS.TWITER}>
               <RiTwitterXFill className={`${networksStyles}`} />
            </a>
         </li>
      </ul>
   );
};
