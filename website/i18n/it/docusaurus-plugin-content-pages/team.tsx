import {fabrizioCafolla, danieleDapuzzo, gretaTesini} from '@site/src/components/TeamComponent/people';
import ItemList from '@site/src/components/TeamComponent/ItemList';
import UserCard from '@site/src/components/TeamComponent/UserCard';
import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import Layout from '@theme/Layout';

export default function App(): JSX.Element {
    const userCards = [
        <UserCard item={fabrizioCafolla} />,
        <UserCard item={danieleDapuzzo} />,
        <UserCard item={gretaTesini} />,
    ];
    return (
      <Layout
        title={`Team`}
        wrapperClassName="layout"
        description="The only fully open-source platform that transparently gives voice, and discovers, and explores Italy's tech innovations.">
        <main className="main">
        <CssBaseline />

        <Typography variant="h3" component="h1" gutterBottom align='center'>
          Italia Open-Source Team 💎
        </Typography>
        <hr></hr>

        <ItemList items={userCards} />

        <hr></hr>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          Our Contributors 💚
        </Typography>
        <hr></hr>
        <a href="https://github.com/italia-opensource/awesome-italia-opensource/graphs/contributors"> <img src="https://contrib.rocks/image?repo=italia-opensource/awesome-italia-opensource" /> </a>

      </main>
    </Layout>
  );
}