import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BannerHero from '../components/home/BannerAtas'
import ImageCarouselSection from '../components/home/BannerGerak'
import QuickLinksSection from '../components/home/kepala'
import AboutSection from '../components/home/AboutSection'
import ProgramsSection from '../components/home/Kejuruan'
import Eskul from '../components/home/Eskul'
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <BannerHero />
        <ImageCarouselSection />
        <QuickLinksSection />
        <AboutSection />
        <ProgramsSection />
        <Eskul/>
      </main>
      <Footer />
    </div>
  )
}
