export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-light text-gray-900 tracking-wide">TC EXPERTISE</h1>
              <span className="ml-3 text-sm text-gray-500 font-light">Expert-Comptable</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#histoire" className="text-gray-600 hover:text-gray-900 font-light transition-colors">Mon Histoire</a>
              <a href="#approche" className="text-gray-600 hover:text-gray-900 font-light transition-colors">Mon Approche</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 font-light transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-light transition-colors">Rencontrons-nous</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Storytelling */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  De retour à La Réunion
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Quand l&apos;expertise<br/>
                <span className="font-medium text-blue-600">continentale</span><br/>
                rencontre l&apos;esprit<br/>
                <span className="font-medium text-green-600">réunionnais</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                Après 7 années en métropole dans l&apos;expertise comptable, 
                je reviens chez moi avec une mission : accompagner les entrepreneurs 
                réunionnais avec la rigueur apprise ailleurs et l&apos;amour du territoire qui m&apos;anime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center">
                  Parlons de votre projet
                </a>
                <a href="#histoire" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center">
                  Découvrir mon parcours
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="font-light">Photo portrait<br/>Thierry Chan Kim Ponne</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium text-gray-900">Expert-Comptable DSCG</p>
                <p className="text-xs text-gray-500">7+ années d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon Histoire */}
      <section id="histoire" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Mon Histoire</h2>
            <p className="text-lg text-gray-600 font-light">Le parcours qui m&apos;a mené à créer TC EXPERTISE</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Formation d&apos;Excellence</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Diplômé DSCG à l&apos;IAE Bordeaux après un Bac S mention Très Bien au Lycée Leconte de Lisle. 
                La rigueur académique comme fondation.
              </p>
            </div>
            
            {/* Étape 2 */}
            <div className="text-center">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Expérience Métropole</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                7 années intenses chez EC Partenaire (Strasbourg) et Cabinet Bergey Vignacq (Bordeaux). 
                De collaborateur à responsable de dossiers et recrutement.
              </p>
            </div>
            
            {/* Étape 3 */}
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-xl">🏝️</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Retour aux Sources</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Juin 2024 : création de TC EXPERTISE à La Réunion. 
                Mettre mon expertise au service de l&apos;entrepreneuriat local.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <blockquote className="text-2xl font-light text-gray-900 italic mb-6">
                  &ldquo;J&apos;ai appris la rigueur en métropole, mais c&apos;est ici, 
                  à La Réunion, que j&apos;ai compris le véritable sens de l&apos;accompagnement.&rdquo;
                </blockquote>
                <p className="text-gray-600 font-light">
                  — Thierry Chan Kim Ponne, Fondateur TC EXPERTISE
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xl">📸</span>
                  </div>
                  <p className="font-light text-sm">Photo bureau<br/>ou lifestyle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon Approche */}
      <section id="approche" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Mon Approche</h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Plus qu&apos;un expert-comptable, je suis un partenaire de votre réussite. 
              Voici les trois piliers qui guident mon travail.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Réactivité</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Votre temps est précieux. Je m&apos;engage à vous répondre rapidement 
                et à traiter vos dossiers avec l&apos;urgence qu&apos;ils méritent.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Proximité</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Chaque entreprise est unique. J&apos;apprends à connaître votre activité, 
                vos défis et vos ambitions pour mieux vous conseiller.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
                <span className="text-purple-600 text-xl">✨</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                La précision n&apos;est pas une option en comptabilité. 
                Je mets toute ma rigueur au service de la qualité de nos livrables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Services</h2>
            <p className="text-lg text-gray-600 font-light">
              Un accompagnement complet pour toutes les étapes de votre entreprise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Création & Développement</h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  Accompagnement dans le choix de la forme juridique
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  Formalités de création et immatriculation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  Stratégie fiscale et optimisation dès le démarrage
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  Mise en place des outils de gestion
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Gestion Courante</h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Tenue comptable complète et révision
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Établissement des déclarations fiscales et sociales
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Paies et déclarations sociales
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Tableaux de bord et suivi de performance
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Conseil & Optimisation</h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  Audit et diagnostic de votre situation
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  Optimisation fiscale et patrimoniale
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  Conseil en gestion et aide à la décision
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  Accompagnement lors des contrôles
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Réseau d&apos;Experts</h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  Avocats spécialisés en droit des affaires
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  Notaires pour vos projets immobiliers
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  Banquiers et courtiers en financement
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  Consultants RH et formation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages subtils */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Ils me font confiance</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <p className="text-gray-600 font-light italic leading-relaxed">
                  &ldquo;Thierry allie parfaitement expertise technique et compréhension 
                  de notre marché local. Un vrai plus pour notre développement.&rdquo;
                </p>
              </div>
              <p className="font-medium text-gray-900">Marie Laurence</p>
              <p className="text-sm text-gray-500 font-light">Directrice, SARL Import/Export</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <p className="text-gray-600 font-light italic leading-relaxed">
                  &ldquo;Enfin un expert-comptable qui prend le temps d&apos;expliquer 
                  et de nous accompagner dans nos choix stratégiques.&rdquo;
                </p>
              </div>
              <p className="font-medium text-gray-900">Jean-Claude Morel</p>
              <p className="text-sm text-gray-500 font-light">Fondateur, Cabinet Architecture</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <p className="text-gray-600 font-light italic leading-relaxed">
                  &ldquo;Réactif, précis et de très bon conseil. 
                  Exactement ce que nous cherchions pour notre entreprise.&rdquo;
                </p>
              </div>
              <p className="font-medium text-gray-900">Sandrine Rivière</p>
              <p className="text-sm text-gray-500 font-light">Co-fondatrice, Start-up Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact élégant */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Rencontrons-nous</h2>
            <p className="text-lg text-gray-600 font-light">
              Parlons de votre projet autour d&apos;un café. 
              Premier échange sans engagement.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Commençons par discuter</h3>
                <p className="text-gray-600 font-light mb-8 leading-relaxed">
                  Chaque projet est unique. J&apos;aime prendre le temps de comprendre 
                  votre activité, vos objectifs et vos préoccupations avant de vous proposer 
                  un accompagnement sur mesure.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">0693 65 42 21</p>
                      <p className="text-sm text-gray-500">Réponse rapide assurée</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">t.chankimponne@tcexpertise.re</p>
                      <p className="text-sm text-gray-500">Email direct</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">129 Avenue Marcel Hoarau</p>
                      <p className="text-sm text-gray-500">97490 Saint-Denis, La Réunion</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="font-light">Photo bureau<br/>ou carte de visite<br/>interactive</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+262693654221" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center">
                  Appeler maintenant
                </a>
                <a href="mailto:t.chankimponne@tcexpertise.re" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center">
                  Envoyer un email
                </a>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 font-light">
                Premier entretien offert • Réponse sous 24h • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimaliste */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-light text-gray-900 mb-2">TC EXPERTISE</h3>
            <p className="text-gray-500 text-sm font-light mb-4">Expert-Comptable • La Réunion</p>
            <p className="text-xs text-gray-400">© 2024 TC EXPERTISE. Thierry Chan Kim Ponne, Expert-Comptable.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}