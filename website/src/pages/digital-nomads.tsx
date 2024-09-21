

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DigitalNomadsTableData from '@site/src/components/TableFeatures/digital-nomads';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import RawData from '../components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Awesome Digital Nomads Destinations"
      wrapperClassName="layout"
      description="Our awesome list of digital nomad destinations around the world">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Awesome Digital Nomads Destinations
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
        Our awesome list of digital nomad destinations around the world
        </Typography>
      </Container>

      <Container>
        <DigitalNomadsTableData />
      </Container>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/join-to-our-community">
          <Button variant="contained" fullWidth={true} >
            Join to our community
          </Button>
        </Link>
      </Container>
      <RawData/>

      <Grid container padding={1} marginTop={2}>
        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          What are the best destinations for digital nomads?
          </Typography>
          <Typography marginBottom={1}>
          Are you looking for the perfect place <b>to do remote work and work from anywhere</b>, but don't know where to go? This awesome list compiles the <b>best destinations for digital nomads</b>, recommended directly by the <a href="/contributors/developers">Contributors</a> of Italia Open-Source. These destinations offer a <b>perfect mix of technological infrastructure</b> and a <b>high quality of life</b>. Among the most sought-after destinations in the world, we find <b>Bali</b>, in Indonesia, with its paradisiacal beaches and a vibrant community of digital nomads; in general, <b>Southeast Asia</b> is much loved by those who work remotely. For those who don't want to travel too far, among the <b>best countries for digital nomads in Europe</b> we find <b>Portugal</b>, <b>Spain</b> and <b>the Netherlands</b>. Want to stay in <b>Italy</b>? Then we recommend visiting <b>Milan</b> and <b>Latina</b>, two cities with completely different souls but with a dense presence of coworking spaces in the area.
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          How to choose the ideal destination for digital nomads?
          </Typography>
          <Typography marginBottom={1}>
          Choosing the ideal destination for digital nomads requires considering several key factors such as <b>internet connection quality, cost of living, time zone, climate, etc.</b> The accessibility of visas and the presence of an already established digital nomad community can also make a difference, making it easier to integrate and create new professional and personal connections. Each column of our list is dedicated to providing you with the necessary information to start <b>choosing your next digital nomad destination</b>!
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          How can I add a digital nomad destination to the list?
          </Typography>
          <Typography marginBottom={1}>
          <b>Are you a remote work enthusiast</b> around the world and have the <b>perfect destination to add to the list</b> in mind? Click on the following link to discover <a href="/contributors/digital-nomads"><b>how to contribute as a digital nomad</b></a>.
          </Typography>
        </Grid>
      </Grid>

      </main>
    </Layout>
  );
}