import React from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
export default function About() {
    const skills = [
        "JavaScript (ES6+)", "MongoDB", "Express.js", "React.js", "Node.js",
        "Redux Toolkit", "Tailwind CSS", "REST APIs", "Git & GitHub",
        "Material UI"
    ];
    return (
        <section id="about" className="py-24 px-6 relative bg-background">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <div className="mb-16">
                    {/* Using the short variable names we corrected */}
                    <h2 className="text-3xl md:text-4xl font-bold text-text-head">
                        About <span className="text-accent">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mt-2 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* --- LEFT COLUMN: BIO --- */}
                    <div className="space-y-6 text-lg text-text-main leading-relaxed">
                        <p>
                            Hello! My name is <span className="text-white font-bold">Amit Gupta</span>.
                            I am a <span className="text-accent font-medium">MERN Stack Developer</span>.
                            I enjoy building robust, scalable web applications that solve real-world problems.
                        </p>
                        <p>
                            My journey started with simple HTML/CSS, but I quickly fell in love with the logic
                            of backend development and the interactivity of React. Today, I specialize in building
                            full-stack applications using <span className="text-white">MongoDB, Express, React, and Node.js</span>.
                        </p>
                        <p>
                            I believe in writing clean, maintainable code and am always eager to learn new
                            technologies to improve my craft.
                        </p>
                    </div>

                    {/* --- RIGHT COLUMN: SKILLS & HIGHLIGHTS --- */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>

                        {/* Skills Grid */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="
                                        px-4 py-2 rounded-full 
                                        bg-surface               /* Matches slate-800 */
                                        border border-slate-700 
                                      text-accent              /* Cyan text */
                                        font-medium text-sm 
                                      hover:border-accent hover:bg-accent/10 
                                        transition duration-300 cursor-default
                                    "
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Feature Cards (MERN Specific) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Card 1: Frontend */}
                            <div className="p-4 bg-surface rounded-lg border-l-4 border-accent shadow-lg">
                                <WebIcon className="text-accent mb-2" fontSize="large" />
                                <h4 className="font-bold text-white">Frontend Architecture</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                    Responsive UIs with React, Redux, and Tailwind.
                                </p>
                            </div>

                            {/* Card 2: Backend */}
                            <div className="p-4 bg-surface rounded-lg border-l-4 border-green-500 shadow-lg">
                                <StorageIcon className="text-green-500 mb-2" fontSize="large" />
                                <h4 className="font-bold text-white">Backend & DB</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                    Scalable REST APIs with Node.js & MongoDB optimization.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}