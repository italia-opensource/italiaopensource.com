

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CommunitiesTableData from '@site/src/components/TableFeatures/communities';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import RawData from '../components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Awesome Tech Communities in Italy"
      wrapperClassName="layout"
      description="Our awesome list of tech communities in Italy">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Awesome Tech Communities in Italy
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          Our awesome list of tech communities in Italy
        </Typography>
      </Container>

      <Container  >
        <CommunitiesTableData />
      </Container>

      <Grid container padding={1} marginTop={2}>
        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Discover and join the best Italian tech communities
          </Typography>
          <Typography marginBottom={1}>
            <p>Italy boasts numerous tech communities that offer spaces for sharing and learning for professionals and enthusiasts in the sector. Joining these communities can be an extraordinary opportunity to <b>stay updated on the latest trends</b>, <b>develop new skills</b> and <b>create valuable connections</b>. So, all you need to do now is find one or more tech communities that cover topics you're interested in and join them!</p>
<p>If you're looking for inspiration, <b>here are some suggestions</b> for you: <a href="/communities/codemotion"><b>Codemotion</b></a>, one of the largest tech communities in Italy and Europe, organizes conferences, courses, and meet-ups for developers of all levels. If you're looking for a local tech community, <b><a href="/communities/latina-in-tech">Latina in Tech</a>, DevMarche</b> and <b>Open Source Saturday Milano</b> offer events, talks, and workshops in Lazio, Marche, and Lombardy respectively. </p>
<p>And if you think tech communities are only for developers, you're wrong! For example, <a href="/communities/hr-feat-ict"><b>HR feat ICT</b></a> is a community created to provide a <b>space for discussion and sharing between HR and tech professionals</b>, and it's the ideal place to receive support on the search and selection process, ask for advice (on CVs, salaries, benefits) and find job opportunities. <a href="/communities/fullremote.it"><b>fullremote.it</b></a> does something similar, collecting and <b>publishing fully remote job offers</b> on its Telegram channel (open also to Project and Product Managers, HR, etc.). And if you still haven't found what suits you, the solution is to explore our awesome list!</p>
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Italia Open-Source Community
          </Typography>
          <Typography marginBottom={1}>
          <p>Bringing different communities together is great, seeing your own grow is even better! <b><a href="https://mailchi.mp/8933ba69ba9c/beta-version">Sign up for the Beta Version</a> of Italia Open-Source to get</b> early access to <b>exclusive promotions, discount codes for events</b> from our <a href="/sponsor">Partners</a> and much more!</p>
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          Participate in tech events in Italy online and in-person
          </Typography>
          <Typography marginBottom={1}>
          <p><b>Participating in tech events organized by Italian communities</b>, both online and in-person, <b>is an unmissable opportunity for those who want to</b> expand their skills, keep up with industry news, but most importantly <b>network</b>. It's not uncommon, in fact, for many professionals to find job opportunities thanks to connections made during these events, coming into direct contact with company representatives. Moreover, if you're a founder or member of a tech community, these meetings are an excellent opportunity to <b>make your project known to as many people as possible</b>. Whatever the nature of the events (local meet-ups, hackathons, webinars or international conferences), every occasion is good to grow both as a professional and to get noticed in the industry!</p>
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          How do I add a community to the list?
          </Typography>
          <Typography marginBottom={1}>
          <p><b>Are you the creator or a member of an Italian tech community?</b> Click on the following link to find out <a href="/contributors/communities"><b>how to add your community to the list</b></a>.</p>
          </Typography>
        </Grid>
      </Grid>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/partners/how-to-became-partners">
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