import { Link } from "react-router-dom";
import { MEDIA_PATHS } from "../../Utils/Writers";
import { Img } from "../Image";
import { Nav } from "../Nav";
import { Networks } from "../Networks";

export const Header = () => {
   return (
      <header className="py-4 px-6 bg-gradient-to-bl from-primary-400 to-primary-500">
         {/* Ola como fondo */}
         <div className="flex justify-between">
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
