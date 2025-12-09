import AccommodationsImg from '../assets/Accommodations.webp';
import Page from '../components/Page';

const rooms = [
    {
        id: 1,
        name: 'Deluxe Suite',
        description: 'Spacious suites with panoramic views, premium bedding, and modern amenities.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Ocean View Villa',
        description: 'Exclusive villas with private balconies overlooking the ocean and direct beach access.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Presidential Penthouse',
        description: 'Luxury penthouse suites with exceptional service and unparalleled comfort and elegance.',
        image: '/favicon.svg',
    },
];

function AccommodationsPage() {
    return (
        <Page pageTitle={'Accommodations'} 
            heroImage={<img src={AccommodationsImg} alt="Accommodations" />}
            subtitle={'Your Sanctuary Awaits'} 
            description={'Discover our world-class accommodations designed for comfort and luxury. Each room offers breathtaking views and exceptional amenities for your perfect stay.'} 
            cardSectionTitle={'Room Types'} 
            items={rooms} />        
    );
}

export default AccommodationsPage;