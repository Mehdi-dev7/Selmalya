import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

export default function Contact() {
  return (
    <section className="bg-light min-h-[1100px]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pt-20">
        <h1 className="text-4xl text-center lg:text-left xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-10">
          Contactez-nous
        </h1>
        <div className="flex flex-col lg:flex-row bg-mint/70 rounded-lg p-8 gap-8 lg:gap-24 justify-between shadow-xl ">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
     
    </section>
  )
}