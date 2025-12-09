import SpaImg from '../assets/Springs.webp';
import Page from '../components/Page';

const activities = [
    {
        id: 1,
        name: 'Massage Therapy',
        description: 'Relax and rejuvenate with our professional massage treatments designed to relieve tension and promote wellness.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Facial Treatments',
        description: 'Experience luxurious facials tailored to your skin type for a radiant, refreshed complexion.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Thermal Baths',
        description: 'Soak in our heated mineral-rich pools to unwind and restore your body and mind.',
        image: '/favicon.svg',
    },
];

function SpaWellnessPage() {
    return (
        <Page pageTitle={'Spa & Wellness'} 
            subtitle={'Wellness Sanctuary'} 
            heroImage={<img src={SpaImg} alt="Spa & Wellness Experience" />}
            description={'Escape to our serene spa and wellness retreat. Discover treatments and therapies designed to harmonize your body, mind, and spirit.'}
            cardSectionTitle={'Our Services'}
            items={activities} />
    );
}

export default SpaWellnessPage;