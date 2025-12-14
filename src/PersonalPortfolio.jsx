import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";


export default function PersonalPortfolio() {


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow pt-16">
                <Hero/>

                <About/>
                <Project/>

                <Contact/>
            </main>

            <Footer />
        </div>
    );
};