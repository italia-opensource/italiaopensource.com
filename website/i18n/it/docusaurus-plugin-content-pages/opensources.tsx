

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OpensourceTableData from '@site/src/components/TableFeatures/opensources';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';

import RawData from '../components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title={`Awesome Open-Source List`}
      wrapperClassName="layout"
      description="An awesome list of open-source projects created by Italian developers and companies">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Awesome Italia Open-source
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          {'An awesome list of open-source projects created by Italian developers and companies'}
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <OpensourceTableData />
      </Container>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="https://mailchi.mp/8933ba69ba9c/beta-version">
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