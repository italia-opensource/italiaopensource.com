import {fabrizioCafolla, danieleDapuzzo, gretaTesini} from '@site/src/components/TeamComponent/people';
import ItemList from '@site/src/components/TeamComponent/ItemList';
import UserCard from '@site/src/components/TeamComponent/UserCard';
import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import Layout from '@theme/Layout';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@docusaurus/Link';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function App(): JSX.Element {
    const userCards = [
        <UserCard item={fabrizioCafolla} />,
        <UserCard item={danieleDapuzzo} />,
        <UserCard item={gretaTesini} />,
    ];

    return (
      <Layout
        title="Join to our community"
        wrapperClassName="layout"
        description="The only fully open-source platform that transparently gives voice, and discovers, and explores Italy's tech innovations.">
        <main className="main">
        <CssBaseline />


        <CssBaseline />

        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom align='center'>
            Unisciti alla Community
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align='center'>
            Vuoi restare aggiornato su tutte le novità? Entra a far parte della community, condividi idee e trova l'ispirazione.
          </Typography>
          <Grid container spacing={3} marginTop={4} xs={12}>
            <Grid xs={4} sm={4} padding={2} textAlign={'center'}>
              <Link href="https://www.linkedin.com/company/italia-open-source" className='primary-dark' target="_blank">
                <LinkedInIcon style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
              </Link>
            </Grid>
            <Grid xs={4} sm={4} padding={2} textAlign={'center'}>
              <Link href="https://github.com/italia-opensource" className='primary-dark' target="_blank">
                <GitHubIcon style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
              </Link>
            </Grid>
            <Grid xs={4} sm={4} padding={2} textAlign={'center'}>
              <Link href="https://t.me/+WsJ91uPMVbUzZjk0" className='primary-dark' target="_blank">
               <TelegramIcon style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
              </Link>
            </Grid>

            <Grid xs={12} sm={6} smOffset={3} marginTop={3}>
              <Link href="https://mailchi.mp/8933ba69ba9c/beta-version" target="_blank">
                <Button variant="contained" fullWidth={true}>
                  Registrati alla beta version
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>

        <Typography variant="h4" component="h2" gutterBottom align='center' marginTop={5}>
         Team
        </Typography>
        <hr></hr>

        <ItemList items={userCards} />

        <Typography variant="h4" component="h2" gutterBottom align='center' marginTop={5}>
          Our Contributors
        </Typography>
        <hr></hr>
        <a href="https://github.com/italia-opensource/awesome-italia-opensource/graphs/contributors"> <img src="https://contrib.rocks/image?repo=italia-opensource/awesome-italia-opensource" /> </a>

      </main>
    </Layout>
  );
}