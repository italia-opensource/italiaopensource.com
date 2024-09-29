

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import StartupsTableData from '@site/src/components/TableFeatures/startups';
// import RawData from '../components/RawData';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Awesome Tech Startups in Italy"
      wrapperClassName="layout"
      description="Our awesome list of innovative Italian tech startups">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Awesome Tech Startups in Italy 
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
        <FiberNewIcon className="primary-dark"/> Our awesome list of innovative Italian tech startups
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
            Add your startup to the list
          </Button>
        </Link>
        <Typography align='center' marginTop={1}>
          * Or create Pull-Request on GitHub. Read the <Link href="/contributors/startups">rules</Link> to add your startups to the list
        </Typography>
      </Container>
      
      <Grid container padding={1} marginTop={2}>
        <Grid xs={12} sm={6} smOffset={3} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          <ArrowCircleRightIcon className='primary'/> Discover the best Italian tech startups
          </Typography>
          <Typography marginBottom={1}>
          In recent years, Italy has increasingly witnessed the <b>emergence of startups that leverage the open-source approach</b> to develop cutting-edge solutions. Very often, however, this aspect is not fully valued. For this reason, we at Italia Open-Source have decided to collect them in an awesome list, as we believe they are an excellent example of how the <b>open-source approach</b> can be a <b>key factor for success and innovation in the competitive</b> startup market, where what matters is knowing how to stand out and keep up with the times.
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} smOffset={3} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          <ArrowCircleRightIcon className='primary'/> The advantages of open-source for startups
          </Typography>
          <Typography marginBottom={1}>
          <p>Adopting open-source solutions <b>offers many benefits</b> to startups (and businesses in general), <b>from reducing costs to accelerating development processes</b>. For startups, this means access to advanced and reliable technologies, often supported by extensive documentation and online resources. In addition, open-source software can rely on a community of developers who contribute to <b>constant code innovation</b>.
Another advantage is transparency: open-source provides complete visibility into how implemented solutions work, reducing security and compliance risks. In addition to increasing the security of their code, open-source software development allows companies to share their technology, promote themselves, and create a potential revenue stream. In these terms, it's easy to see how <b>open-source</b> is key to <b>creating a vibrant ecosystem where startups can grow, innovate, and compete globally</b>.</p>
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} smOffset={3} padding={2} textAlign={'left'}>
          <Typography variant="h5" component="h2" >
          <ArrowCircleRightIcon className='primary'/> How do I add a company to the list?
          </Typography>
          <Typography marginBottom={1}>
          <p><b>Do you work in an Italian tech startup and want to add it to our awesome-list?</b> Click on the following link to find out <a href="/contributors/companies"><b>how to add your company to the list</b></a>.</p>
          </Typography>
        </Grid>
      </Grid>

      </main>
    </Layout>
  );
}