import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import EggBook from '@/components/EggBook';
import Contact from '@/components/Contact';
import Register from '@/components/Register';
import { InquiriesContainer } from '@/components/sections/InquiriesContainer';
import { ServicesContainer } from '@/components/sections/ServicesContainer';
import { BlogContainer } from '@/components/sections/BlogContainer';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
            <Hero />
            <EggBook />
            <InquiriesContainer />
            <ServicesContainer />
            <BlogContainer />
            <AboutMe />
            <Contact />
            <Register />
        </div>
    );
}
