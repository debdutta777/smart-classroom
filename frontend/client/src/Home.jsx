import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import {
  Computer as ComputerIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import Navbar from "./Navbar";

export default function StudentLanding() {
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as default
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar isMobile={isMobile} darkMode={darkMode} onThemeChange={handleThemeChange} />
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Learn Better Together
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Join thousands of students who are already experiencing a smarter way to learn. Collaborate, study, and
              succeed with our comprehensive learning platform.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" size="large">
                Get Started
              </Button>
              <Button variant="outlined" size="large">
                Learn More
              </Button>
            </Stack>
          </Container>
        </Box>
        {/* Features Section */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item key={feature.title} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    {feature.icon}
                    <Typography gutterBottom variant="h5" component="h2">
                      {feature.title}
                    </Typography>
                    <Typography>{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Testimonials Section */}
        <Box sx={{ bgcolor: "background.paper", py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
              What Our Students Say
            </Typography>
            <Grid container spacing={4}>
              {testimonials.map((testimonial) => (
                <Grid item key={testimonial.name} xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="body1" paragraph>
                        "{testimonial.text}"
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        {/* Call to Action */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            py: 8,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              Join our community of learners today and transform your educational journey.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" color="secondary" size="large">
                Sign Up Now
              </Button>
            </Stack>
          </Container>
        </Box>
        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body1" align="center">
              © {new Date().getFullYear()} StudentHub. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// Data
const features = [
  {
    title: "Online Learning",
    description: "Access your courses anytime, anywhere with our comprehensive online learning platform.",
    icon: <ComputerIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />,
  },
  {
    title: "Study Groups",
    description: "Connect with fellow students and form study groups to learn together effectively.",
    icon: <GroupIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />,
  },
  {
    title: "Track Progress",
    description: "Monitor your academic progress with detailed analytics and performance tracking.",
    icon: <AssignmentIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />,
  },
];

const testimonials = [
  {
    text: "This platform has completely transformed how I study. The collaborative features are amazing!",
    name: "Sarah Johnson",
    role: "Computer Science Student",
  },
  {
    text: "The progress tracking tools helped me stay on top of my assignments and improve my grades.",
    name: "Michael Chen",
    role: "Engineering Student",
  },
  {
    text: "I love how easy it is to connect with other students and share resources.",
    name: "Emily Brown",
    role: "Business Student",
  },
];

