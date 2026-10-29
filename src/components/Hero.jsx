import { portfolioData } from '../data/portfolioData';

function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Column - Image */}
        <div className="order-1 md:order-1 flex justify-center md:justify-start md:pl-8">
          <div className="relative animate-fade-in-up">
            
            {/* THE GLOW - Added behind everything */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-blue-500/20 to-purple-500/20 blur-3xl rounded-[2.5rem] scale-110 animate-pulse-slow -z-10"></div>
            
            {/* Decorative ring behind image */}
            <div className="absolute inset-0 border-2 border-accent/20 rounded-[2.5rem] scale-105 animate-pulse-slow"></div>
            
            <div className="w-64 h-80 md:w-80 md:h-[28rem] rounded-[2.5rem] overflow-hidden border-4 border-bg bg-white/5 relative z-10 shadow-2xl shadow-accent/10 animate-scale-in">
              <img 
                src={hero.profileImage} 
                alt={hero.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Small floating badge (Only shows if isOpenToWork is true) */}
            {hero.isOpenToWork && (
              <div className="absolute -bottom-2 -right-2 z-20 bg-bg border border-accent/30 px-4 py-2 rounded-full shadow-xl animate-bounce-slow">
                <span className="text-accent text-sm font-medium">Open to Work</span>
              </div>
            )}

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border border-accent/20 rounded-lg animate-float"></div>
            <div className="absolute -bottom-4 -left-8 w-8 h-8 bg-accent/10 rounded-full animate-float-delayed"></div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="order-2 md:order-2 animate-fade-in-up animation-delay-200">
          {/* Small Accent Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-wider text-sm uppercase">
              {hero.tag}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-4 animate-fade-in-up animation-delay-300">
            {hero.headline}
          </h1>

          {/* Subheading / Role */}
          <h2 className="text-xl md:text-2xl text-text/70 font-body mb-6 animate-fade-in-up animation-delay-400">
            {hero.subheadline}
          </h2>

          {/* Bio Paragraph */}
          <p className="text-text/60 leading-relaxed max-w-xl mb-10 text-base md:text-lg animate-fade-in-up animation-delay-500">
            {hero.bioPrefix}
            <strong className="text-accent font-medium">{hero.bioHighlight}</strong>
            {hero.bioSuffix}
          </p>

          {/* Call to Action Buttons with Icons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            {/* Email Button */}
            <a 
              href={`mailto:${hero.email}`} 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg font-heading font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email me
            </a>

            {/* Download CV Button */}
            <a 
              href={hero.cvLink} 
              download
              className="flex items-center justify-center gap-2 px-6 py-3 border border-text/20 text-text font-heading font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;