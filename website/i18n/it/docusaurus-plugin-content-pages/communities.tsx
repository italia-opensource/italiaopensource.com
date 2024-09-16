

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CommunitiesTableData from '@site/src/components/TableFeatures/communities';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import RawData from '../../../src/components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Communities Tech in Italia"
      wrapperClassName="layout"
      description="La nostra awesome list di communities tech in Italia">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Communities Tech in Italia
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          La nostra awesome list di communities tech in Italia
        </Typography>
      </Container>

      <Container  >
        <CommunitiesTableData />
      </Container>


      <Grid container padding={1} marginTop={2}>
        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Scopri e unisciti alle migliori community tech italiane
          </Typography>
          <Typography marginBottom={1}>
          <p>L’Italia vanta numerose community tech che offrono spazi di condivisione e apprendimento per professionisti e appassionati del settore. Unirsi a queste community può essere un'opportunità straordinaria per <b>rimanere aggiornati sulle ultime tendenze</b>, <b>sviluppare nuove competenze</b> e <b>creare connessioni preziose</b>.  Tutto ciò che devi fare, dunque, è trovare ora una o più community tech che trattino argomenti che ti interessano e unirti a loro! </p>
          <p>Se sei alla ricerca di ispirazione, ecco qualche consigli per te: <a href="/communities/codemotion"><b>Codemotion</b></a>, una delle più grandi community tech in Italia e in Europa, organizza conferenze, corsi e meet-up per sviluppatori di ogni livello.  Se cerchi invece una community tech sul territorio, <b><a href="/communities/latina-in-tech">Latina in Tech</a>, DevMarche</b> e <b>Open Source Saturday Milano</b> propongono eventi, talk e workshop rispettivamente nel Lazio, nelle Marche e in Lombardia. </p>
          <p>E se pensi che le community tech possano fare al caso solo degli sviluppatori, ti sbagli! Per esempio, <a href="/communities/hr-feat-ict"><b>HR feat ICT</b></a> è una community nata per creare uno <b>spazio di confronto e condivisione tra HR e professionisti tech</b>, ed è il luogo ideale per ricevere supporto sull’iter di ricerca e selezione, chiedere consigli (su CV, RAL, benefit) e trovare offerte di lavoro.  Qualcosa di simile lo fa anche <b><a href="/communities/fullremote.it">fullremote.it</a>,</b> che sul suo canale Telegram raccoglie e pubblica offerte di lavoro completamente da remoto (aperte anche a Project e Product Manager, HR ecc.).  E se ancora non hai trovato ciò che fa al caso tuo, la soluzione è esplorare la nostra awesome list!</p>
           </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          La community di Italia Open-Source
          </Typography>
          <Typography marginBottom={1}>
          <p>Mettere insieme diverse community è bello, veder crescere la propria ancora di più! <b><a href="https://mailchi.mp/8933ba69ba9c/beta-version">Iscriviti alla Beta Version</a> di Italia Open-Source per accedere</b> in anteprima <b>a promozioni esclusive</b>, <b>codici sconto per eventi</b> dei nostri <a href="/sponsor">Partner</a> e molto altro!</p>
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Partecipa agli eventi tech in Italia online e dal vivo
          </Typography>
          <Typography marginBottom={1}>
          <p><b>Partecipare agli eventi tech organizzati dalle community</b> italiane, sia online che dal vivo, <b>è un’occasione imperdibile per chi desidera</b> ampliare le proprie competenze, restare al passo con le novità del settore ma soprattutto <b>fare networking</b>. Non è raro, infatti, che molti professionisti trovino opportunità lavorative grazie alle conoscenze strette durante questi eventi, entrando in contatto diretto con gli esponenti delle aziende. Inoltre, se sei fondatore o membro di una community tech questi incontri sono un’ottima opportunità per <b>far conoscere il tuo progetto a più persone possibili</b>. Qualunque sia la natura degli eventi (meet-up locali, hackathon, webinar o conferenze internazionali) ogni occasione è buona per crescere sia come professionista, sia per farti notare nel settore!</p>
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Come faccio ad aggiungere una community alla lista?
          </Typography>
          <Typography marginBottom={1}>
          <p><b>Sei l’ideatore o un membro di una community tech italiana?</b> Clicca al seguente link per scoprire <a href="/contributors/communities"><b>come aggiungere la tua community alla lista</b></a>.</p>
          </Typography>
        </Grid>
      </Grid>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/contributors/partners">
          <Button variant="contained" fullWidth={true} >
            Became a community partner
          </Button>
        </Link>
      </Container>
      <RawData/>

      </main>
    </Layout>
  );
}