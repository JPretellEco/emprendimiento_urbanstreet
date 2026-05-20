export const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="/fondo_ofi.png"
          alt="Colección Essentials"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.35em] mb-10 leading-none uppercase">
            QUIÉNES
            <br />
            SOMOS
          </h1>

          <p className="text-sm md:text-base max-w-3xl mx-auto leading-8 tracking-[0.15em] uppercase text-white/75 font-light">
            Somos una nueva generación de jóvenes emprendedores de Trujillo,
            apasionados por redefinir la moda urbana con esencia elegante,
            minimalista y auténtica.
            <br />
            <br />
            Creamos prendas que combinan lujo accesible, estilo contemporáneo
            y actitud, para que cada persona pueda vestir con presencia,
            seguridad y personalidad sin límites.
          </p>
        </div>
      </section>

      {/* Asymmetric Grid Campaign Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Column - Single Large Image */}
          <div className="relative h-[60vh] md:h-[85vh] overflow-hidden group">
            <img
              src="/image1.png"
              alt="Editorial principal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Right Column - Two Stacked Images */}
          <div className="flex flex-col">
            <div className="relative h-[40vh] md:h-[42.5vh] overflow-hidden group">
              <img
                src="/image2.png"
                alt="Editorial 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative h-[40vh] md:h-[42.5vh] overflow-hidden group">
              <img
                src="/image_ese.png"
                alt="Editorial 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <h2 className="text-xs font-medium text-center mb-16 tracking-[0.3em] uppercase text-muted-foreground">
          Colecciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <a
            href="/polos"
            className="group relative aspect-[3/4] overflow-hidden bg-card"
          >
            <img
              src="/polos.png"
              alt="Polos"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-light tracking-[0.3em] uppercase">POLOS</h3>
            </div>
          </a>

          <a
            href="/shorts"
            className="group relative aspect-[3/4] overflow-hidden bg-card"
          >
            <img
              src="/image.png"
              alt="Shorts"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-light tracking-[0.3em] uppercase">SHORTS</h3>
            </div>
          </a>

          <a
            href="/hoodies"
            className="group relative aspect-[3/4] overflow-hidden bg-card"
          >
            <img
              src="/hoodie.png"
              alt="hoodies"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-light tracking-[0.3em] uppercase">HOODIES</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
