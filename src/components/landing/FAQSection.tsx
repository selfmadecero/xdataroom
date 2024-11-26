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
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 12, md: 16, lg: 20 },
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
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
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
                '&:hover': {
                  background: `linear-gradient(135deg, 
                    ${alpha('#fff', 0.08)} 0%, 
                    ${alpha('#fff', 0.03)} 100%)`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: theme.palette.primary.main,
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                }
                sx={{
                  px: 4,
                  py: 2,
                  '& .MuiAccordionSummary-content': {
                    my: 1,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: 'white',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 4, pb: 3 }}>
                <Typography
                  sx={{
                    color: 'grey.400',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.95rem', md: '1rem' },
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
