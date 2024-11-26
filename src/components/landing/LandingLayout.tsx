import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Header } from '../layout/Header';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { HowItWorksSection } from './HowItWorksSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { CTASection } from './CTASection';
import { Footer } from '../layout/Footer';

export const LandingLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        '& > *': {
          margin: 0,
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </Box>
  );
};
