import home from '@/app/styles/home.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Hero from '../../components/hero/hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
       <div className={home.body}>
            <h2 className={home.heading}>Your Gateway to Professional Websites</h2>
            <p className={home.details}>We create websites that elevate your business, from simple landing pages to dynamic, fully-fledged eCommerce platforms.</p>
            <div className={home.container}>
            <button className={home.btn}><a href="/services" className="btn">Explore Our Services</a></button>
            </div>
       </div>
       <Footer /> 
    </>
  )}
