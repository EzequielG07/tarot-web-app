import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Services from '@/components/Services';
import EggBook from '@/components/EggBook';
import Contact from '@/components/Contact';
import Inquiries from '@/components/Inquiries';
import Register from '@/components/Register';
import Blog from '@/components/Blog';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
            <Hero />
            <EggBook />
            <Inquiries />
            <Services />
            <Blog />
            <AboutMe />
            <Contact />
            <Register />
        </div>
    );
}
