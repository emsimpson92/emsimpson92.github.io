import { useRef } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useTheme } from '../hooks/useTheme'
import ActivityCard from '../components/ActivityCard'
import '../styles/fonts.css'

const activities = [
    {
      id: 1,
      title: 'Spa & Wellness',
      description: 'Relax and rejuvenate with our world-class spa treatments',
      link: '/wellness',
    },
    {
      id: 2,
      title: 'Dining',
      description: 'Exquisite culinary experiences crafted by renowned chefs',
      link: '/dining',
    },
    {
      id: 3,
      title: 'Nightlife',
      description: 'Vibrant entertainment and dining in our elegant lounges',
      link: '/nightlife',
    },
    {
      id: 4,
      title: 'Events',
      description: 'Host your special occasions in our stunning venues',
      link: '/events',
    },
    {
      id: 5,
      title: 'Recreation',
      description: 'Enjoy pools, beaches, and outdoor adventures',
      link: '/recreation',
    },
    {
      id: 6,
      title: 'Accommodations',
      description: 'Luxurious rooms with breathtaking views',
      link: '/accommodations',
    },
];

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.background, 
            minHeight: '100vh'
        },
        welcomeHeader: {            
            fontSize: '4rem',
            color: theme.colors.accent,
            fontWeight: 'bold',
            marginBottom: theme.spacing.sm,
            fontFamily: 'Arsenica Trial Light, serif',
            textShadow: `0 0 2px ${theme.colors.background}`,
        },
        titleHeader: {
            fontSize: '8rem',
            color: theme.colors.accent,
            fontWeight: 'bold',
            marginBottom: theme.spacing.xl,
            fontFamily: 'Arsenica Trial Regular, serif',
            textShadow: `0 0 2px ${theme.colors.background}`,
        },
        exploreButton: {
            color: theme.colors.background,
            border: '1px solid ' + theme.colors.background,
            padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
            fontSize: theme.typography.fontSize.large,
            fontWeight: 'bold',
            zIndex: 2,
            textTransform: 'none',
            '&:hover': {
            backgroundColor: theme.colors.primary,
            color: theme.colors.header,
            },
        },
        splashPage: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(/src/assets/OasisHome.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            textAlign: 'center',
            padding: theme.spacing.xl,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1,
            },
        }
    }
};

function HomePage() {
  const theme = useTheme()
  const activitiesRef = useRef(null)
  const styles = Styles(theme)

  const handleExplore = () => {
    activitiesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <Box style={styles.root}>
        {/* Hero Section */}
        <Box component="section" style={styles.splashPage}>
            <Typography variant="h1" style={styles.welcomeHeader}>
                Welcome to
            </Typography>
            <Typography variant="h1" style={styles.titleHeader}>
                The Oasis
            </Typography>
            <Button variant="outlined" size="large" onClick={handleExplore} style={styles.exploreButton}>
                Explore
            </Button>
        </Box>

        {/* Activities Section */}
        <Box
          component="section"
          ref={activitiesRef}
          sx={{
            padding: theme.spacing.xxl,
            backgroundColor: theme.colors.background,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: theme.typography.fontSize.xxlarge,
              color: theme.colors.primary,
              textAlign: 'center',
              marginBottom: theme.spacing.xxl,
              fontWeight: 'bold',
              fontFamily: 'Arsenica Trial Regular, serif',
            }}
          >
            Discover Our Offerings
          </Typography>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {activities.map((activity) => (
                <Grid item xs={12} sm={6} md={4} key={activity.id}>
                  <ActivityCard
                    title={activity.title}
                    description={activity.description}
                    link={activity.link}
                  >
                    <img
                      src="/favicon.svg"
                      alt={activity.title}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                      }}
                    />
                  </ActivityCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
  )
}

export default HomePage
