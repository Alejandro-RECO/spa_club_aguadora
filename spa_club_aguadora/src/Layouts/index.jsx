import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
   return (
      <>
         <main className="flex flex-col gap-y-24 bg-gray-300">
            <Header />
            <Outlet />
         </main>
      </>
   );
};
