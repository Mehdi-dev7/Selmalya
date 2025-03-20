export default function Form() {
  return (
    <section className="bg-light min-h-[1000px]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pt-20">
        <h1 className="text-4xl text-center lg:text-left xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-10">
          Contactez-nous
        </h1>
        <p className="text-center lg:text-left text-lg md:text-xl leading-relaxed">
          Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet.
        </p>
      </div>
      <div className=" bg-mint/30 rounded-lg opacity-80 container mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-8 py-10">
        <form>
          <div>
            <div>
              <label htmlFor="name" >Nom</label>
              <input className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight mb-5 focus:outline-slate-400;" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </div>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  )
}