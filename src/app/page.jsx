import React from "react";
import LenisScroll from "./components/ui/LenisScroll";
import Home from "../components/Home"
import Header from "@/components/Header";


const Page = () => {
  return (
    <div class="absolute bg-cover bg-center  bg-[url('/bg.jpg')] min-h-screen overflow-hidden ">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm "></div>
   
        <Header />
        <LenisScroll>
          <Home />
        </LenisScroll>
    
    </div>



  );
};

export default Page;
