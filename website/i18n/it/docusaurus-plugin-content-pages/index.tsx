import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import HomepageItems from '@site/src//components/HomepageItems';
import SocialItems from '@site/src/components/SocialItems';

export default function App(): JSX.Element {
  const awseomeLists = [
    {
      name: '💻 Open-Source',
      label: 'Progetti',
      count: 95,
      link: '/opensources',
    },
    {
      name: '👥 Communities',
      label: 'Gruppi',
      count: 28,
      link: '/communities',
    },
    {
      name: '🌍 Digital Nomads',
      label: 'Luoghi',
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
      description="La prima piattaforma dedicata al mondo open-source italiano">
      <main className="main">

      <CssBaseline />

      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align='center'>
          Italia Open-Source 🚀
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
        La prima piattaforma dedicata al mondo open-source italiano
        </Typography>

      <HomepageItems awseomeLists={awseomeLists}/>

      <Grid container xs={12} marginTop={5}>
        <Grid xs={12} sm={6} padding={2}>
          <Typography variant="h5" component="h2"  textAlign={'center'}>
            I nostri Valori
          </Typography>
          <Typography marginBottom={1}>
          La nostra visione è quella di creare un ecosistema in cui la condivisione e la collaborazione sono la norma. <b>Immaginiamo un futuro in cui ogni progetto</b>, grande o piccolo, <b>è accessibile a tutti e può essere migliorato da chiunque</b>. <b>Vediamo l'Italia come un punto di riferimento per l'open-source</b>, un luogo in cui la tecnologia è aperta e accessibile, e dove la collaborazione e l'innovazione sono all'ordine del giorno.
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2}>
          <Typography variant="h5" component="h2"  textAlign={'center'}>
          La nostra Missione
          </Typography>
          <Typography marginBottom={1}>
            Italia Open-Source non è una semplice piattaforma di raccolta dati, ma <b>un progetto in cui chiunque può contribuire</b> all’obiettivo di far scoprire e <b>valorizzare i progetti open-source italiani</b>. Ci piace pensare che la nostra community sia un punto di partenza per la creazione di un sistema tech italiano dove scambio di <b>conoscenze, innovazione e collaborazione</b> sono la regola, non l’eccezione!
          </Typography>
        </Grid>
      </Grid>

      <Grid container xs={12} >
          <Grid xs={12} sm={6} padding={1} smOffset={3} >
            <Link href="/join-to-our-community">
              <Button variant="contained" fullWidth={true}>
              Unisciti alla community
              </Button>
            </Link>
          </Grid>
        </Grid>
        <SocialItems />

      </Container>
      </main>
    </Layout>
  );
}