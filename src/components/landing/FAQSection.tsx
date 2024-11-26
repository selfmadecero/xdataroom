import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'How secure is xDataRoom?',
    answer:
      'xDataRoom employs bank-grade encryption (AES-256) for all data, with SOC2 Type II compliance. We offer multi-factor authentication, role-based access controls, and maintain detailed audit logs for all activities.',
  },
  {
    question: 'Can I customize document requests?',
    answer:
      'Yes, xDataRoom provides fully customizable document request templates. You can create, save, and reuse templates with specific requirements, deadlines, and automated reminders tailored to your workflow.',
  },
  {
    question: 'Does xDataRoom support integrations with other tools?',
    answer:
      'xDataRoom offers seamless integration with popular tools like Salesforce, DocuSign, and major cloud storage providers. Our REST API allows for custom integrations with your existing systems.',
  },
  {
    question: "What's the cost of using xDataRoom?",
    answer:
      "We offer flexible pricing plans based on your organization's needs. Our plans start from $199/month for small teams, with custom enterprise pricing available for larger organizations.",
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most clients are up and running within 48 hours. Our dedicated implementation team provides comprehensive onboarding and training to ensure a smooth transition.',
  },
];

export const FAQSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 20 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `linear-gradient(180deg, 
          ${alpha('#000', 0.98)} 0%,
          ${alpha('#000', 0.95)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.2,
          background: `
            radial-gradient(circle at 20% 20%, 
              ${alpha(theme.palette.primary.dark, 0.3)} 0%, 
              transparent 50%),
            radial-gradient(circle at 80% 80%, 
              ${alpha(theme.palette.primary.dark, 0.3)} 0%, 
              transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
      />

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
              lineHeight: { xs: 1.3, md: 1.2 },
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: { xs: 2, md: 3 },
              px: { xs: 2, sm: 0 },
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 0, sm: 2, md: 0 },
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                background: `linear-gradient(135deg, 
                  ${alpha('#fff', 0.05)} 0%, 
                  ${alpha('#fff', 0.02)} 100%)`,
                backdropFilter: 'blur(10px)',
                borderRadius: '16px !important',
                border: `1px solid ${alpha('#fff', 0.1)}`,
                mb: 2,
                '&:before': { display: 'none' },
                transition: 'all 0.3s ease-in-out',
                overflow: 'hidden',
                '&:hover': {
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.08)} 0%, 
                    ${alpha('#fff', 0.03)} 100%)`,
                },
                '&.Mui-expanded': {
                  mb: 2,
                  '& .MuiAccordionSummary-root': {
                    minHeight: { xs: 56, md: 64 },
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                }
                sx={{
                  px: { xs: 2.5, sm: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  minHeight: { xs: 56, md: 64 },
                  '& .MuiAccordionSummary-content': {
                    my: { xs: 1, md: 1.5 },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: 'white',
                    pr: 2,
                    lineHeight: { xs: 1.4, md: 1.5 },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: { xs: 2.5, sm: 3, md: 4 },
                  pb: { xs: 2.5, md: 3 },
                  pt: { xs: 0, md: 0.5 },
                }}
              >
                <Typography
                  sx={{
                    color: 'grey.400',
                    lineHeight: { xs: 1.6, md: 1.7 },
                    fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
