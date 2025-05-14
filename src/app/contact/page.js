'use client';

import { useState } from "react";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function contact() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        company_name: '',
        designation: '',
        message: '',
        check: false,
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.check) {
            setSuccess(false);
            setError(true);
            return;
        }

        const fields = ["first_name", "last_name", "email", "contact_number", "company_name", "designation", "message"];
        const isFormValid = fields.every((field) => formData[field].trim() !== "");

        if (!isFormValid) {
            setSuccess(false);
            setError(true);
            return;
        }

        try {
            const response = await fetch('https://pdapi.punnyadhara.com/api/contacts-us/v1/', {
                method: 'POST',
                headers: {
                    'app_name': 'PunnyaDhara',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);

            setSuccess(true);
            setError(false);

            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                contact_number: '',
                company_name: '',
                designation: '',
                message: '',
                check: false,
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSuccess(false);
            setError(true);
        }
    };

    return (
        <>
            <Header />
            <section className="py-28">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Form Section */}
                        <div className="md:w-1/2">
                            <div className="mb-8">
                                <p className="text-pink-600 font-bold">CONTACT US FROM HERE</p>
                                <h2 className="text-3xl font-bold mb-2">Write Us</h2>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        maxLength={10}
                                        required
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        maxLength={10}
                                        required
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        maxLength={30}
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                    <input
                                        type="tel"
                                        name="contact_number"
                                        placeholder="Contact Number"
                                        maxLength={15}
                                        required
                                        value={formData.contact_number}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                    <input
                                        type="text"
                                        name="company_name"
                                        placeholder="Company Name"
                                        maxLength={40}
                                        required
                                        value={formData.company_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                    <input
                                        type="text"
                                        name="designation"
                                        placeholder="Designation"
                                        maxLength={20}
                                        required
                                        value={formData.designation}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Write your message ..."
                                    maxLength={300}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="check"
                                        name="check"
                                        checked={formData.check}
                                        onChange={handleChange}
                                        className="h-4 w-4"
                                        required
                                    />
                                    <label htmlFor="check" className="text-gray-600 text-sm">
                                        You accept the terms of service and the privacy policy
                                    </label>
                                </div>

                                <button type="submit" className="bg-pink-600 px-4 py-2 text-white rounded cursor-pointer">
                                    Send Message
                                </button>

                                {success && (
                                    <div className="mt-4 p-2 text-green-600 bg-green-100 rounded">
                                        Congratulations. Your message has been sent successfully.
                                    </div>
                                )}
                                {error && (
                                    <div className="mt-4 p-2 text-red-600 bg-red-100 rounded">
                                        Error, please retry. Your message has not been sent.
                                    </div>
                                )}
                            </form>
                        </div>
                        {/* Map Section */}
                        <div className="md:w-1/2 flex items-center justify-center">
                            <div className="w-full h-[500px] rounded-2xl p-2 shadow-lg border border-white">
                                <div className="w-full h-full rounded-xl overflow-hidden">
                                    <iframe
                                        src="https://maps.google.com/maps?width=400&amp;height=500&amp;hl=en&amp;q=punnyadhara&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        width="100%"
                                        height="100%"
                                        className="border-0 w-full h-full rounded-xl"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}