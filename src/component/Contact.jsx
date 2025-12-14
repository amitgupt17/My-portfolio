import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(""); 

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

       
        const SERVICE_ID = import.meta.env.VITE_API_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_API_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setLoading(false);
                setStatus("success");
                e.target.reset(); 
                setTimeout(() => setStatus(""), 5000); 
            }, (error) => {
                setLoading(false);
                setStatus("error");
                console.error("FAILED...", error.text);
            });
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

              
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-head">
                        Get In <span className="text-accent">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mt-2 rounded-full mx-auto"></div>
                    <p className="text-slate-400 mt-4 max-w-xl mx-auto">
                        I am currently looking for full-time opportunities as a MERN Stack Developer.
                        Whether you have a question or just want to say hi, feel free to drop a message!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                  
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-accent">
                                    <EmailIcon />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Email</h4>
                                    <p className="text-slate-400 text-sm">amitgupt1719@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-accent">
                                    <LocationOnIcon />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Location</h4>
                                    <p className="text-slate-400 text-sm">India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <form 
                        ref={form} 
                        onSubmit={sendEmail} 
                        className="space-y-6 bg-surface p-8 rounded-2xl border border-slate-700 shadow-lg"
                    >

                        <div className="grid md:grid-cols-2 gap-6">
                           
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Name</label>
                                <input
                                    type="text"
                                    name='user_name'
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-slate-600 text-white focus:outline-none focus:border-accent transition"
                                />
                            </div>

                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="john@example.com"
                                    
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-slate-600 text-white focus:outline-none focus:border-accent transition"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                required
                                placeholder="Hi Amit, I'd like to discuss..."
                                className="w-full px-4 py-3 rounded-lg bg-background border border-slate-600 text-white focus:outline-none focus:border-accent transition resize-none"
                            ></textarea>
                        </div>

                      
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-6 font-bold rounded-lg transition transform flex items-center justify-center gap-2
                                ${loading ? 'bg-slate-600 cursor-not-allowed text-slate-300' : 'bg-accent text-slate-900 hover:bg-cyan-400 hover:-translate-y-1'}
                            `}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            {!loading && <SendIcon fontSize="small" />}
                        </button>

                       
                        {status === "success" && (
                            <p className="text-green-400 text-center text-sm mt-2">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-center text-sm mt-2">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}