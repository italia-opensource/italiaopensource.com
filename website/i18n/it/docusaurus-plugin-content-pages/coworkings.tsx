

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';

import RawData from '../../../src/components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Coworking in Italia"
      wrapperClassName="layout"
      description="La nostra awesome list di coworking in Italia">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Coworking in Italia
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          La nostra awesome list di coworking in Italia
        </Typography>
      </Container>

      <Container>
        <Typography align='center' variant='h4' component='h3'>
          Presto in arrivo...
        </Typography>
      </Container>


      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/join-to-our-community">
          <Button variant="contained" fullWidth={true} >
            Join to Italia Open-Source community
          </Button>
        </Link>
      </Container>
      <RawData/>

      </main>
    </Layout>
  );
}