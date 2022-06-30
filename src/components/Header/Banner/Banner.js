import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <section className="banner__container">
            <div className="banner__container-content">
                <div className="banner__container-content--text">
                    <h1>My name is <span>Elizabeth Peredo</span></h1>
                    <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectet lorem ipsum dolor lorem ipsum dolor sit am
                    </p>
                    <Link href={{ pathname: "/CV" }}>
                        <a className="btn">Descargar CV</a>
                    </Link>
                </div>
            </div>
        </section >

    )
}