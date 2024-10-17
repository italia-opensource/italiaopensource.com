

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StartupsTableData from '@site/src/components/TableFeatures/startups';
import Grid from '@mui/material/Grid2';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import RawData from '@site/src//components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Tech Startup in Italia"
      wrapperClassName="layout"
      description="La nostra awesome list di startup tech italiane innovative">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Tech Startup in Italia
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
        La nostra awesome list di startup tech italiane innovative
        </Typography>
      </Container>

      {/* <Container  >
        <StartupsTableData />
      </Container> */}

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Typography variant="h5" component="h2" padding={3} align='center'>
          Coming soon...
        </Typography>
        <Link href="https://forms.gle/HanD9st1L8H34BhQ9">
          <Button variant="contained" fullWidth={true} >
            Aggiungi la tua Startup alla lista
          </Button>
        </Link>
        <Typography align='center' marginTop={1}>
          * Oppure crea una pull-request su GitHub. Leggi le <Link href="/contributors/startups">regole</Link> per aggiungere una startup alla liste
        </Typography>
      </Container>

      <Grid container padding={1} marginTop={2}>
      <Grid size={{ xs: 12, sm: 6 }} offset={{ sm:3 }} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
            <ArrowCircleRightIcon className='primary'/> Scopri le migliori startup tech italiane
          </Typography>
          <Typography marginBottom={1}>
          <p>Negli ultimi anni In Italia stiamo assistendo sempre più spesso alla <b>nascita di startup che decidono di sfruttare l'approccio open-source</b> per sviluppare soluzioni all'avanguardia. Molto spesso però, questo aspetto non viene valorizzato. Per questo motivo, noi di Italia Open-Source abbiamo deciso di raccoglierle in una awesome-list, poiché pensiamo che siano un ottimo esempio di come l'<b>approccio open-source</b> possa essere un <b>fattore chiave di successo e innovazione nel mercato</b> competitivo delle startup, dove ciò che conta è sapersi distinguere ed essere al passo con i tempi.</p>
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }} offset={{ sm:3 }} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
            <ArrowCircleRightIcon className='primary'/> I vantaggi dell’open-source per le startup
          </Typography>
          <Typography marginBottom={1}>
          <p>L'adozione di soluzioni open-source offre <b>numerosi vantaggi</b> per le startup (e le aziende in generale), che vanno dalla <b>riduzione dei costi</b> all'<b>accelerazione dei processi di sviluppo</b>. Per le startup, questo significa poter accedere a tecnologie avanzate e affidabili, spesso supportate da una vasta documentazione e risorse online. Inoltre, i software open-source possono contare su una comunità di sviluppatori che contribuisce all’<b>innovazione costante del codice</b>.</p>
<p>Un altro vantaggio è la <b>trasparenza</b>: il codice aperto permette di avere una completa visibilità su come funzionano le soluzioni implementate, riducendo i rischi legati alla sicurezza e alla conformità. Oltre quindi ad aumentare la sicurezza del proprio codice, <b>tramite lo sviluppo di software open-source le aziende possono rendere disponibile la loro tecnologia</b>, facendosi pubblicità e ottenere anche una possibile <b>fonte di guadagno</b>.</p>
<p>In questi termini è facile comprendere come <b>l'open-source</b> sia la chiave per <b>creare un ecosistema dinamico dove le startup possono crescere, innovare e competere a livello globale</b>.</p>
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }} offset={{ sm:3 }} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
            <ArrowCircleRightIcon className='primary'/> Come faccio ad aggiungere un’azienda alla lista?
          </Typography>
          <Typography marginBottom={1}>
          <p><b>Lavori in una startup tech italiana e vuoi aggiungerla alla nostra awesome-list?</b> Clicca al seguente link per scoprire <a href="/contributors/companies"><b>come aggiungere la tua azienda alla lista</b></a>.</p>
          </Typography>
        </Grid>
      </Grid>
      
      </main>
    </Layout>
  );
}