// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import Link from '@docusaurus/Link';
import Grid from '@mui/material/Grid2';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export function DonateButton() {
    return (
        <Link href="https://opencollective.com/italia-open-source/donate?interval=oneTime&amount=5" target="_blank">
            <img src="https://opencollective.com/webpack/donate/button@2x.png?color=blue" />
        </Link>
    );
}

export default function SocialItems() {
    return (
        <Grid container spacing={3} marginTop={4} size={{ xs: 12 }}>
        <Grid size={{ xs: 12, sm: 3 }} padding={2} textAlign={'center'}>
          <Link href="https://mailchi.mp/8933ba69ba9c/beta-version" className='primary-dark' target="_blank">
            <Diversity1Icon style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
            <p>
              Beta Version
            </p>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }} padding={2} textAlign={'center'}>
          <Link href="https://www.linkedin.com/company/italia-open-source" className='primary-dark' target="_blank">
            <LinkedInIcon style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
            <p>
              LinkedIn
            </p>
          </Link>
          </Grid>
        <Grid size={{ xs: 12, sm: 3 }} padding={2} textAlign={'center'}>
          <Link href="https://t.me/+WsJ91uPMVbUzZjk0" className='primary-dark' target="_blank">
            <TelegramIcon style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
            <p>
              Telegram
            </p>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }} padding={2} textAlign={'center'}>
          <Link href="https://github.com/italia-opensource" className='primary-dark' target="_blank">
            <GitHubIcon style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
            <p>
              GitHub
            </p>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} offset={{ sm: 4 }} marginTop={3}>
          <DonateButton />
        </Grid>
      </Grid>
    );
}
