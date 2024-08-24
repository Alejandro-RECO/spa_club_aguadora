import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const LinkComponet = ({ to, text }) => {
   return (
      <li className="group relative uppercase text-sm font-semibold text-primary-200/85 hover:text-white transition-colors">
         <NavLink
            className={({ isActive }) =>
               ` ${
                  isActive ? "text-white" : ""
               }`
            }
            to={to}>
            {text}
         </NavLink>
         <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary-200 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      </li>
   );
};
