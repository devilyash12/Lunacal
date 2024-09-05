import React, { useState, useRef } from 'react';
import { PlusCircle, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { Grid } from 'lucide-react';
import img from "./img.png";

const ProfileDashboard = () => {
    const [activeTab, setActiveTab] = useState('About me');
    const [images, setImages] = useState([img, img, img]);
    const [visibleIndex, setVisibleIndex] = useState(0); // To track the start of the visible images
    const fileInputRef = useRef(null);

    const tabs = ['About me', 'Experiences', 'Recommended'];

    const handleAddImage = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages((prevImages) => [...prevImages, e.target.result]); // Add the new image at the end
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNextImages = () => {
        if (visibleIndex + 3 < images.length) {
            setVisibleIndex(visibleIndex + 1); // Shift the view to the next set of images
        }
    };

    const handlePreviousImages = () => {
        if (visibleIndex > 0) {
            setVisibleIndex(visibleIndex - 1); // Shift the view to the previous set of images
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'About me':
                return (
                    <>
                        <p className="text-xl font-light font-mono">
                            Hello! I'm Yash, your sales rep here from Salesforce. I've been
                            working at this awesome company for 3 years now.
                        </p>
                        <p className="text-xl font-light mt-4 font-mono">
                            I was born and raised in India and have been living in Santa
                            Carla for the past 10 years with my wife Tiffany and my 4-year-old twin
                            daughters, Emma and Ella. Both of them are just starting school,
                            so my calendar is usually blocked between 9-10 AM. This is a...
                        </p>
                    </>
                );
            case 'Experiences':
                return (
                    <>
                        <p className="text-xl font-light leading-relaxed font-mono">
                            My career in sales has been an exciting journey. Here are some highlights:
                        </p>
                        <ul className="list-disc list-inside text-xl font-light leading-relaxed mt-4 font-mono">
                            <li>5+ years of experience in B2B sales</li>
                            <li>Consistently exceeded quarterly targets by 15-20%</li>
                            <li>Specialized in CRM software solutions</li>
                            <li>Developed and implemented successful sales strategies</li>
                            <li>Mentored junior sales representatives</li>
                        </ul>
                    </>
                );
            case 'Recommended':
                return (
                    <>
                        <p className="text-xl font-light leading-relaxed font-mono">
                            Based on your interests, here are some recommended resources:
                        </p>
                        <ul className="list-disc list-inside text-xl font-light leading-relaxed mt-4 font-mono">
                            <li>Salesforce CRM Best Practices Guide</li>
                            <li>Webinar: Maximizing Sales Efficiency with AI</li>
                            <li>E-book: Building Strong Client Relationships</li>
                            <li>Podcast: The Future of B2B Sales</li>
                            <li>Workshop: Advanced Negotiation Techniques</li>
                        </ul>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-b from-zinc-700 to-zinc-800">
            {/* Empty left half (hidden on mobile) */}
            <div className="w-1/2 hidden lg:block p-6">
                <div className="bg-zinc-700 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                    <div className="min-h-full bg-zinc-600 rounded-3xl flex-1">
                        {/* Empty rectangle with dynamic height */}
                    </div>
                </div>
            </div>

            {/* Right half with widgets */}
            <div className="w-full lg:w-1/2 p-6 overflow-y-auto">
                <div className="max-w-2xl mx-auto space-y-6">
                    {/* Profile widget */}
                    <div className="bg-zinc-700 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
                        <div className="flex items-center justify-between p-2 bg-black-900">
                            <button className="p-2 text-gray-400 hover:text-white transition-colors">
                                <HelpCircle size={24} />
                            </button>
                            <div className="flex flex-1 p-1 bg-black rounded-full">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        className={`flex-1 py-3 px-5 rounded-full text-lg font-semibold transition-colors ${activeTab === tab ? 'bg-gray-900 text-white' : 'text-gray-400'
                                            }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                        </div>
                        <div className="p-6 text-gray-300">
                            {renderTabContent()}
                        </div>
                    </div>
                    <div
                        className="border-t-4 border-zinc-400 rounded-full mx-4 my-6"
                        style={{
                            width: 'calc(100% - 2rem)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Add or adjust shadow here
                        }}
                    ></div>



                    {/* Gallery widget */}
                    <div className="bg-zinc-700 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
                        <div className="flex justify-between items-center p-6">
                            <div className="flex items-center space-x-4">
                                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                                    <HelpCircle size={24} />
                                </button>
                                <h2 className="text-2xl font-semibold text-white">Gallery</h2>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    className="bg-zinc-800 hover:bg-zinc-700 py-2 px-4 rounded-full text-white text-sm font-medium flex items-center shadow-md hover:shadow-lg transition-shadow duration-300"
                                    onClick={handleAddImage}
                                >
                                    <PlusCircle size={16} className="mr-2 font-mono" />
                                    Add image
                                </button>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <button
                                    className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full text-white transition-colors"
                                    onClick={handlePreviousImages}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full text-white transition-colors"
                                    onClick={handleNextImages}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-6 pt-0">
                            {images.slice(visibleIndex, visibleIndex + 3).map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-auto rounded-xl"
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className="border-t-4 border-zinc-400 rounded-full mx-4 my-6"
                        style={{
                            width: 'calc(100% - 2rem)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Add or adjust shadow here
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;

