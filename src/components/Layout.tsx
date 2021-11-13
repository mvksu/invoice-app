import { FC } from "react";
import Navbar from "./Navbar";
const Layout: FC = ({children}) => {
    return (
      <div className="bg-dark-400 h-screen flex flex-col md:flex-row">
        <Navbar />
        <main className="md:w-full flex justify-center mt-10">
          {children}
        </main>
      </div>
    );
}

export default Layout;