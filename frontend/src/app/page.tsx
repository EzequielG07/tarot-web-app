import Hero from '@/components/Hero';
import EggBook from '@/components/EggBook';
import { InquiriesContainer } from '@/components/sections/InquiriesContainer';
import { ServicesContainer } from '@/components/sections/ServicesContainer';
import { BlogContainer } from '@/components/sections/BlogContainer';
import { AboutMeContainer } from '@/components/sections/AboutMeContainer';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { FrecuenciaRegister } from '@/components/sections/FrecuenciaRegister';
import { EnergyServices } from '@/components/sections/EnergyServices';
import { ReikiServices } from '@/components/sections/ReikiServices';
import { MagicServices } from '@/components/sections/MagicServices';
import { GoogleReviewsCarousel } from '@/components/sections/GoogleReviewsCarousel';

export default function Home() {
    return (
        <div className="min-h-screen text-slate-100 font-sans">
            <Hero />
            <EggBook />
            <ServicesContainer />
            <InquiriesContainer />
            <BlogContainer />
            <EnergyServices />
            <ReikiServices />
            <MagicServices />
            <AboutMeContainer />
            <GoogleReviewsCarousel />
            <ContactFormSection />
            <FrecuenciaRegister />
        </div>
    );
}
