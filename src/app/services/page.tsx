import Link from 'next/link';
import services from "@/app/styles/services.module.css";

export default function Services() {
  return (
    <div className={services.body}>
      <h2 className={services.heading}>Our Services</h2>
      <div>
        <div>
          <h3 className={services.subheading}>Simple Websites</h3>
          <p className={services.details}>Perfect for portfolios, blogs, or landing pages, our simple websites are designed to make a powerful impact with clean design and smooth navigation.</p>
          <div className={services.container}>
            <Link href="/services/simplewebsite">
              <button className={services.btn}>Explore Our Services</button>
            </Link>
          </div>
        </div>
        <div>
          <h3 className={services.subheading}>Dynamic Websites</h3>
          <p className={services.details}>Our dynamic websites are fully interactive and scalable, designed to grow with your business while providing the flexibility you need.</p>
          <div className={services.container}>
            <Link href="/services/dynamicwebsite">
              <button className={services.btn}>Explore Our Services</button>
            </Link>
          </div>
        </div>
        <div>
          <h3 className={services.subheading}>eCommerce Websites</h3>
          <p className={services.details}>From product listing to payment gateways, we build robust eCommerce platforms to help you reach your customers and scale your online business.</p>
          <div className={services.container}>
            <Link href="/services/ecommercewebsite">
              <button className={services.btn}>Explore Our Services</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
