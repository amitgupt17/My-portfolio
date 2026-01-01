import React from 'react';
import { Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


export default function Hero() {
    return (
        <section
            id="home"
            className='min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden'
        >
            <div className='absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10'></div>

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12'>
                <div className='text-center md:w-1/2 space-y-6'>
                    <p className='font-mono text-accent text-lg'>Hi, I'm</p>
                    <h1 className='text-5xl md:text-7xl font-bold text-white tracking-tight'>
                        Amit Gupta.
                        <br />
                        <span className='text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-600 '></span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I’m a <strong className="text-white">MERN Stack Developer</strong> specializing in building exceptional digital experiences.
                        Currently, I’m focused on building scalable, full-stack web applications using
                        <span className="text-white font-semibold"> MongoDB</span>,
                        <span className="text-white font-semibold"> Express</span>,
                        <span className="text-white font-semibold"> React</span>, and
                        <span className="text-white font-semibold"> Node.js</span>.
                    </p>

                   
                    <div className="flex justify-center md:justify-start gap-4 pt-4">
                       
                        <Button
                            variant="outlined"
                            size="large"
                            href="#contact"
                            startIcon={<EmailIcon />}
                            sx={{
                                color: 'var(--color-accent)',
                                borderColor: 'var(--color-accent)',
                                '&:hover': { backgroundColor: 'rgba(34, 211, 238, 0.1)', borderColor: 'var(--color-accent)' }
                            }}
                        >
                            Contact Me
                        </Button>

                       
                        <Button
                            variant="contained"
                            size="large"
                            href="/AMITgupjobres.pdf" 
                            target="_blank"
                            startIcon={<DownloadIcon />}
                            sx={{
                                backgroundColor: 'var(--color-surface)',
                                color: 'white',
                                '&:hover': { backgroundColor: '#334155' }
                            }}
                        >
                            Resume
                        </Button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group">
                        <img
                            src="/amit.jpg"
                            alt="Amit Gupta"
                            className="
                                relative z-10
                                w-full h-full
                                rounded-full
                                object-cover object-top
                                shadow-2xl
                                grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}