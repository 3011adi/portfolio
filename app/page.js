import Image from "next/image";
import adi from "@/assets/adi.png";;
import Anim from "@/components/anim";
import Projects from "@/components/projects";
import Home from "@/components/home";
import Know from "@/components/know";
import About from "@/components/about";
export default function Layout() {
  
  return (
    <div className="bg-gray-200">
      <section className=" my-[15%]">
      <Home />
      </section>
      <section  className="h-[500px]  mt-32 mb-16 bg-gray-200 ">
       <Anim />
      </section>
      <Know />
      <section className="pt-12 ">
      < Projects />
      </section>
        < About/>
      
      </div>
  );
}
