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
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">TC EXPERTISE</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Nous sommes à vos côtés pour optimiser la gestion et dynamiser la croissance de votre entreprise
            </p>
            
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
                Fondé en juin 2024 par Thierry CHAN KIM PONNE, TC EXPERTISE s&apos;impose comme un véritable partenaire 
                pour les entrepreneurs souhaitant structurer, développer et pérenniser leur activité.
              </p>
              <p className="text-xl font-semibold text-gray-900">
                &ldquo;Plus qu&apos;un cabinet comptable, TC EXPERTISE est un véritable partenaire pour les entrepreneurs 
                qui veulent structurer, développer et pérenniser leur entreprise.&rdquo;
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

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-lg text-gray-600">Nous sommes à votre écoute pour répondre à vos besoins</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-lg">📞</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-600">+262 693 65 42 21</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-lg">✉️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">t.chankimponne@tcexpertise.re</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-lg">📍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600">129 Avenue Marcel HOARAU<br />97490 Saint-Denis, La Réunion</p>
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
