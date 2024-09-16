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
      description="La prima piattaforma dedicata ai progetti open-source italiani.">
      <main className="main">

      <CssBaseline />

      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align='center'>
          Italia Open-Source 🚀
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
        La prima piattaforma dedicata ai progetti open-source italiani
        </Typography>

      <Grid container spacing={3} marginTop={4}>
        <Grid container xs={12}>
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
            <Link href="/startups">
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
        </Grid>
      </Grid>

      <Grid container xs={12} marginTop={5}>
        <Grid xs={12} sm={6} padding={2} textAlign={'center'}>
          <Typography variant="h5" component="h2" >
            Il Progetto
          </Typography>
          <Typography marginBottom={1}>
          Italia Open-Source è <b>l'unica piattaforma completamente open-source</b> che scopre, esplora e <b>dà voce alle innovazioni tecnologiche italiane</b> in modo trasparente e gratuito. Che tu abbia una startup, una community o un progetto open-source (o la stia semplicemente cercando) nella nostra <b><a href='/opensources'>Awesome List</a></b> c’è spazio per tutti!
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'center'}>
          <Typography variant="h5" component="h2" >
          La nostra Missione
          </Typography>
          <Typography marginBottom={1}>
            Italia Open-Source non è una semplice piattaforma di raccolta dati, ma un progetto in cui chiunque può contribuire all’obiettivo di far scoprire e valorizzare i progetti open-source italiani. Ci piace pensare che la nostra community sia un punto di partenza per la creazione di un sistema tech italiano dove scambio di conoscenze, innovazione e collaborazione sono la regola, non l’eccezione!
          </Typography>
        </Grid>
      </Grid>

      <Grid container xs={12}>
          <Grid xs={12} sm={6} padding={1} textAlign={'center'}>
            <Link href="/contributors/developers" target="_blank">
              <Button variant="outlined" fullWidth={true}>
              Aggiungi il tuo progetto
              </Button>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} padding={1}  textAlign={'center'}>
            <Link href="/contributors/developers" target="_blank">
              <Button variant="outlined" fullWidth={true}>
              Unisciti alla community
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      </main>
    </Layout>
  );
}