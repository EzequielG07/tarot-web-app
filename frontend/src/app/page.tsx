import Hero from '@/components/Hero';
import EggBook from '@/components/EggBook';
import { InquiriesContainer } from '@/components/sections/InquiriesContainer';
import { ServicesContainer } from '@/components/sections/ServicesContainer';
import { BlogContainer } from '@/components/sections/BlogContainer';
import { MoreServicesContainer } from '@/components/sections/MoreServicesContainer';
import { AboutMeContainer } from '@/components/sections/AboutMeContainer';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { FrecuenciaRegister } from '@/components/sections/FrecuenciaRegister';

export default function Home() {
    return (
        <div className="min-h-screen text-slate-100 font-sans">
            <Hero />
            <EggBook />
            <ServicesContainer />
            <InquiriesContainer />
            <BlogContainer />
            <MoreServicesContainer />
            <AboutMeContainer />
            <ContactFormSection />
            <FrecuenciaRegister />
        </div>
    );
}
