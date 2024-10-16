import React from "react";
import Link from "next/link";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
} from "react-icons/io5";
import style from './Footer.module.css'; // Import the CSS module

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.foot}>
                <p>Contact Us</p>
                <p>Email: support@webspace.com</p>
                <p>Phone: +1 (234) 567-890</p>
                <p>Location: 123 WebSpace St, Tech City</p>
            </div>

            <div className={style.socialIcons}>
                <Link href="https://www.facebook.com/profile.php?id=61562204128726" target="_blank" className={style.socialIcon}>
                    <IoLogoFacebook size={35} />
                </Link>

                <Link href="https://www.instagram.com/roadsaudio/" target="_blank" className={style.socialIcon}>
                    <IoLogoInstagram size={35} />
                </Link>

                <Link href="https://www.linkedin.com/company/roads-audio/" target="_blank" className={style.socialIcon}>
                    <IoLogoLinkedin size={35} />
                </Link>
            </div>
        </div>
    );
}

