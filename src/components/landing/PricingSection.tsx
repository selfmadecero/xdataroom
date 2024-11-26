import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const pricingPlans = [
  {
    title: 'Starter',
    price: '$490',
    period: '/month',
    features: [
      'Up to 5 portfolio companies',
      'Basic document request templates',
      'Real-time submission dashboard',
      'Basic security & encryption',
      'Email support',
      '50GB storage',
    ],
    buttonText: 'Start Free Trial',
    isPopular: false,
  },
  {
    title: 'Professional',
    price: '$990',
    period: '/month',
    features: [
      'Up to 20 portfolio companies',
      'Advanced document automation',
      'Custom template creation',
      'Automated reminders',
      'Real-time collaboration tools',
      'Advanced security & access control',
      'Priority support',
      '200GB storage',
    ],
    buttonText: '14-Day Free Trial',
    isPopular: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited portfolio companies',
      'AI-powered data analytics',
      'Custom workflow setup',
      'Dedicated API access',
      'SSO integration',
      'Dedicated account manager',
      '24/7 premium support',
      'Unlimited storage',
    ],
    buttonText: 'Contact Sales',
    isPopular: false,
  },
];

export const PricingSection = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="pricing"
      sx={{
        position: 'relative',
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background:
            'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              lineHeight: { xs: 1.3, sm: 1.4, md: 1.2 },
              fontWeight: 800,
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: { xs: 1.5, sm: 2 },
              px: { xs: 2, sm: 0 },
            }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'grey.400',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
              px: { xs: 2, sm: 4, md: 0 },
              lineHeight: { xs: 1.5, md: 1.6 },
            }}
          >
            Choose the perfect plan for your team's needs
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {pricingPlans.map((plan) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={plan.title}
              sx={{
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  background: plan.isPopular
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: plan.isPopular
                    ? 'primary.main'
                    : 'rgba(255, 255, 255, 0.08)',
                  borderRadius: { xs: 3, sm: 4 },
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  mx: { xs: 2, sm: 0 },
                  '&:hover': {
                    transform: { xs: 'none', sm: 'translateY(-8px)' },
                    boxShadow: plan.isPopular
                      ? `0 20px 40px -15px ${alpha(
                          theme.palette.primary.main,
                          0.3
                        )}`
                      : '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
                    borderColor: plan.isPopular
                      ? alpha(theme.palette.primary.main, 0.8)
                      : 'rgba(255, 255, 255, 0.15)',
                    '& .pricing-glow': {
                      opacity: 0.8,
                    },
                  },
                }}
              >
                <Box
                  className="pricing-glow"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: plan.isPopular
                      ? `radial-gradient(circle at 50% 0%, ${alpha(
                          theme.palette.primary.main,
                          0.15
                        )}, transparent 70%)`
                      : 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08), transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                />

                {plan.isPopular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: { xs: 12, sm: 20 },
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      color: 'white',
                      px: { xs: 2, sm: 3 },
                      py: 1,
                      borderRadius: '20px',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      fontWeight: 600,
                      boxShadow: `0 4px 15px -3px ${alpha(
                        theme.palette.primary.main,
                        0.5
                      )}`,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    Most Popular
                  </Box>
                )}

                <CardContent
                  sx={{ p: { xs: 2.5, sm: 3, md: 4 }, position: 'relative' }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    }}
                  >
                    {plan.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      mb: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: 'white',
                        fontWeight: 800,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'grey.400',
                        ml: 1,
                        fontSize: { xs: '0.875rem', sm: '1.1rem' },
                      }}
                    >
                      {plan.period}
                    </Typography>
                  </Box>
                  <List sx={{ mb: { xs: 3, sm: 4 } }}>
                    {plan.features.map((feature) => (
                      <ListItem
                        key={feature}
                        sx={{
                          px: 0,
                          py: { xs: 0.75, sm: 1 },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: { xs: 32, sm: 36 } }}>
                          <CheckCircleIcon
                            sx={{
                              color: plan.isPopular
                                ? theme.palette.primary.main
                                : alpha('#fff', 0.5),
                              fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            '& .MuiListItemText-primary': {
                              color: 'grey.300',
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                              lineHeight: { xs: 1.4, sm: 1.5 },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant={plan.isPopular ? 'contained' : 'outlined'}
                    fullWidth
                    sx={{
                      py: { xs: 1.25, sm: 1.5 },
                      borderRadius: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      fontWeight: 600,
                      backdropFilter: 'blur(10px)',
                      ...(plan.isPopular
                        ? {
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                            boxShadow: `0 8px 25px -5px ${alpha(
                              theme.palette.primary.main,
                              0.5
                            )}`,
                            '&:hover': {
                              transform: { xs: 'none', sm: 'translateY(-2px)' },
                              boxShadow: `0 12px 30px -5px ${alpha(
                                theme.palette.primary.main,
                                0.6
                              )}`,
                            },
                          }
                        : {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                              borderColor: 'rgba(255, 255, 255, 0.4)',
                              background: 'rgba(255, 255, 255, 0.05)',
                            },
                          }),
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
