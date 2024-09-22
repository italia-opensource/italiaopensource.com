

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DigitalNomadsTableData from '@site/src/components/TableFeatures/digital-nomads';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import RawData from '@site/src//components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Destinazioni per Nomadi Digitali"
      wrapperClassName="layout"
      description="La nostra awesome list di destinazioni per nomadi digitali in giro per il mondo">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Destinazioni per Nomadi Digitali
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          La nostra awesome list di destinazioni per nomadi digitali in giro per il mondo
        </Typography>
      </Container>

      <Container>
        <DigitalNomadsTableData />
      </Container>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/join-to-our-community">
          <Button variant="contained" fullWidth={true} >
            Unisciti alla community
          </Button>
        </Link>
      </Container>
      <RawData/>
      
      <Grid container padding={1} marginTop={2}>
      <Grid xs={12} sm={6} smOffset={3} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
            <ArrowCircleRightIcon className='primary'/> Quali sono le migliori destinazioni per nomadi digitali?
          </Typography>
          <Typography marginBottom={1}>
          Stai cercando il luogo perfetto <b>dove fare smartworking e lavorare da remoto</b>, ma non sai dove andare? In questa awesome-list sono raccolte le <b>migliori mete per nomadi digitali</b>, consigliate direttamente dai <a href="/contributors/developers">Contributors</a> di Italia Open-Source. Queste destinazioni offrono un <b>mix perfetto di infrastrutture tecnologiche</b> e una <b>qualità della vita elevata</b>. Tra le mete più ambite nel mondo troviamo <b>Bali</b>, in Indonesia, con le sue spiagge paradisiache e una vibrante community di nomadi digitali; in generale il <b>sud est asiatico</b> è molto amato da chi lavora da remoto. Per chi invece non vuole spostarsi troppo, fra i <b>migliori Paesi per nomadi digitali in Europa</b> troviamo il <b>Portogallo</b>, la <b>Spagna</b> e  l’<b>Olanda</b>. Vuoi rimanere in <b>Italia</b>? Allora ti consigliamo di visitare <b>Milano</b> e <b>Latina</b>, due città dall’animo completamente diverso ma con una fitta presenza di coworking sul territorio.
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} smOffset={3} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
            <ArrowCircleRightIcon className='primary'/> Come scegliere la meta ideale per nomadi digitali?
          </Typography>
          <Typography marginBottom={1}>
          Scegliere la meta ideale per nomadi digitali richiede la considerazione di diversi fattori chiave come <b>qualità della connessione internet, costo della vita, fuso orario, clima ecc.</b> Anche l’accessibilità dei visti e la presenza di una comunità di nomadi digitali già consolidata possono fare la differenza, rendendo più facile l'integrazione e la creazione di nuove connessioni professionali e personali. Ogni colonna della nostra lista è dedicata a fornirti le informazioni necessarie per iniziare a <b>scegliere la tua prossima destinazione da nomade digitale</b>!
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} smOffset={3} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
            <ArrowCircleRightIcon className='primary'/> Come faccio ad aggiungere una destinazione per nomadi digitali alla lista?
          </Typography>
          <Typography marginBottom={1}>
          <b>Sei un amante del lavoro da remoto</b> in giro per il mondo e hai in mente la <b>meta perfetta da aggiungere alla lista</b>? Clicca al seguente link per scoprire <a href="/contributors/digital-nomads"><b>come contribuire da nomade digitale</b></a>.
          </Typography>
        </Grid>
      </Grid>

      </main>
    </Layout>
  );
}