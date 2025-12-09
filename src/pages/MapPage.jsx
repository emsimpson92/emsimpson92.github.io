import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import Map from '../assets/Map.webp';
import '../styles/fonts.css';

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.background,
            minHeight: '100vh',
            paddingBottom: theme.spacing.xxl,
        },
        pageTitle: {
            fontSize: '3.5rem',
            color: theme.colors.primary,
            fontWeight: 'bold',
            marginBottom: theme.spacing.md,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textAlign: 'center',
        },
        map: {
            width: '95%',
            display: 'flex',
            margin: '0 auto',
            borderRadius: '24px',
            border: `5px solid ${theme.colors.accent}`,
            boxShadow: theme.shadows.lg,
        }
    };
};

function MapPage() {
    const theme = useTheme();
    const styles = Styles(theme);    
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Typography variant="h1" style={styles.pageTitle}>
                    {'Explore the Oasis Map'}
                </Typography>
                <Box>
                    <img src={Map} alt="Map" style={styles.map} />
                </Box>
            </Box>
        </Box>
    );
}

export default MapPage;