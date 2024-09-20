

import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OpensourceTableData from '@site/src/components/TableFeatures/opensources';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import RawData from '../components/RawData';

export default function App(): JSX.Element {
  return (
    <Layout
      title="Awesome Italian Open-Source Projects"
      wrapperClassName="layout"
      description="Our awesome list of open-source projects created by Italian companies and developers">
      <main className="main">

      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align='center'>
         Awesome Italian Open-Source Projects
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          Our awesome list of open-source projects created by Italian companies and developers
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <OpensourceTableData />
      </Container>

      <Container component="main" sx={{ mt: 3, mb: 3 }} maxWidth="sm">
        <Link href="/join-to-our-community">
          <Button variant="contained" fullWidth={true} >
            Join to Italia Open-Source community
          </Button>
        </Link>
      </Container>
      <RawData/>

      <Grid container padding={1} marginTop={2}>

      <Grid xs={12} sm={6} padding={2} textAlign={'left'}>
        <Typography variant="h5" component="h2" >
        What is an open source project?
        </Typography>
        <Typography marginBottom={1}>
          An open source project is a <b>software development initiative whose source code is made public</b> and accessible to anyone. This means that <b>anyone can view and modify the code</b>, actively contributing to its improvement and evolution. In Italy, the <b>open source movement</b> is gaining more and more popularity, with a consequent emergence of numerous projects in the technological landscape. That's why, as Italia Open-Source, we decided to create this <b>awesome list containing open source projects</b>, to give them the value they deserve and create an Italian tech ecosystem increasingly focused on collaboration between companies and professionals, promoting <b>transparency</b>, <b>collaboration</b> and <b>innovation</b>.
        </Typography>
        </Grid>

        <Grid xs={12} sm={6} padding={2} textAlign={'left'}>

        <Typography variant="h5" component="h2" >
        How do you collaborate on an open source project?
        </Typography>
        <Typography marginBottom={1}>
          If you're a developer, <b>collaborating on an open source project is a unique opportunity</b>, whether you're a beginner or a professional with years of experience<b>.</b> Contributing to an open source project not only enriches the software, but <b>allows you to grow professionally</b>, create connections with other developers, and expand your portfolio with meaningful projects. Most open source projects are hosted on platforms like GitHub or GitLab, where you can explore the source code, report bugs, propose new features, and submit contributions with pull requests. To get started, it's <b>essential to identify a project that you're passionate about</b> and that matches your skills: <b>we're sure you'll find what's right for you in our awesome list!</b> Alternatively, if you've never contributed to an open source project before, you could take the opportunity right now by <b>adding new items to our awesome lists</b>!
        </Typography>
      </Grid>
      <Grid xs={12} sm={6} padding={2} textAlign={'left'}>

        <Typography variant="h5" component="h2" >
          How do I add an open source project to the list?
        </Typography>
        <Typography marginBottom={1}>
          Do you have an <b>open source project</b> that you'd like to add to our list? Click on the following link to <b>discover the requirements and</b> <a href="/contributors/developers"><b>how to contribute as a developer</b></a>.
        </Typography>
      </Grid>
      </Grid>

      </main>
    </Layout>
  );
}