import { Link } from "react-router-dom";
import { MEDIA_PATHS } from "../../Utils/Writers";
import { Img } from "../Image";
import { Nav } from "../Nav";
import { Networks } from "../Networks";

export const Header = () => {
   return (
      <header className="block h-24 items-center justify-between overflow-hidden">
         {/* Ola como fondo */}
         <div className="absolute inset-0">
            <svg
               className="w-full h-[17rem]"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1440 320"
               preserveAspectRatio="none">
               <path
                  fill="#67acb3"
                  d="M0,128L80,122.7C160,117,320,107,480,122.7C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
               />
            </svg>
         </div>
         <div className="relative z-10 px-12 py-5 text-white flex items-center justify-between">
            <Link to={MEDIA_PATHS.NAV_LINKS.HOME}>
               <Img
                  src={MEDIA_PATHS.HEADER.IMAGEN}
                  alt="Logo"
                  size="sizeHeader"
                  shape="rounded"
               />
            </Link>
            <Nav />
            <Networks />
         </div>
      </header>
   );
};
