import services from '@/app/styles/services.module.css'
import Header from '../../../../components/header/header'
import Hero from '../../../../components/hero/hero'
import Footer from '../../../../components/footer/footer'
export default function Ecommercewebsite() {
    return (
      <>
      <Header />
      <Hero />
         <div className={services.body}>
         <h2 className={services.heading}>ECOMMERCE WEBSITE</h2>
         <p className={services.details}>Create online stores with shopping carts, secure payments, and product management. </p>
         <h4 className={services.ulheading}>For:</h4>
         <ul>
            <li className={services.lidetails}>Small to medium businesses</li>
            <li className={services.lidetails}>E-learning platforms</li>
            <li className={services.lidetails}>Niche stores</li>
         </ul>
         <h4 className={services.ulheading}>Features:</h4>
         <ul>
            <li className={services.lidetails}>Product catalogs and filters</li>
            <li className={services.lidetails}>Payment gateways (Stripe, PayPal)</li>
            <li className={services.lidetails}>Inventory and order management</li>
         </ul>
         </div> 
         <Footer />
      </>
    )}