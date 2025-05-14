import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <section>
                <footer className="w-full sm:h-72 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/Wave1.svg')" }}>
                    <div className="text-white pt-10 pb-6 px-4 md:px-6 z-10">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-40">
                            {/* Logo and About */}
                            <div className="mt-10 text-center md:text-left">
                                <h2 className="text-2xl font-bold mb-3 flex justify-center md:justify-start">
                                    <Image height={100} width={155} src="/images/PDLogo2.png" alt="Logo" />
                                </h2>
                                <p className="text-sm mb-4">
                                    Punnyadhara is India&apos;s first branded packaged drinking water mass distributed directly to customers at cost of bottle through multiple point of sale.
                                </p>
                                <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
                                    <span className="text-sm">Follow us:</span>
                                    {/* Social Icons */}
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M22 12.07C22 6.47 17.52 2 12 2S2 6.47 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
                                        </svg>
                                    </a>
                                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M4.25 3h3.65l4.85 6.58L17.3 3h3.6l-6.9 8.95 7.05 9.55h-3.7l-5.2-7.05L7.15 21H3.4l7.15-9.2L4.25 3Z" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M7.75 2h8.5C19.1 2 22 4.9 22 8.25v7.5C22 19.1 19.1 22 16.25 22h-8.5C4.9 22 2 19.1 2 16.25v-7.5C2 4.9 4.9 2 7.75 2zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5zm8.75 2.75a1 1 0 110 2 1 1 0 010-2zm-4.5 1.25a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.5a4 4 0 100 8 4 4 0 000-8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* About */}
                            <div className="mt-10 text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-3">About</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="/terms" target="_blank" className="hover:underline">Terms & Conditions</a></li>
                                    <li><a href="/privacy" target="_blank" className="hover:underline">Privacy Policy</a></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="mt-10 text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>Gurgaon, Haryana</li>
                                    <li>Call Us: +91 9818989980</li>
                                    <li>Email: contactus@punnyadhara.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Copyright */}
                <div className="p-4 text-center text-xs md:text-sm bg-white text-black">
                    Copyright &copy; {new Date().getFullYear()} Gulp2go Pvt. Ltd. All rights reserved.
                </div>
            </section>
        </>
    );
}