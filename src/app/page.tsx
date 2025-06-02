export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">TC EXPERTISE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-900 hover:text-blue-600">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600">À propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-600 text-white inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
              🚨 NOUVEAU À LA RÉUNION • EXPERTISE MÉTROPOLE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">STOPPEZ</span> les Erreurs Comptables<br/>
              qui <span className="text-red-600">COÛTENT CHER</span> à votre Entreprise
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto font-semibold">
              <strong>Thierry CHAN KIM PONNE</strong>, Expert-Comptable formé en métropole, 
              vous évite les redressements fiscaux et optimise votre fiscalité réunionnaise
            </p>
            <div className="bg-yellow-100 border-2 border-yellow-400 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-bold text-gray-800">
                ⚡ CONSULTATION GRATUITE de 30 minutes<br/>
                💰 Potentiel d&apos;économies : 5 000€ à 50 000€/an<br/>
                🎯 Analyse personnalisée de votre situation
              </p>
            </div>
            
            {/* Valeurs principales */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Réactivité</h3>
                <p className="text-gray-600">Réponses rapides et solutions efficaces pour vos besoins urgents</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl font-bold">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proximité</h3>
                <p className="text-gray-600">Un accompagnement personnalisé et une relation de confiance</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualité</h3>
                <p className="text-gray-600">Excellence et rigueur dans tous nos services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">À propos de TC EXPERTISE</h2>
            <div className="text-lg text-gray-600 space-y-6">
              <p>
                <strong>Fondé par Thierry CHAN KIM PONNE</strong>, diplômé DSCG (Bac S mention Très Bien), 
                <strong>TC EXPERTISE</strong> bénéficie de plus de <strong>7 années d&apos;expertise</strong> acquises 
                dans les cabinets prestigieux de Bordeaux et Strasbourg avant son retour à La Réunion.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-xl font-semibold text-gray-900 italic">
                  &ldquo;Fort de mon expérience en métropole et de ma connaissance approfondie du marché réunionnais, 
                  j&apos;accompagne les entrepreneurs avec la rigueur continentale et la proximité créole.&rdquo;
                </p>
                <p className="text-sm text-gray-600 mt-2">— Thierry CHAN KIM PONNE, Expert-Comptable Fondateur</p>
              </div>
              <p className="text-center font-semibold text-gray-800">
                ✓ Ex-Responsable de dossiers et recrutement chez EC Partenaire<br/>
                ✓ Formation d&apos;élite IAE Bordeaux (DSCG)<br/>
                ✓ Spécialiste de l&apos;entrepreneuriat réunionnais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600">Des solutions complètes pour votre entreprise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Création d&apos;Entreprise</h3>
              <p className="text-gray-600">Accompagnement complet dans vos démarches de création et structuration d&apos;entreprise</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestion Comptable, Fiscale & Juridique</h3>
              <p className="text-gray-600">Prise en charge complète de votre comptabilité et de vos obligations fiscales et juridiques</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Audit Fiscal & Patrimonial</h3>
              <p className="text-gray-600">Expertise approfondie pour optimiser votre situation fiscale et patrimoniale</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Services Distinctifs</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Nous disposons d&apos;un réseau de partenaires professionnels qualifiés : avocats, notaires, 
              spécialistes fiscaux, banques, experts RH pour vous offrir un accompagnement complet.
            </p>
          </div>
        </div>
      </section>

      {/* Preuve Sociale & Urgence */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ils Nous Font Confiance</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic mb-4">
                  &ldquo;Thierry a transformé la gestion de notre entreprise. Sa vision stratégique 
                  nous a fait économiser des milliers d&apos;euros en optimisation fiscale.&rdquo;
                </p>
                <p className="font-semibold">— Marie L., Directrice SARL</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic mb-4">
                  &ldquo;Enfin un expert-comptable qui comprend les enjeux de l&apos;entrepreneuriat réunionnais. 
                  Réactivité et expertise au rendez-vous.&rdquo;
                </p>
                <p className="font-semibold">— Jean-Claude M., CEO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic mb-4">
                  &ldquo;Accompagnement personnalisé et conseils avisés. Notre chiffre d&apos;affaires 
                  a progressé de 40% grâce à ses recommandations.&rdquo;
                </p>
                <p className="font-semibold">— Sandrine R., Fondatrice</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">⚠️ ATTENTION : Capacité Limitée</h3>
            <p className="text-lg mb-6">
              Pour garantir un service de qualité, <strong>Thierry n&apos;accompagne que 25 entreprises maximum</strong>. 
              <br/>Actuellement : <strong>18 places occupées</strong> • <strong className="text-yellow-300">7 places restantes</strong>
            </p>
            <div className="bg-white text-red-600 inline-block px-6 py-3 rounded-lg font-bold">
              📞 Réservez votre consultation gratuite maintenant
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">💰 Combien vous COÛTENT vos erreurs comptables ?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Redressement fiscal moyen à La Réunion : <strong className="text-red-400">32 000€</strong><br/>
              Ne prenez plus ce risque. <strong className="text-green-400">Sécurisez votre entreprise MAINTENANT.</strong>
            </p>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">🎁 OFFRE SPÉCIALE LANCEMENT</h3>
              <p className="text-lg mb-6">
                ✅ Consultation stratégique GRATUITE (valeur 300€)<br/>
                ✅ Audit fiscal express de votre entreprise<br/>
                ✅ Plan d&apos;optimisation personnalisé<br/>
                ✅ Estimation du potentiel d&apos;économies
              </p>
              <div className="text-center">
                <a href="tel:+262693654221" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-block">
                  📞 APPELEZ MAINTENANT : 0693 65 42 21
                </a>
                <p className="text-sm mt-2 text-gray-200">Réponse en moins de 2h • Rendez-vous sous 48h</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="font-bold text-xl mb-2">URGENCE</h3>
                <p className="text-2xl font-bold text-green-400 mb-2">0693 65 42 21</p>
                <p className="text-gray-400">Réponse immédiate 7j/7</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="font-bold text-xl mb-2">EMAIL DIRECT</h3>
                <p className="text-lg text-green-400 mb-2">t.chankimponne@tcexpertise.re</p>
                <p className="text-gray-400">Thierry vous répond personnellement</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="font-bold text-xl mb-2">BUREAU</h3>
                <p className="text-lg text-green-400 mb-2">129 Avenue Marcel HOARAU</p>
                <p className="text-gray-400">97490 Saint-Denis, La Réunion</p>
              </div>
            </div>
            
            <div className="text-center mt-12 p-6 bg-red-900 rounded-lg">
              <p className="text-lg font-bold">
                ⏰ <strong>DERNIÈRE CHANCE</strong> : Plus que <strong className="text-yellow-400">7 places disponibles</strong> sur les 25 entreprises accompagnées par Thierry
              </p>
              <p className="text-sm mt-2 text-gray-300">
                Ne laissez pas passer cette opportunité. La prochaine ouverture est prévue en juillet 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">TC EXPERTISE</h3>
            <p className="text-gray-400 mb-4">Votre partenaire de confiance à La Réunion</p>
            <p className="text-sm text-gray-500">© 2024 TC EXPERTISE. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}