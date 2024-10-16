import about from '@/app/styles/about.module.css'
import Header from '../../../components/header/header'
import Hero from '../../../components/hero/hero'
import Footer from '../../../components/footer/footer'

export default function About() {
    return (
      <>
      <Header />
      <Hero />
         <div className={about.body}>
         <h2 className={about.heading}>About WebSpace</h2>
        <p className={about.details1}>At WebSpace, we specialize in transforming your online presence with beautifully designed, functional websites. Whether you need a simple site to showcase your portfolio, a dynamic platform for customer interaction, or a complete eCommerce solution, we have you covered.</p>
        <p className={about.details2}>Our team is dedicated to providing professional web development services that meet your needs and exceed your expectations. We believe in making the web accessible for everyone, from startups to established businesses.</p>
         </div> 
      <Footer />
      </>
    )}
  