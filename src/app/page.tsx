import home from '@/app/styles/home.module.css';

export default function Home() {
  return (
    <>
       <div className={home.body}>
            <h2 className={home.heading}>Your Gateway to Professional Websites</h2>
            <p className={home.details}>We create websites that elevate your business, from simple landing pages to dynamic, fully-fledged eCommerce platforms.</p>
            <div className={home.container}>
            <button className={home.btn}><a href="/services" className="btn">Explore Our Services</a></button>
            </div>
       </div> 
    </>
  )}
