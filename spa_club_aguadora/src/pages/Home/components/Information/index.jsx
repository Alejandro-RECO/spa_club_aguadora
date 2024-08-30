import { MEDIA_PATHS } from "../../../../Utils/Writers";
import { Cart } from "../../../../components/Carts"

export const Information = () => {
   const CONTENT_CARTS = MEDIA_PATHS.HOME.INFORMATION;
   const CONTENT_CARRUCEL = [...CONTENT_CARTS, ...CONTENT_CARTS];
   return (
      <section className="my-5 w-full">
         <div className="overflow-hidden w-full">
            <div className="flex gap-x-4 whitespace-nowrap animate-scroll">
               {CONTENT_CARRUCEL.map((cart, index) => (
                  <Cart
                     key={index}
                     icon={cart.ICON}
                     title={cart.TITLE}
                     description={cart.DESCRIPTION}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};
