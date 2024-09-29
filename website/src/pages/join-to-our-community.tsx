import {fabrizioCafolla, danieleDapuzzo, gretaTesini} from '@site/src/components/TeamComponent/people';
import ItemList from '@site/src/components/TeamComponent/ItemList';
import UserCard from '@site/src/components/TeamComponent/UserCard';
import SocialItems from '@site/src/components/SocialItems';
import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import Layout from '@theme/Layout';
import Container from '@mui/material/Container';

export default function App(): JSX.Element {
    const userCards = [
        <UserCard item={fabrizioCafolla} />,
        <UserCard item={danieleDapuzzo} />,
        <UserCard item={gretaTesini} />,
    ];

    return (
      <Layout
        title="Join our community"
        wrapperClassName="layout"
        description="Want to stay up-to-date on all the latest news? Join the community, share ideas, and find inspiration.">
        <main className="main">
        <CssBaseline />


        <CssBaseline />

        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom align='center'>
            Join our Community
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align='center'>
          Want to stay up-to-date on all the latest news? Join the community, share ideas, and find inspiration.
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