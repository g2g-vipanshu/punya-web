"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

const images = [
    "/images/Banner1.jpg",
    "/images/Banner2.jpg",
];

const MainSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const products = [
        {
            id: 1,
            name: "Lemon",
            volume: "250 ml",
            image: "/images/product3.png",
        },
        {
            id: 2,
            name: "Jeera Soda",
            volume: "250 ml",
            image: "/images/product4.png",
        },
        {
            id: 3,
            name: "Elaichi",
            volume: "200 ml",
            image: "/images/product5.png",
        },
        {
            id: 4,
            name: "Kesar Badam",
            volume: "200 ml",
            image: "/images/product6.png",
        },
    ];

    const locations = [
        {
            name: "Sarojini Nagar Market",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7630002008364!2d77.19588748717482!3d28.576878660277554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce28041e265eb%3A0xc243cd66d586a451!2sSarojini%20Nagar%20Market%2C%20Sarojini%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110023!5e0!3m2!1sen!2sin!4v1745759464847!5m2!1sen!2sin"
        },
        {
            name: "Select City Walk",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0826614598845!2d77.21700826051857!3d28.528862273784473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18ac60e4a61%3A0x81c366c7998e72a3!2sNexus%20Select%20CityWalk!5e0!3m2!1sen!2sin!4v1745759763553!5m2!1sen!2sin"
        },
        {
            name: "Saket Market",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3670439818084!2d77.19880268859464!3d28.521005952854118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fb6d111cb5%3A0xc889a2ae34f8d635!2sSaket!5e0!3m2!1sen!2sin!4v1745762367391!5m2!1sen!2sin"
        },
        {
            name: "Lajpat Nagar Market",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.030834878541!2d77.23850717578232!3d28.568836775699705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3419162994d%3A0x2c59052f92f5a79f!2sLajpat%20Nagar%20Market!5e0!3m2!1sen!2sin!4v1745762438556!5m2!1sen!2sin"
        },
        {
            name: "Anand Vihar ISBT",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5503.786647410244!2d77.31237654656388!3d28.64827760628528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb39486b2fcb%3A0x95107699484eb8d!2sIsbt%20Anand%20Vihar%2C%20Anand%20Vihar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1745762492601!5m2!1sen!2sin"
        },
        {
            name: "Uttam Nagar West/ East Metro",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1467519601556!2d77.06153183488773!3d28.6253635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04db6568dbb7%3A0xd011842a5127efcb!2sUttam%20Nagar%20East%20Metro%20Station!5e0!3m2!1sen!2sin!4v1745762599922!5m2!1sen!2sin"
        },
        {
            name: "Janakpuri",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15597.948643364254!2d77.08202026313832!3d28.62209681111482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ba6b064d0f%3A0xf609cdf712fe603e!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745764424682!5m2!1sen!2sin"
        },
        {
            name: "Palam Metro Station",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.356837243719!2d77.08038507578301!3d28.589069975688492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b41b7bf3f0f%3A0xaf4ab794d32d9f05!2sPalam!5e0!3m2!1sen!2sin!4v1745764673211!5m2!1sen!2sin"
        },
        {
            name: "Rajouri Garden Market",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.46849697419!2d77.11744567578492!3d28.64568767565757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036c47b6a6bd%3A0xfb3de41ab9a48813!2sRajouri%20Garden%20Market!5e0!3m2!1sen!2sin!4v1745764713004!5m2!1sen!2sin"
        },
        {
            name: "Tilak Nagar Market",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28013.91980406021!2d77.06082517910154!3d28.63755430000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04991ffbef4d%3A0xdb5d3841339c270a!2sTilak%20Nagar%20Market!5e0!3m2!1sen!2sin!4v1745764769334!5m2!1sen!2sin"
        },
        {
            name: "DLF Cybercity",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7013.036770752998!2d77.08568709442669!3d28.494047402962327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19382985d7d1%3A0xb03bedc65fe6f2b2!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1745764807086!5m2!1sen!2sin"
        },
        {
            name: "Safdarjung Hospital",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.0395595622415!2d77.20357923878203!3d28.567386793925124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce27b1527eb57%3A0xf71af9b11f97c064!2sVMMC%20%26%20Safdarjung%20Hospital!5e0!3m2!1sen!2sin!4v1745765028629!5m2!1sen!2sin"
        },
        {
            name: "Paharganj",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.049158479576!2d77.20263561039673!3d28.644375810529294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6a1d2921af%3A0x570c5acc7d0f7853!2sPaharganj%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745765062852!5m2!1sen!2sin"
        },
        {
            name: "Karol Bagh Market",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.369556064466!2d77.18707697578505!3d28.64865137565601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0354a933b0cf%3A0xe3c5ce32f7c5215a!2sKarol%20Bagh%20Market!5e0!3m2!1sen!2sin!4v1745765100498!5m2!1sen!2sin"
        },
        {
            name: "Delhi Metro Stations",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004361818!2d77.04417550364565!3d28.52725274127736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745765613176!5m2!1sen!2sin"
        },
    ];

    const [selectedLocation, setSelectedLocation] = useState(locations[0]);

    return (
        <>
            <section>
                {/* Image Carousel */}
                <div className="w-full relative overflow-hidden pt-16 sm:pt-16">
                    <div className="relative w-full aspect-[25/9] sm:aspect-[25/9]">
                        {images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt="carousel"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                                className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
                {/* Bar Indicator */}
                <div className="w-full flex justify-center mt-2 sm:mt-3">
                    <div className="w-14 h-1 bg-gray-300 z-10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 rounded-full transition-all duration-500"
                            style={{ width: `${((currentImage + 1) / images.length) * 100}%` }}
                        />
                    </div>
                </div>
            </section>

            {/* Our Brand Section */}
            <section
                className="relative w-full h-[100vh] md:h-[75vh] bg-cover bg-center mt-5"
                style={{ backgroundImage: "url('/images/water1.png')" }}
            >
                <div className="relative z-10 flex items-center justify-end h-full px-6 sm:px-8 lg:px-16">
                    <div className="bg-white/90 shadow-2xl rounded-lg p-8 sm:p-10 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Brand. Your Confidence.</h2>
                        <p className="text-gray-700 mb-5 font-bold text-sm sm:text-base">
                            Punnyadhara is a new age D2C Tech brand that is revolutionising India&apos;s beverages industry! We are India&apos;s first branded packaged drinking water mass distributed directly to customers at cost of bottling through multiple points of sale.
                        </p>
                        <p className="text-gray-700 mb-5">
                            Punnyadhara is disrupting India&apos;s beverage industry by offering safe, packaged drinking water at just ₹3 - 40% cheaper than market rates. By eliminating middlemen and selling directly through our own vending machines and carts in highfootfall areas like metro stations, universities and hospitals across Delhi NCR, we ensure clean water is accessible and affordable for all.
                        </p>
                        <p className="text-gray-700">
                            We believe water is a necessity, not a privilege. Our mission goes beyond affordability - we&apos;re building a sustainable ecosystem by collecting, crushing, and recycling PET bottles, while sparking a social movement to make Punnyadhara the most trusted and loved water brand in India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Product Section */}
            <section className="py-20 sm:py-24 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
                    Our Products
                </h2>
                <div className="max-w-6xl mx-auto">
                    {/* Mobile: horizontal scroll */}
                    <div className="flex sm:hidden overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex-shrink-0 w-72 flex flex-col items-center text-left">
                                <div className="w-60 h-60 flex items-center justify-center bg-gradient-to-b from-[#fff7dc] to-[#ffd680] rounded-t-lg">
                                    <Image
                                        src={`/images/product${i}.png`}
                                        alt={`Product ${i}`}
                                        className="w-60 h-60 object-contain mb-10"
                                    />
                                </div>
                                <div className="w-60">
                                    <h3 className="font-bold text-gray-800 mb-1">
                                        {i === 3 ? 'Lemon' : 'Punnyadhara'}
                                    </h3>
                                    <p className="text-pink-600 font-semibold mb-4">
                                        {i === 1 ? '1L' : i === 2 ? '500ml' : '250ml'}
                                    </p>
                                    <button className="bg-pink-600 text-white py-2 px-6 hover:bg-pink-700 transition w-full">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop and Tablet Grid View */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 px-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center text-left">
                                <div className="w-60 h-60 flex items-center justify-center bg-gradient-to-b from-[#fff7dc] to-[#ffd680] rounded-t-lg">
                                    <Image
                                        src={`/images/product${i}.png`}
                                        alt={`Product ${i}`}
                                        className="w-64 h-64 object-contain mb-10"
                                    />
                                </div>
                                <div className="w-60">
                                    <h3 className="font-bold text-gray-800 mb-1">
                                        {i === 3 ? 'Lemon' : 'Punnyadhara'}
                                    </h3>
                                    <p className="text-pink-600 font-semibold mb-4">
                                        {i === 1 ? '1L' : i === 2 ? '500ml' : '250ml'}
                                    </p>
                                    <button className="bg-pink-600 text-white py-2 px-6 hover:bg-pink-700 transition w-full">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Mission & Vision Section */}
            <section className="py-1 sm:py-1">
                <div className="max-w-none flex flex-col md:flex-row gap-16">
                    {/* Left Image Card */}
                    <div className="relative w-full md:w-1/2 overflow rounded-none shadow-lg">
                        <Image
                            src="/images/Water2.jpg"
                            alt="Left Image"
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white px-6 py-4 shadow-md w-11/12 sm:w-4/5 z-10">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
                            <p className="text-gray-600 text-sm font-bold">
                                Water is the most basic necessity of life. Our mission is to make clean, drinking, hygienically packaged drinking water available at the most affordable cost.
                            </p>
                        </div>
                    </div>

                    {/* Right Image Card */}
                    <div className="relative w-full md:w-1/2 overflow rounded-none shadow-lg">
                        <Image
                            src="/images/Water3.jpg"
                            alt="Right Image"
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white px-6 py-4 shadow-md w-11/12 sm:w-4/5 z-10">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
                            <p className="text-gray-600 text-sm font-bold">
                                No individual ever has to sacrifice the quality of drinking water due to high costs. We envision PUNNYADHARA water available to everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image */}
            <div className="mt-16 sm:mt-20">
                <Image
                    src="/images/waterSplash.png"
                    alt="Full Width Banner"
                    className="w-full h-96 object-cover"
                />
            </div>

            {/* Water for all section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 sm:gap-14">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Water for all
                        </h2>
                        <p className="text-gray-600 mb-4 font-bold">
                            We believe water is a fundamental right, not a privilege. Access to clean, safe drinking water improves health, empowers communities, and enhances daily life.
                        </p>
                        <p className="text-gray-600">
                            At Punnyadhara, we&apos;re changing this. By offering packaged drinking water at cost, we ensure everyone has access to safe hydration. Through our direct distribution network of vending machines and carts, we make clean water available where it&apos;s needed most-convenient, affordable and sustainable.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2">
                        <Image
                            src="/images/drinkingWater.jpeg"
                            alt="Why Choose Us"
                            className="w-full h-auto shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Bringing the Promise Section */}
            <section className="pb-50" >
                <div className="h-96 w-full bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/Wave2.svg')",
                    }}>
                    <div className="py-16 sm:py-20">
                        <div className="max-w-7xl mx-auto px-4 text-center text-black mb-12 sm:mb-14">
                            <h2 className="text-4xl sm:text-5xl font-bold">Bringing the Promise of Purity</h2>
                        </div>
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-3">
                            {/* Card 1 */}
                            <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                <Image
                                    src="/images/card1.jpg"
                                    alt="Card One"
                                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white z-10">
                                    <h3 className="text-3xl font-bold mb-1 drop-shadow-lg">100+ POS</h3>
                                    <p className="text-sm max-w-xs drop-shadow-md">
                                        We are making clean, affordable drinking water accessible across high-footfall areas.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                <Image
                                    src="/images/card2.png"
                                    alt="Card Two"
                                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white z-10">
                                    <h3 className="text-2xl font-semibold">10+ Locations</h3>
                                    <p className="text-sm">we are ensuring easy access to safe drinking water where it&apos;s needed most.</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                <Image
                                    src="/images/card3.jpeg"
                                    alt="Card Three"
                                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-2xl font-semibold">1L+ Customers</h3>
                                    <p className="text-sm">we are transforming access to affordable, safe drinking water every day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Upcoming Launch Section */}
            <section className="pt-[40rem] sm:py-20 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
                    Upcoming Launch
                </h2>

                <div className="max-w-6xl mx-auto">
                    {/* Mobile: Swipeable horizontal scroll */}
                    <div className="flex sm:hidden overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                        {products.map((product) => (
                            <div key={product.id} className="flex-shrink-0 w-72 flex flex-col items-center text-left">
                                <div className="bg-gradient-to-b from-[#fff7dc] to-[#ffd680] w-60 h-60 flex items-center justify-center rounded-t-lg">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        className="w-56 h-56 object-contain mb-10"
                                    />
                                </div>
                                <div className="w-60">
                                    <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
                                    <p className="text-pink-600 font-semibold mb-4">{product.volume}</p>
                                    <button className="bg-white border-2 border-pink-700 text-pink-700 py-2 px-6 hover:bg-pink-50 transition w-full">
                                        🤩 Excited
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tablet/Desktop: Grid view */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 px-4">
                        {products.map((product) => (
                            <div key={product.id} className="flex flex-col items-center text-left">
                                <div className="bg-gradient-to-b from-[#fff7dc] to-[#ffd680] w-60 h-60 flex items-center justify-center rounded-t-lg">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        className="w-56 h-56 object-contain mb-10"
                                    />
                                </div>
                                <div className="w-60">
                                    <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
                                    <p className="text-pink-600 font-semibold mb-4">{product.volume}</p>
                                    <button className="bg-white border-2 border-pink-700 text-pink-700 py-2 px-6 hover:bg-pink-50 transition w-full">
                                        🤩 Excited
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* D2C Section */}
            <section className="py-14 sm:py-10">
                <div className="max-w-7xl mx-auto bg-blue-100 overflow">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row-reverse items-stretch h-auto md:h-[280px] relative">
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-8 z-10 text-center md:text-left">
                            <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                We follow a strict quality control when manufacturing products. A scientifically advanced, and rigorous process is followed at our state-of-the-art production facilities to ensure that every consumer receives the same pure, safe and healthy drinking water.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                            <Image src="/images/Water4.png" alt="Top Left" className="w-full h-full object-cover" />
                            <div className="absolute -top-12 left-6 w-24 h-24 sm:w-36 sm:h-36 bg-[var(--primary-blue)] rounded-full flex flex-col items-center justify-center shadow-xl text-white text-center p-3">
                                <h3 className="text-2xl sm:text-4xl font-bold">90+</h3>
                                <p className="text-sm sm:text-md">Quality Tests</p>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[550px]">
                        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our D2C Sales Points</h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Punnyadhara branded beverages including our packaged drinking water sells directly to customers through our various points of sale. Our vending machines and vending carts are available at high footfall zones including shopping complexes, open markets, hospitals, shopping malls, colleges & universities, metro station and more.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image src="/images/rightSectionImage1.jpg" alt="Bottom Right" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Live Location Section */}
            <section className="w-full py-12 bg-blue-50 mt-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
                        Our Live Locations
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 text-left text-gray-600">
                            <p className="text-gray-700 mb-4 font-bold">
                                Punnyadhara is available across multiple locations within Delhi NCR:
                            </p>
                            <div className="grid grid-cols-2 gap-x-6">
                                <div className="space-y-2">
                                    {locations.slice(0, 7).map((location, index) => (
                                        <p
                                            key={index}
                                            className={`cursor-pointer hover:text-pink-600 transition ${selectedLocation.name === location.name ? "text-pink-600 font-semibold" : ""
                                                }`}
                                            onClick={() => setSelectedLocation(location)}
                                        >
                                            {location.name}
                                        </p>
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    {locations.slice(7, 15).map((location, index) => (
                                        <p
                                            key={index + 7}
                                            className={`cursor-pointer hover:text-pink-600 transition ${selectedLocation.name === location.name ? "text-pink-600 font-semibold" : ""
                                                }`}
                                            onClick={() => setSelectedLocation(location)}
                                        >
                                            {location.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Map Display */}
                        <div className="hidden md:flex md:w-2/3 justify-center">
                            <div className="w-full md:w-[90%] h-64 sm:h-80 md:h-[500px] rounded-lg overflow-hidden">
                                <iframe
                                    src={selectedLocation.mapUrl}
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full rounded-lg shadow-lg border-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Recycle and sustainability section */}
            <section className="flex flex-col md:flex-row items-stretch py-12 w-full mx-auto gap-8">
                {/* Left Image */}
                <div className="md:w-1/4 w-full">
                    <Image
                        src="/images/Recycle.jpg"
                        alt="Left Visual"
                        className="h-full w-full object-cover rounded-r-lg"
                    />
                </div>

                {/* Middle Content */}
                <div className="md:w-2/4 w-full flex flex-col justify-center text-left gap-6 px-2">
                    <h2 className="text-3xl font-bold">Recycling & Sustainability</h2>
                    <p className="text-gray-600">
                        Punnyadhara prioritizes environment, social and economic responsibility in its business practices. We goes beyond just selling products or services and focus on creating long-term value while minimizing negative impacts on the planet and society. We try to reduce waste and implement ethical production processes. Our aim to foster transparency, fairness and inclusivity, ensuring that our supply chains supports fair labor practices. By aligning with the values of conscious consumers, we build trust and loyalty while contributing to a more sustainable future.
                    </p>
                    <div className="flex flex-col gap-4 text-left">
                        <div className="flex items-start gap-3">
                            <Image src="/images/Icon1.svg" alt="" className="mt-1" />
                            <p className="text-gray-700 font-medium">
                                All our vending carts and machines are equipped with plastic bottle crushing machines. The bottles are crushed and transported to the recycle plant.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Image src="/images/Icon2.svg" alt="" className="mt-1" />
                            <p className="text-gray-700 font-medium">
                                Punnyadhara also incentives all customers to recycle any and all plastic bottles upto size of one litre through its vending carts and machines.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Image src="/images/Icon3.svg" alt="" className="mt-1" />
                            <p className="text-gray-700 font-medium">
                                Our company policy is to recycle atleast the same quantity of bottles we sell to our customers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/4 w-full flex justify-center sm:justify-end items-center">
                    <Image
                        src="/images/Recycle2.jpg"
                        alt="Right Visual"
                        className="w-full h-80 object-cover rounded-l-lg"
                    />
                </div>
            </section>


            {/* Certification Section */}
            <section className="py-16 bg-white overflow-hidden">
                <h2 className="text-3xl font-bold text-center mb-10">Our Certifications</h2>
                <div className="carousel-container mx-auto overflow-hidden">
                    <div className="carousel-track">
                        <Image src="/images/cert1.webp" alt="Cert 1" className="carousel-item" />
                        <Image src="/images/cert2.webp" alt="Cert 2" className="carousel-item" />
                        <Image src="/images/cert3.png" alt="Cert 3" className="carousel-item" />
                        <Image src="/images/cert4.webp" alt="Cert 4" className="carousel-item" />
                        <Image src="/images/cert5.png" alt="Cert 5" className="carousel-item" />
                        <Image src="/images/cert6.png" alt="Cert 6" className="carousel-item" />
                    </div>
                </div>
            </section>


            {/* Partner with us section */}
            <section className="relative bg-white py-16 shadow-section">
                <h2 className="text-3xl font-bold text-center mb-10">Partner with us</h2>
                <div className="absolute top-0 left-0 w-full h-6 shadow-md z-10" />
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 relative z-20 rounded-xl">
                    {/* box 1 */}
                    <div className="flex flex-col items-center justify-center text-center bg-[var(--primary-blue)] p-6 rounded w-96 h-52">
                        <div className="w-12 h-12 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4 shadow-md">
                            1
                        </div>
                        <p className="text-white px-2">
                            Sell Punnyadhara bottled water and other products through your supply chain.
                        </p>
                    </div>
                    {/* box 2 */}
                    <div className="flex flex-col items-center justify-center text-center bg-[var(--primary-blue)] p-6 rounded w-96 h-52">
                        <div className="w-12 h-12 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4 shadow-md">
                            2
                        </div>
                        <p className="text-white px-2">
                            Become a Franchisee of our supply chain through our carts in your network locations.
                        </p>
                    </div>
                    {/* box 3 */}
                    <div className="flex flex-col items-center justify-center text-center bg-[var(--primary-blue)] p-6 rounded w-96 h-52">
                        <div className="w-12 h-12 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4 shadow-md">
                            3
                        </div>
                        <p className="text-white px-2">
                            Become a vending machine franchisee through placing our vending machines at your network locations.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-6 shadow-md z-10" />
            </section>


            {/* Last Image section */}
            <section className="relative w-full bg-white py-20">
                <div className="flex flex-col md:flex-row items-start relative">
                    <div className="md:w-2/3 w-full relative z-0">
                        <Image
                            src="/images/Glass-water.jpeg"
                            alt="Illustration"
                            className="w-full h-[500px] object-cover shadow-2xl"
                        />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-6 -ml-0 md:-ml-24 z-10 relative mt-6 md:mt-0 px-4 md:px-0">
                        {/* First Container */}
                        <div className="bg-white shadow-2xl sm:shadow-none rounded-lg p-6 w-full max-w-[90%] mx-auto mt-3.5">
                            <h2 className="font-semibold mb-4">Become our supply chain partner?</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-gray-800 text-sm md:text-base">
                                        1. Are you a bottler of packaged drinking water?
                                    </p>
                                </div>
                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-gray-800 text-sm md:text-base">
                                        2. Are you a logistics provider?
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <p className="text-gray-800 text-sm md:text-base text-left w-full sm:w-auto">
                                        3. Are you a warehouse provider?
                                    </p>
                                    <div className="w-full sm:w-auto text-center sm:text-right">
                                        <Link href="/contact">
                                            <button className="bg-pink-600 text-white px-4 py-2 hover:bg-pink-700 w-max mx-auto sm:mx-0">
                                                Partner with us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Container */}
                        <div className="bg-white shadow-2xl sm:shadow-none rounded-lg p-6 w-full max-w-[90%] mx-auto">
                            <h2 className="font-semibold pb-4">Sell with Punnyadhara</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <p className="text-gray-800 text-sm md:text-base">
                                    Join the Punnyadhara bandwagon! our vending carts and machines are available to millions of people in Delhi NCR. Now sell your brand directly to millions of customers through us.
                                </p>
                                <Link href="/contact">
                                    <button className="bg-pink-600 text-white px-4 py-2 hover:bg-pink-700 w-max">
                                        Register with us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection