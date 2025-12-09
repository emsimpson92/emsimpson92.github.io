import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/fonts.css';

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.background,
            minHeight: '100vh',
            margin: 'auto',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
        oasisLogo: {
            width: '200px',
            height: '200px',
            userSelect: 'none',
        },
        goHome: {
            fontSize: '1.5rem',
            color: theme.colors.primary,
            fontWeight: 'bold',
            marginBottom: theme.spacing.md,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textAlign: 'center',
        }
    };
};

const descriptions = [
    "Looking for Mankrik's wife?",
    "Are you lost?",
    "This page is as empty as the Barrens.",
    "I knew I shouldn't have followed that dwarf.",
    "You wake up hungover, Your pockets picked clean.",
];

function NotFound() {
    const theme = useTheme();
    const styles = Styles(theme);
    const [message, setMessage] = useState('This page doesn\'t exist.');
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setMessage(descriptions[Math.floor(Math.random() * descriptions.length)]);
    }, []);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <img src='/favicon.svg' alt='Oasis Logo' style={styles.oasisLogo} />
                <Typography variant="h1" style={styles.pageTitle}>
                    {message}
                </Typography>
                <RouterLink to="/" style={styles.goHome}>
                    {'Go Home'}
                </RouterLink>
            </Box>
        </Box>
    );
}

export default NotFound;