import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProfileSection from "@/components/profile-section"
import NewsSection from "@/components/news-section"
import FacilitySection from "@/components/facility-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Hero />
      <ProfileSection />
      <NewsSection /> 
      <FacilitySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
