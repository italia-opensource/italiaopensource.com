// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import Grid from '@mui/material/Grid2';
import Link from '@docusaurus/Link';
import Button from '@mui/material/Button';

interface Props {
  buttonText: string;
}

export default function OurPartners(props: Props): JSX.Element {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/codemotion">
          <img src="/img/community-partners/codemotion.png" alt="Codemotion" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/schrodinger-hat">
          <img src="/img/community-partners/schrodinger-hat.png" alt="Schrodinger-Hat" />
          <h3 align="center">Schrödinger Hat</h3>
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/kcd-italy">
          <img src="/img/community-partners/kcd-italy.svg" alt="KCD Italy" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/hr-feat-ict">
          <img src="/img/community-partners/hr-feat-ict.png" alt="HR feat ICT" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/latina-in-tech">
          <img src="/img/community-partners/lit.png" alt="Latina in Tech" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/la-locanda-del-tech">
          <img src="/img/community-partners/la-locanda-del-tech.png" alt="La Locanda del Tech" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/giuppi-dev">
          <img src="/img/community-partners/giuppi_dev_.png" alt="Giuppi dev" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/techcompenso">
          <img src="/img/community-partners/tech-compenso.svg" alt="TechCompenso" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/fullremote-it">
          <img src="/img/community-partners/fullremote.png" alt="Fullremote" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/grusp">
          <img src="/img/community-partners/grusp.png" alt="GrUSP" />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/vita-nello-zaino">
          <img src="/img/community-partners/vitanellozaino.webp" alt="Vita nello Zaino" />
          <h3 align="center">Vita nello Zaino</h3>
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/italian-linux-society">
          <img
            src="/img/community-partners/italian-linux-society.png"
            alt="Italian Linux Society"
          />
        </Link>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} padding={3}>
        <Link href="/communities/need-for-nerd">
          <img src="/img/community-partners/need-for-nerd.png" alt="Need for Nerd" />
        </Link>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }} offset={{ sm: 3 }}>
        <Link href="/partners/how-to-became-partners">
          <Button variant="contained" fullWidth={true}>
            <span>{props.buttonText}</span>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
