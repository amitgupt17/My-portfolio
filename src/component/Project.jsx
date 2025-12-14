import React from 'react';
import { projects } from '../data/projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export default function Project() {
    return (
       
        <section id="projects" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-head">
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mt-2 rounded-full mx-auto md:mx-0"></div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="
                                group 
                              bg-background /* Darker card background */
                                rounded-xl 
                                overflow-hidden 
                                border border-slate-700 
                              hover:border-accent 
                                transition-all duration-300 
                                hover:-translate-y-2 
                                shadow-lg
                            "
                        >

                            
                            <div className="relative overflow-hidden h-48">
                             
                                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition duration-300 z-10"></div>

                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                />
                            </div>

                           
                            <div className="p-6">

                             
                                <div className="flex justify-between items-center mb-4">
                                    <FolderOpenIcon className="text-accent" fontSize="large" />
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition">
                                            <GitHubIcon />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition">
                                            <LaunchIcon />
                                        </a>
                                    </div>
                                </div>

                                
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition">
                                    {project.title}
                                </h3>

                                
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                               
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-accent">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}