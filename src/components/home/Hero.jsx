import React from 'react'
import HeroImage from "../../assets/photo-1589330694653-ded6df03f754.avif";
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-[#0d1321] text-white py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Text Content */}
                <div className="flex-1">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        Quality Printing Services <br />
                        For All Your Needs
                    </h1>
                    <p className="text-lg text-gray-300 mb-8">
                        We provide high-quality printing, binding, and lamination services with fast delivery and competitive pricing.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <NavLink
                            to="/services"
                            className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
                        >
                            Explore Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                    <img
                        src={HeroImage}
                        alt="certificate preview"
                        className="rounded-lg shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
