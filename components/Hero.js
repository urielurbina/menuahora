import Image from "next/image";
import TestimonialRating from "@/components/TestimonialRating";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        
        <TestimonialRating/>
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Tu menú digital personalizado, sin complicaciones
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Diseñamos tu menú digital. Solo sube tus productos y nosotros nos encargamos de que esté listo en menos de una semana.
        </p>
        <button className="btn btn-primary btn-wide">
          Quiero mi menú
        </button>

        {/* <TestimonialsAvatars priority={true} /> */}
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
