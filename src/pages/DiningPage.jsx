import DiningImg from '../assets/Dining.webp';
import Page from '../components/Page';

const restaurants = [
    {
        id: 1,
        name: 'Coming Soon',
        description: 'Restaurant options coming soon!',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Coming Soon',
        description: 'Restaurant options coming soon!',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Coming Soon',
        description: 'Restaurant options coming soon!',
        image: '/favicon.svg',
    },
];

function DiningPage() {
    return (
        <Page pageTitle={'Dining'}
            subtitle={'Culinary Excellence'}
            heroImage={<img src={DiningImg} alt="Dining Experience" />}
            cardSectionTitle={'Restaurants'}
            items={restaurants}
            description={'Indulge in a variety of exquisite dining options. Savor gourmet dishes made from the freshest ingredients, with flavors that will delight your palate.'} />
    );
}

export default DiningPage;