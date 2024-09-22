
import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Layout from '@theme/Layout';
import {fabrizioCafolla, danieleDapuzzo, gretaTesini} from '@site/src/components/TeamComponent/people';
import ItemList from '@site/src/components/TeamComponent/ItemList';
import UserCard from '@site/src/components/TeamComponent/UserCard';
import SocialItems from '@site/src/components/SocialItems';

export default function App(): JSX.Element {
    const userCards = [
        <UserCard item={fabrizioCafolla} />,
        <UserCard item={danieleDapuzzo} />,
        <UserCard item={gretaTesini} />,
    ];

    return (
      <Layout
        title="Unisciti alla Community"
        wrapperClassName="layout"
        description="Vuoi restare aggiornato su tutte le novità? Entra a far parte della community, condividi idee e trova l'ispirazione.">
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
          <SocialItems />

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