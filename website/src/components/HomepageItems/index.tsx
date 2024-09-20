// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import CountUp from 'react-countup';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Link from '@docusaurus/Link';

interface Props {
  awseomeLists: any
}

export default function HomepageItems(props: Props): JSX.Element {
    return (
        <Grid container spacing={5} paddingTop={{ xs: 6, sm: 3 }}>
        {props.awseomeLists.map((list) => (
          <Grid key={list.name} size={{ xs: 12, sm: 6 }} xs={12} sm={6}>
            <Paper
              variant="outlined"
              sx={(theme) => ({
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                borderRadius: 4
              })}
            >
              <div>
                <Typography sx={{ fontWeight: 'bold' }}>
                  {list.name}  {!!list.isNew && (<FiberNewIcon className="primary-dark"/>)}
                </Typography>
                <Box
                  data-ga-event-label={list.name}
                  sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mt: 0.5, gap: 0.2 }}
                >
                  <Link
                    href={list.link}
                  >
                    <b><CountUp start={1} end={list.count} duration={2.30} suffix='+'></CountUp></b> {list.label}
                    <ChevronRightRoundedIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
                  </Link>
                </Box>
              </div>
            </Paper>
          </Grid>
        ))}
          </Grid>
    );
}
