import ContactHeroSection from "../components/ContactHeroSection"
import ContactInquiryFormConatainer from "../components/ContactInquiryFormConatainer"
import ContactPageCTA from "../components/ContactPageCTA"
import ContactPageSubHeroSection from "../components/ContactPageSubHeroSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import TrustedCompany from "../components/TrustedCompany"


const ContactUs = () => {
  return (
    <div>
     <Header />
      <ContactHeroSection />
      {/* <ContactPageSubHeroSection /> */}
      <ContactInquiryFormConatainer />
      <TrustedCompany />
      <ContactPageCTA />
      <Footer />
    </div>
  )
}

export default ContactUs