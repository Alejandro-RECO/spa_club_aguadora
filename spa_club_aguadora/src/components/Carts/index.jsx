/* eslint-disable react/prop-types */
import { iconsMap } from "../../Utils/IconsMap";
export const Cart = ({
    icon: iconName,
    title,
    description,
}) => {

   const Icon = iconsMap[iconName];
   console.log(Icon);
   return (
      <div className="w-[340px] h-[290px] flex-shrink-0 gap-y-5 bg-slate-100 p-6 rounded-sm">
         {Icon ? <Icon className="text-4xl text-primary-500" /> : null }
         <h2 className="text-xl uppercase font-semibold py-4 text-gray-700">
            {title}
         </h2>
         <p className="text-gray-700 text-wrap text-sm" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
   );
};
