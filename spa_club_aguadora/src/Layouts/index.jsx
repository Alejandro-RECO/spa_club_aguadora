import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
   return (
      <>
         <main className="grid grid-cols-1 grid-rows-2 gap-2 h-screen bg-secondary">
            <Header />
            <Outlet />
         </main>
      </>
   );
};
