import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import CountUp from 'react-countup';
import Paper from '@mui/material/Paper';

export default function App(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      wrapperClassName="layout"
      description="The first platform dedicated to Italian open-source projects">
      <main className="main">

      <CssBaseline />

      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align='center'>
          Italia Open-Source 🚀
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          The first platform dedicated to Italian open-source projects
        </Typography>

      <Grid container spacing={3} marginTop={4}>
        <Grid container xs={12}>
        <Grid xs={12} sm={3}>
          <Paper elevation={0}>
            <Typography align='center' padding={2} margin={1}>
            <b><CountUp start={1} end={95} duration={2.30} suffix='+'></CountUp></b> Projects
            </Typography>
          </Paper>
          <Link href="/opensources">
              <Button variant="contained" fullWidth={true} >
              💻 Open-Source
              </Button>
          </Link>
        </Grid>
        <Grid xs={12} sm={3}>
          <Paper elevation={0}>
            <Typography align='center' padding={2}  margin={1}>
              <b><CountUp start={1} end={30} duration={1.50} suffix='+'></CountUp></b> Destinations
            </Typography>
          </Paper>
            <Link href="/digital-nomads">
              <Button variant="contained" fullWidth={true} >
              🌍 Digital Nomads
              </Button>
            </Link>
        </Grid>
        <Grid xs={12} sm={3}>
          <Paper elevation={0}>
            <Typography align='center' padding={2} margin={1}>
            <b><CountUp start={1} end={25} duration={1.90} prefix='+'></CountUp></b> Association
          </Typography>
          </Paper>
            <Link href="/communities">
              <Button variant="contained" fullWidth={true} >
              👥 Communities
              </Button>
            </Link>
        </Grid>
        <Grid xs={12} sm={3}>
          <Paper elevation={0}>
            <Typography align='center' padding={2} margin={1}>
            <b><CountUp start={1} end={40} duration={2.15} prefix='+'></CountUp></b> Business
            </Typography>
          </Paper>
            <Link href="/companies">
              <Button variant="contained" fullWidth={true} >
              🏡 Companies
              </Button>
            </Link>
        </Grid>
        <Grid xs={12} sm={3}>
          <Paper elevation={0}>
            <Typography align='center' padding={2} margin={1}>
            <b><CountUp start={1} end={100} duration={2.00} prefix='+'></CountUp></b> Places
            </Typography>
          </Paper>
            <Link href="/coworkings" target="_blank">
              <Button variant="outlined" fullWidth={true} disabled={true}>
              📍 Coworking
              </Button>
            </Link>
        </Grid>
        </Grid>

        <Grid container xs={12} marginTop={5} >
          <Grid xs={6} textAlign={'center'}>
            <Typography variant="h5" component="h2" >
              The Project
            </Typography>
            <Typography marginBottom={1}>
              Italia Open-Source is <b>the only completely open-source platform that</b> discovers, explores, and <b>gives voice to Italian technological innovations</b> transparently and freely. Whether you have an open-source company, project, or community (or are simply looking for it), there is room for everyone on our <b><a href='/opensources'>Awesome List</a></b>!
            </Typography>
          </Grid>
          <Grid xs={6} textAlign={'center'}>
            <Typography variant="h5" component="h2" >
            Our Mission
            </Typography>
            <Typography marginBottom={1}>
              Italia Open-Source is not just a data collection platform, but <b>a project everyone can participate in to</b> discover and <b>enhance Italian open-source projects</b>. We believe that our community could be the starting point for creating an Italian tech system where <b>knowledge exchange, innovation, and collaboration</b> are the standard, not the exception!
            </Typography>
          </Grid>
        </Grid>


        <Grid container xs={12}>
          <Grid xs={6}  textAlign={'center'}>
            <Link href="/contributors/developers" target="_blank">
              <Button variant="outlined" fullWidth={false}>
              Add your project
              </Button>
            </Link>
          </Grid>
          <Grid xs={6} textAlign={'center'}>
            <Link href="/contributors/developers" target="_blank">
              <Button variant="outlined" fullWidth={false}>
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