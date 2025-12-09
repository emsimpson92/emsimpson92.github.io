import EventsImg from '../assets/Events.webp';
import Page from '../components/Page';

const venues = [
    {
        id: 1,
        name: 'Grand Ballroom',
        description: 'Host elegant weddings and galas in our spectacular grand ballroom with panoramic views.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Terrace Garden',
        description: 'Perfect for intimate ceremonies and outdoor celebrations surrounded by lush gardens.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Conference Center',
        description: 'State-of-the-art facilities for corporate events, conferences, and business meetings.',
        image: '/favicon.svg',
    },
];

function EventsPage() {
    return (
        <Page pageTitle={'Events'}
            subtitle={'Unforgettable Celebrations'}
            heroImage={<img src={EventsImg} alt="Events Experience" />}
            description={'Host your special occasions in our stunning venues, designed to make every event memorable.'}
            cardSectionTitle={'Event Venues'}
            items={venues}/>
    );
}

export default EventsPage;