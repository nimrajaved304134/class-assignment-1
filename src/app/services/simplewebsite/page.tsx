import services from '@/app/styles/services.module.css'
export default function Simplewebsite() {
    return (
      <>
         <div className={services.body}>
         <h2 className={services.heading}>SIMPLE WEBSITE</h2>
         <p className={services.details}>Offer basic, responsive websites for personal portfolios, small businesses, or blogs. </p>
         <h4 className={services.ulheading}>For:</h4>
         <ul>
            <li className={services.lidetails}>Personal blogs</li>
            <li className={services.lidetails}>Freelancers and small businesses</li>
            <li className={services.lidetails}>Informational sites</li>
         </ul>
         <h4 className={services.ulheading}>Features:</h4>
         <ul>
            <li className={services.lidetails}>Mobile-friendly design</li>
            <li className={services.lidetails}>SEO basics</li>
            <li className={services.lidetails}>Fast loading times</li>
         </ul>
         </div> 
      </>
    )}