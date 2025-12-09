import NightlifeImg from '../assets/Nightlife.webp';
import Page from '../components/Page';

const venues = [
    {
        id: 1,
        name: 'The Velvet Lounge',
        description: 'Experience sophisticated cocktails and live jazz in our elegant lounge setting.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Starlight Bar',
        description: 'Dance to curated DJ sets under dazzling lights in our vibrant nightclub.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'The Oasis Club',
        description: 'Premium cocktails and spectacular views create an unforgettable evening.',
        image: '/favicon.svg',
    },
];

function NightlifePage() {
    return (
        <Page pageTitle={'Nightlife'} 
            subtitle={'Vibrant Entertainment'}
            heroImage={<img src={NightlifeImg} alt={'Nightlife Experience'} />}
            cardSectionTitle={'Our Venues'}
            items={venues}
            description={'Immerse yourself in our world-class nightlife. From elegant lounges to energetic clubs, we offer unforgettable evenings with premium drinks and exceptional entertainment.'} />
    );
}

export default NightlifePage;