

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OpensourceTableData from '@site/src/components/TableFeatures/opensources';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import RawData from '../../../src/components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title={`Progetti Open-Source Italiani`}
      wrapperClassName="layout"
      description="La nostra awesome list di progetti open source creati da aziende e sviluppatori italiani">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Progetti Open-Source Italiani
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          La nostra awesome list di progetti open source creati da aziende e sviluppatori italiani
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <OpensourceTableData />
      </Container>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/join-to-our-community">
          <Button variant="contained" fullWidth={true} >
            Unisciti alla nostra community
          </Button>
        </Link>
      </Container>
      <RawData/>

      <Grid container padding={1} marginTop={2}>
        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
            Che cos’è un progetto open source?
          </Typography>
          <Typography marginBottom={1}>
          Un progetto open source è un' <b>iniziativa di sviluppo software il cui codice sorgente è reso pubblico</b>e accessibile a chiunque. Ciò significa che <b>chiunque può vedere e modificare il codice</b>, contribuendo attivamente al miglioramento e all'evoluzione di quest’ultimo. In Italia, il <b>movimento open source</b>sta guadagnando sempre più popolarità, con una conseguente nascita numerosi progetti emergenti nel panorama tecnologico. Per questo noi di Italia Open-Source abbiamo deciso di creare un’<b>awesome-list contenente progetti open source</b>, per dargli il valore che meritano e creare un ecosistema tech italiano sempre più volto alla collaborazione tra aziende e professionisti, che promuova la <b>trasparenza, la collaborazione e l'innovazione</b>.
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Come si collabora a un progetto open source?
          </Typography>
          <Typography marginBottom={1}>
          Se sei uno sviluppatore, <b>collaborare a un progetto open source è un'opportunità</b>unica, sia che tu sia alle prime armi o un professionista con anni di esperienza. Contribuire a un progetto open source, infatti, non solo arricchirà il software, ma <b>ti permetterà di crescere professionalmente</b>, creare connessioni con altri sviluppatori e ampliare il tuo portfolio con progetti significativi. La maggior parte dei progetti open source è ospitata su piattaforme come GitHub o GitLab, dove puoi esplorare il codice sorgente, segnalare bug, proporre nuove funzionalità e inviare contributi sotto forma di pull request. Per iniziare, è <b>essenziale individuare un progetto che ti appassioni</b>e che corrisponda alle tue competenze: <b>nella nostra awesome-list siamo sicuri che troverai ciò che fa per te! </b>In alternativa, se non hai mai contribuito a un progetto open source prima d’ora, potresti cogliere l’occasione proprio adesso <b>aggiungendo nuovi elementi alle nostre awesome-list</b>!
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Come faccio ad aggiungere un progetto open source alla lista?
          </Typography>
          <Typography marginBottom={1}>
            Hai un <b>progetto open source</b> che ti piacerebbe aggiungere alla nostra lista? Clicca al seguente link per <b>scoprire i requisiti e <a href='/contributors/developers'>come contribuire da sviluppatore</a></b>.
          </Typography>
        </Grid>
      </Grid>
      </main>
    </Layout>
  );
}