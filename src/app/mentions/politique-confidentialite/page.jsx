export default function PolitiqueConfidentialite() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Collecte des données</h2>
        <p>
          Nous collectons des informations personnelles via nos formulaires de contact et lors de nos échanges 
          avec les clients. Les données sont utilisées uniquement dans le cadre de la gestion administrative et 
          commerciale de nos services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. Utilisation des données</h2>
        <p>Les informations collectées sont destinées à :</p>
        <ul className="list-disc pl-6">
          <li>La gestion des demandes clients</li>
          <li>L'envoi d'informations sur nos services</li>
          <li>L'amélioration de notre site et de nos services</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. Confidentialité et sécurité</h2>
        <p>
          Nous mettons en place des mesures de sécurité pour protéger les données personnelles. Aucune information 
          n'est cédée à des tiers sans autorisation explicite.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Droits des utilisateurs</h2>
        <p>
          Conformément au RGPD, vous pouvez demander l'accès, la modification ou la suppression de vos données en 
          nous contactant à <a href="mailto:contact@selmalya.tierspayant.com" className="text-blue-500 underline">
          contact@selmalya.tierspayant.com</a>.
        </p>
      </section>
    </main>
  );
}
