import React from 'react';
import Layout from '@theme/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import HomepageItems from '@site/src//components/HomepageItems';
import SocialItems from '@site/src/components/SocialItems';

export default function App(): JSX.Element {
    const awseomeLists = [
        {
            name: '💻 Progetti',
            label: 'Open-Source',
            count: 95,
            link: '/opensources',
        },
        {
            name: '👥 Tech Communities',
            label: 'Gruppi',
            count: 28,
            link: '/communities',
        },
        {
            name: '🌍 Digital Nomads',
            label: 'Destinazioni',
            count: 30,
            link: '/digital-nomads',
        },
        {
            name: '🏡 Startups',
            label: 'Businesses',
            count: 0,
            link: '/startups',
            isNew: true,
        },
    ];

    return (
        <Layout
            title={`Home`}
            wrapperClassName="layout"
            description="La prima piattaforma dedicata al mondo open-source italiano"
        >
            <main className="main">
                <CssBaseline />

                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        align="center"
                    >
                        <img
                            src="/img/logo/logo-horizontal.svg"
                            alt="Italia Open-source"
                        />
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        align="center"
                    >
                        La prima piattaforma dedicata al mondo open-source
                        italiano
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        align="center"
                    >
                        Scopri le nostre Awesome Lists
                    </Typography>

                    <HomepageItems awseomeLists={awseomeLists} />

                    <Grid container size={{ xs: 12 }} marginTop={5}>
                        <Grid size={{ xs: 12, sm: 6 }} padding={2}>
                            <Typography
                                variant="h5"
                                component="h2"
                                textAlign={'center'}
                            >
                                I nostri Valori
                            </Typography>
                            <Typography marginBottom={1}>
                                La nostra visione è quella di creare un
                                ecosistema in cui la condivisione e la
                                collaborazione sono la norma.{' '}
                                <b>
                                    Immaginiamo un futuro in cui ogni progetto
                                </b>
                                , grande o piccolo,{' '}
                                <b>
                                    è accessibile a tutti e può essere
                                    migliorato da chiunque
                                </b>
                                .{' '}
                                <b>
                                    Vediamo l'Italia come un punto di
                                    riferimento per l'open-source
                                </b>
                                , un luogo in cui la tecnologia è aperta e
                                accessibile, e dove la collaborazione e
                                l'innovazione sono all'ordine del giorno.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }} padding={2}>
                            <Typography
                                variant="h5"
                                component="h2"
                                textAlign={'center'}
                            >
                                La nostra Missione
                            </Typography>
                            <Typography marginBottom={1}>
                                Italia Open-Source non è una semplice
                                piattaforma di raccolta dati, ma{' '}
                                <b>
                                    un progetto in cui chiunque può contribuire
                                </b>{' '}
                                all’obiettivo di far scoprire e{' '}
                                <b>
                                    valorizzare i progetti open-source italiani
                                </b>
                                . Ci piace pensare che la nostra community sia
                                un punto di partenza per la creazione di un
                                sistema tech italiano dove scambio di{' '}
                                <b>conoscenze, innovazione e collaborazione</b>{' '}
                                sono la regola, non l’eccezione!
                            </Typography>
                        </Grid>
                    </Grid>

                    <SocialItems />
                </Container>
            </main>
        </Layout>
    );
}
