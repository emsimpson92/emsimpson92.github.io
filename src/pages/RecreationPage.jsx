import RecreationImg from '../assets/Recreation.webp';
import Page from '../components/Page';

const activities = [
    {
        id: 1,
        name: 'Waterfall Hikes',
        description: 'Explore stunning natural waterfalls on scenic hiking trails through pristine landscapes.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Beach Activities',
        description: 'Enjoy swimming, surfing, and water sports on our beautiful sandy beaches.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Adventure Sports',
        description: 'Experience thrilling activities including zip-lining, rock climbing, and kayaking.',
        image: '/favicon.svg',
    },
];

function RecreationPage() {

    return (
        <Page pageTitle={'Recreation'} 
            subtitle={'Outdoor Adventures Await'}
            heroImage={<img src={RecreationImg} alt="Recreation Experience" />}
            description={'Discover the natural beauty and thrilling activities our paradise has to offer. From serene hikes to adrenaline-pumping sports, there\'s something for everyone.'}
            cardSectionTitle={'Our Activities'}
            items={activities} />
    );
}

export default RecreationPage;