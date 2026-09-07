import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Services from '@/components/Services';
import Books from '@/components/Books';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
            <Hero />
            <AboutMe />
            <Services />
            <Books />
        </div>
    );
}
