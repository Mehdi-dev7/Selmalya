export default function ContactForm() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 w-full mb-30">
        <input type="text" placeholder="Votre Nom ou Société" required className="h-12 rounded-lg bg-light px-2 w-full border border-transparent focus:outline-none focus:border-mint-dark duration-200" />
        <input type="email" placeholder="Votre Email" required className="h-12 rounded-lg bg-light px-2 w-full border border-transparent focus:outline-none focus:border-mint-dark duration-200" />
        <textarea type="text" placeholder="Votre Message" rows={9} cols={50} required className="rounded-lg bg-light p-2 w-full border border-transparent focus:outline-none focus:border-mint-dark duration-200 resize-none" />
        <button type="submit" className="w-full mt-8 rounded-lg border border-mint-dark hover:bg-mint-dark hover:text-light duration-300 bg-light h-12 font-bold text-xl cursor-pointer shadow-lg hover:shadow-xl transition-all ">Envoyer</button>
      </form>
    </div>
  )
}