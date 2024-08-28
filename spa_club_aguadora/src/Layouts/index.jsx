import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
   return (
      <>
         <main className="flex flex-col bg-gray-300 h-full">
            <Header />
            <Outlet />
         </main>
      </>
   );
};
