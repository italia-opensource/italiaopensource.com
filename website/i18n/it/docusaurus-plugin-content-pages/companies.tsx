

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CompaniesTableData from '@site/src/components/TableFeatures/companies';

import RawData from '../components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title={`Awesome Companies List`}
      wrapperClassName="layout"
      description="An awesome list of tech and innovative companies in Italy">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Awesome Italia Companies
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          {'An awesome list of tech and innovative companies in Italy'}
        </Typography>
      </Container>

      <Container  >
        <CompaniesTableData />
      </Container>

      {/* <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/opensources">
          <Button variant="contained" fullWidth={true} >
            Became a sponsor
          </Button>
        </Link>
      </Container> */}
      
      <RawData/>

      </main>
    </Layout>
  );
}