
import React, { Component } from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero () {
    return (
        <>
        <div className={styles.hero}>
            <div className={styles.left}>
                <h1 className={styles.h1}>
                    Build Your Dream Website Today!
                </h1>
                <p className={styles.p}>
                    Create stunning websites, dynamic platforms, and e-commerce solutions with ease.
                </p>

                <Link href="/services" className={styles.link}>
                    Get Started
                </Link>
                </div>
            <div className={styles.right}>
                <Image className={styles.image} src={require('@/app/images/images (1).jpeg')} alt="Web Space" width={500} height={400}  />
            </div>

        </div>
        </>
    )
}