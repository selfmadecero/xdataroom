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
  useMediaQuery,
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 20 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `linear-gradient(180deg, 
          ${alpha(theme.palette.primary.dark, 0.95)} 0%,
          ${alpha('#000', 0.97)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 6, md: 8, lg: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '1.75rem',
                sm: '2.25rem',
                md: '3rem',
                lg: '3.5rem',
              },
              fontWeight: 800,
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              lineHeight: { xs: 1.3, md: 1.2 },
            }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            sx={{
              color: '#9E9E9E',
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              lineHeight: { xs: 1.5, md: 1.6 },
            }}
          >
            Choose the perfect plan for your investment firm
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4 }}
          alignItems="center"
          sx={{
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.name}>
              <Card
                sx={{
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', plan.isPopular ? 0.1 : 0.05)} 0%, 
                    ${alpha('#fff', plan.isPopular ? 0.05 : 0.02)} 100%)`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: { xs: '20px', md: '24px' },
                  border: `1px solid ${alpha(
                    '#fff',
                    plan.isPopular ? 0.15 : 0.1
                  )}`,
                  p: { xs: 3, sm: 3.5, md: 4 },
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-out',
                  transform: {
                    xs: 'none',
                    md: plan.isPopular ? 'scale(1.05)' : 'none',
                  },
                  '&:hover': {
                    transform: {
                      xs: 'scale(1.02)',
                      md: plan.isPopular ? 'scale(1.05)' : 'scale(1.02)',
                    },
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
                      top: { xs: 16, md: 20 },
                      right: { xs: -30, md: -35 },
                      transform: 'rotate(45deg)',
                      background: theme.palette.primary.main,
                      color: 'white',
                      px: { xs: 3, md: 4 },
                      py: 0.5,
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                      fontWeight: 500,
                    }}
                  >
                    Popular
                  </Box>
                )}
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
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
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  }}
                >
                  {plan.price}
                  <Typography
                    component="span"
                    sx={{
                      color: '#9E9E9E',
                      ml: 1,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    /{plan.period}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    color: '#9E9E9E',
                    mb: 4,
                    minHeight: { xs: 'auto', md: '48px' },
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    lineHeight: { xs: 1.5, md: 1.6 },
                  }}
                >
                  {plan.description}
                </Typography>
                <Button
                  variant={plan.isPopular ? 'contained' : 'outlined'}
                  fullWidth
                  sx={{
                    py: { xs: 1.25, md: 1.5 },
                    mb: { xs: 3, md: 4 },
                    borderRadius: { xs: '10px', md: '12px' },
                    fontSize: { xs: '1rem', md: '1.1rem' },
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
                    <ListItem
                      key={feature}
                      disablePadding
                      sx={{
                        mb: { xs: 1.5, md: 2 },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: { xs: 35, md: 40 } }}>
                        <CheckCircleIcon
                          sx={{
                            color: plan.isPopular
                              ? theme.palette.primary.main
                              : 'white',
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        sx={{
                          color: '#E0E0E0',
                          '& .MuiListItemText-primary': {
                            fontSize: { xs: '0.875rem', md: '1rem' },
                            lineHeight: { xs: 1.5, md: 1.6 },
                          },
                        }}
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
