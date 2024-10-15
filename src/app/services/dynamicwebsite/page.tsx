import services from '@/app/styles/services.module.css'
export default function Dynamicwebsite() {
    return (
      <>
         <div className={services.body}>
         <h2 className={services.heading}>DYNAMIC WEBSITE</h2>
         <p className={services.details}>Build interactive sites with user-friendly interfaces and content management. </p>
         <h4 className={services.ulheading}>For:</h4>
         <ul>
            <li className={services.lidetails}>Blogs</li>
            <li className={services.lidetails}>E-learning platforms</li>
            <li className={services.lidetails}>Membership sites</li>
         </ul>
         <h4 className={services.ulheading}>Features:</h4>
         <ul>
            <li className={services.lidetails}>CMS integration </li>
            <li className={services.lidetails}>User authentication and profiles</li>
            <li className={services.lidetails}>Custom forms and search functionality</li>
         </ul>
         </div> 
      </>
    )}