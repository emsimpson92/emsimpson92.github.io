import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material'
import { useTheme as useOasisTheme } from '../hooks/useTheme'

function ActivityCard({ title, description, link, children }) {
  const oasisTheme = useOasisTheme()

  return (
    <Card
      sx={{
        backgroundColor: oasisTheme.colors.header,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      {children ? (
        <CardMedia component="div">{children}</CardMedia>
      ) : (
        <CardMedia
          component="img"
          height="200"
          image="/vite.svg"
          alt={title}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5"
          sx={{
            color: oasisTheme.colors.primary,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: oasisTheme.colors.text,
            marginBottom: oasisTheme.spacing.md,
          }}
        >
          {description}
        </Typography>
        <Link
          href={link}
          sx={{
            color: oasisTheme.colors.accent,
            textDecoration: 'none',
            fontWeight: 'bold',
            borderBottom: `2px solid ${oasisTheme.colors.accent}`,
            paddingBottom: '2px',
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          Learn More →
        </Link>
      </CardContent>
    </Card>
  )
}

export default ActivityCard
