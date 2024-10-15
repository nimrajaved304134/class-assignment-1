import contact from "@/app/styles/contact.module.css";

export default function Contact() {
    return (
      <>
      <div className={contact.body}>
      <h2 className={contact.heading}>Contact WebSpace</h2>
     <p className={contact.details1}>At Web Space, we value your inquiries and feedback! Whether you have questions about our services, need assistance with a project, or simply want to share your thoughts, we are here to help. Our dedicated team is committed to providing you with the best support possible. Please feel free to reach out to us directly via email at <em className="text-fuchsia-900">info@webspace.com</em> or call us at <em className="text-fuchsia-900">+123 456 7890</em>.</p>
     <p className={contact.details2}>We look forward to hearing from you!</p>
      </div> 
   </>
    )}
