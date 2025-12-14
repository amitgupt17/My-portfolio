import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    return (
        <footer className="bg-surface py-8 border-t border-slate-700 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* Social Links or Name */}
                <h2 className="text-2xl font-bold text-white mb-4">Amit Gupta</h2>

                <div className="flex justify-center gap-6 mb-6">
                    <a href="https://linkedin.com/in/amit-gupta-728229280" className="text-text-main hover:text-accent transition"><LinkedInIcon/></a>
                    <a href="https://github.com/amitgupt17" className="text-text-main hover:text-accent transition"><GitHubIcon/></a>
                    <a href="https://www.instagram.com/itz.realamitgupta?igsh=MWl1dG94N3ZkMzJ1Mw==" className="text-text-main hover:text-accent transition"><InstagramIcon/></a>
                </div>

                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );

}
