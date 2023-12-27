import ContactHeroSection from "../components/contactPageComponents/ContactHeroSection"
import ContactInquiryFormConatainer from "../components/contactPageComponents/ContactInquiryFormConatainer"
import ContactPageCTA from "../components/contactPageComponents/ContactPageCTA"
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