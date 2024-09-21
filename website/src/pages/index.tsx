import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import HomepageItems from '../components/HomepageItems';

export default function App(): JSX.Element {
  const awseomeLists = [
    {
      name: '💻 Open-Source',
      label: 'Projects',
      count: 95,
      link: '/opensources',
    },
    {
      name: '👥 Communities',
      label: 'Groups',
      count: 28,
      link: '/communities',
    },
    {
      name: '🌍 Digital Nomads',
      label: 'Locations',
      count: 30,
      link: '/digital-nomads',
    },
    {
      name: '🏡 Startups',
      label: 'Businesses',
      count: 0,
      link: '/startups',
      isNew: true,
    }
  ]
  return (
    <Layout
      title={`Home`}
      wrapperClassName="layout"
      description="The first platform dedicated to Italian open-source world">
      <main className="main">

      <CssBaseline />

      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align='center'>
          Italia Open-Source 🚀
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          The first platform dedicated to Italian open-source world
        </Typography>

      <HomepageItems awseomeLists={awseomeLists} />

      <Grid container spacing={3} marginTop={4}>
        <Grid container xs={12} marginTop={5}>
          <Grid xs={12} sm={6} padding={2}>
            <Typography variant="h5" component="h2"  textAlign={'center'}>
              Our Vision
            </Typography>
            <Typography marginBottom={1}>
            Our vision is to create an ecosystem where sharing and collaboration are the normality. <b>We imagine a future where every project</b>, big or small, <b>is accessible to everyone and can be improved by everyone</b>. <b>We see Italy as a reference point for open-source</b>, where technology is open and accessible, and where collaboration and innovation are the order of the day.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} padding={2}>
            <Typography variant="h5" component="h2"  textAlign={'center'}>
            Our Mission
            </Typography>
            <Typography marginBottom={1}>
              Italia Open-Source is not just a data collection platform, but <b>a project everyone can participate in to</b> discover and <b>enhance Italian open-source projects</b>. We believe that our community could be the starting point for creating an Italian tech system where <b>knowledge exchange, innovation, and collaboration</b> are the standard, not the exception!
            </Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} >
          <Grid xs={12} sm={6} padding={1} smOffset={3} >
            <Link href="/join-to-our-community">
              <Button variant="contained" fullWidth={true}>
              JOIN OUR COMMUNITY
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      </Container>
      </main>
    </Layout>
  );
}