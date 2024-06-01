

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CommunitiesTableData from '@site/src/components/TableFeatures/communities';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';

export default function App(): JSX.Element {
  return (
    <Layout
      title={`Awesome Communities List`}
      wrapperClassName="layout"
      description="An awesome list of tech communities in Italy">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Awesome Italia Communities
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          {'An awesome list of tech communities in Italy'}
        </Typography>
      </Container>

      <Container  >
        <CommunitiesTableData />
      </Container>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/contributors/sponsor">
          <Button variant="contained" fullWidth={true} >
            Became a community partner
          </Button>
        </Link>
      </Container>

      </main>
    </Layout>
  );
}