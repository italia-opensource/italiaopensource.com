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
      description="The only fully open-source platform that transparently gives voice, and discovers, and explores Italy's tech innovations.">
      <main className="main">

      <CssBaseline />

      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align='center'>
          Italia Open-Source 🚀
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          Knowledge is open to all.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          Join us in celebrating Italian tech innovations!
        </Typography>

      <Grid container spacing={3} marginTop={4}>
        <Grid xs={12} sm={3}>
          <Paper elevation={0}>
            <Typography align='center' padding={2} margin={1}>
            <b><CountUp start={1} end={95} duration={2.30} suffix='+'></CountUp></b> Progetti
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
              <b><CountUp start={1} end={30} duration={1.50} suffix='+'></CountUp></b> Destinazioni
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
            <b><CountUp start={1} end={25} duration={1.90} prefix='+'></CountUp></b> Associazioni
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
            <b><CountUp start={1} end={100} duration={2.00} prefix='+'></CountUp></b> Spazi
            </Typography>
          </Paper>
            <Link href="/coworkings">
              <Button variant="outlined" fullWidth={true} disabled={true}>
              📍 Coworking
              </Button>
            </Link>
        </Grid>

        <Grid xs={12} marginTop={8}>
          <Typography gutterBottom align='center'  >
          The <b>only fully open-source platform</b> that transparently gives voice, and discovers, and explores <b>Italy's tech innovations</b>.
          </Typography>
        </Grid>
      </Grid>

      </Container>
      </main>
    </Layout>
  );
}