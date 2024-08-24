import { MEDIA_PATHS } from "../../Utils/Writers";
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill   } from "react-icons/ri";
export const Networks = () => {
   return (
      <ul className="h-full p-3 flex items-center gap-x-2 ">
         <li>
            <a target="_blank" href={MEDIA_PATHS.HEADER.NETWORKS.FACEBOOK}>
              <RiFacebookCircleFill className="text-3xl text-gray-50" />
            </a>
         </li>
         <li>
            <a target="_blank" href={MEDIA_PATHS.HEADER.NETWORKS.INSTAGRAM}>
              <RiInstagramFill className="text-3xl text-gray-50" />
            </a>
         </li>
         <li>
            <a target="_blank" href={MEDIA_PATHS.HEADER.NETWORKS.TWITER}>
              <RiTwitterXFill className="text-3xl text-gray-50" />
            </a>
         </li>
         
      </ul>
   );
};
