import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: 'per month',
    description: 'Perfect for early-stage venture firms',
    features: [
      'Up to 10 portfolio companies',
      'Basic document requests',
      'Real-time tracking',
      'Standard security',
      'Email support',
    ],
    isPopular: false,
  },
  {
    name: 'Professional',
    price: '$299',
    period: 'per month',
    description: 'Ideal for growing investment firms',
    features: [
      'Up to 50 portfolio companies',
      'Advanced document templates',
      'Analytics dashboard',
      'Enhanced security',
      'Priority support',
      'API access',
      'Custom integrations',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large investment firms',
    features: [
      'Unlimited portfolio companies',
      'Custom workflow automation',
      'Advanced analytics & reporting',
      'Enterprise-grade security',
      'Dedicated support team',
      'Full API access',
      'Custom development',
      'SLA guarantee',
    ],
    isPopular: false,
  },
];

export const PricingSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 12, md: 16, lg: 20 },
        background: `linear-gradient(180deg, 
          ${alpha(theme.palette.primary.dark, 0.95)} 0%,
          ${alpha('#000', 0.97)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
            }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            sx={{
              color: '#9E9E9E',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Choose the perfect plan for your investment firm
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.name}>
              <Card
                sx={{
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', plan.isPopular ? 0.1 : 0.05)} 0%, 
                    ${alpha('#fff', plan.isPopular ? 0.05 : 0.02)} 100%)`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: `1px solid ${alpha(
                    '#fff',
                    plan.isPopular ? 0.15 : 0.1
                  )}`,
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-out',
                  transform: plan.isPopular ? 'scale(1.05)' : 'none',
                  '&:hover': {
                    transform: plan.isPopular ? 'scale(1.05)' : 'scale(1.02)',
                    background: `linear-gradient(135deg, 
                      ${alpha('#fff', plan.isPopular ? 0.12 : 0.07)} 0%, 
                      ${alpha('#fff', plan.isPopular ? 0.07 : 0.04)} 100%)`,
                  },
                }}
              >
                {plan.isPopular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: -35,
                      transform: 'rotate(45deg)',
                      background: theme.palette.primary.main,
                      color: 'white',
                      px: 4,
                      py: 0.5,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  >
                    Popular
                  </Box>
                )}
                <Typography
                  variant="h5"
                  sx={{ color: 'white', fontWeight: 700, mb: 1 }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    mb: 1,
                    display: 'flex',
                    alignItems: 'baseline',
                  }}
                >
                  {plan.price}
                  <Typography
                    component="span"
                    sx={{ color: '#9E9E9E', ml: 1, fontSize: '1rem' }}
                  >
                    /{plan.period}
                  </Typography>
                </Typography>
                <Typography sx={{ color: '#9E9E9E', mb: 4, minHeight: '48px' }}>
                  {plan.description}
                </Typography>
                <Button
                  variant={plan.isPopular ? 'contained' : 'outlined'}
                  fullWidth
                  sx={{
                    py: 1.5,
                    mb: 4,
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    ...(plan.isPopular && {
                      background: `linear-gradient(135deg, 
                        ${theme.palette.primary.main} 0%, 
                        ${theme.palette.primary.dark} 100%)`,
                    }),
                  }}
                >
                  {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </Button>
                <List disablePadding>
                  {plan.features.map((feature) => (
                    <ListItem key={feature} disablePadding sx={{ mb: 2 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircleIcon
                          sx={{
                            color: plan.isPopular
                              ? theme.palette.primary.main
                              : 'white',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        sx={{ color: '#E0E0E0' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
