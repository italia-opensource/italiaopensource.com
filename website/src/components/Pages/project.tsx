import React from 'react';
import Grid from '@mui/material/Grid2';
import { Link, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import GavelIcon from '@mui/icons-material/Gavel';
import BugReportIcon from '@mui/icons-material/BugReport';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Alert from '@mui/material/Alert';
import CodeIcon from '@mui/icons-material/Code';
import CssBaseline from '@mui/material/CssBaseline';
import { getTags, formatDate, titleCase } from '@site/src/components/Pages';

interface ProjectsPageProps {
    data: {
        name: string;
        type: string;
        tags: Array<string>;
        description: string;
        site_url: string;
        repository_platform: string;
        repository_url: string;
        license: string;
        meta?: any;
        autogenerated?: any;
    };
}

function getRepositoryGitHub(data: any) {
    const forkUrl = data.repository_url + '/forks';
    const issuesUrl = data.repository_url + '/issues';
    const starsUrl = data.repository_url + '/stargazers';

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid>
            <Typography
                component="h3"
                variant="h5"
                marginTop={3}
                marginBottom={1}
            >
                Repository
            </Typography>
            <Grid>
                <Grid size={{ xs: 12 }}>
                    <Button className="primary" href={starsUrl} target="_blank">
                        <StarOutlineIcon />{' '}
                        {data.autogenerated.analytics.stargazers_count} Stars
                    </Button>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Button className="primary" href={forkUrl} target="_blank">
                        <ForkLeftIcon />{' '}
                        {data.autogenerated.analytics.forks_count} Forks
                    </Button>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Button
                        className="primary"
                        href={issuesUrl}
                        target="_blank"
                    >
                        <BugReportIcon />{' '}
                        {data.autogenerated.analytics.open_issues_count} Open
                        Issues
                    </Button>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Button className="primary">
                        <GavelIcon /> {data.autogenerated.meta.license} License
                    </Button>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Button className="primary">
                        <CodeIcon /> {data.autogenerated.analytics.language} is
                        the most used language
                    </Button>
                </Grid>
            </Grid>
            {getTags(data.tags)}
            <Typography
                component="h3"
                variant="h5"
                marginTop={3}
                marginBottom={1}
            >
                Analytics
            </Typography>
            Latest commit {formatDate(data.autogenerated.meta.pushed_at)}
            <Typography>
                This analysis data can be accessed at{' '}
                <Link href="https://github.com/italia-opensource/awesome-italia-opensource/blob/main/analytics/opensource.json">
                    awesome-italia-opensource
                </Link>{' '}
                and is updated every 15th of the month.
            </Typography>
        </Grid>
    );
}

function getRepositoryGitLab(data: any) {
    return getTags(data.tags);
}

function getRepositoryHTML(data: any) {
    switch (data.repository_platform) {
        case 'github':
            return getRepositoryGitHub(data);
        default:
            return getRepositoryGitLab(data);
    }
}

export default function ContentPage(props: ProjectsPageProps) {
    return (
        <Grid container>
            <CssBaseline />

            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link color="inherit" href="/opensources">
                    Projects
                </Link>
                <Typography>{props.data.name}</Typography>
            </Breadcrumbs>

            <Grid size={{ xs: 12 }}>
                {props.data.autogenerated?.meta?.archived ? (
                    <Alert severity="warning">
                        WARN: This project is archived.
                    </Alert>
                ) : null}

                <Typography variant="h2" component="h1">
                    {props.data.name}
                </Typography>
                <Typography component="h2" marginBottom={2}>
                    {props.data.description}
                </Typography>

                <Link
                    href={props.data.repository_url}
                    className="primary"
                    target="_blank"
                    paddingRight={1}
                >
                    <Chip
                        label={titleCase(props.data.repository_platform)}
                        style={{ background: '#1976d2', color: '#FFFFFF' }}
                        icon={<LinkIcon style={{ color: '#FFFFFF' }} />}
                    />
                </Link>
                {props.data.site_url ? (
                    <Link
                        href={props.data.site_url}
                        className="primary"
                        target="_blank"
                    >
                        <Chip
                            label="Website"
                            style={{ background: '#1976d2', color: '#FFFFFF' }}
                            icon={<LinkIcon style={{ color: '#FFFFFF' }} />}
                        />
                    </Link>
                ) : null}

                {getRepositoryHTML(props.data)}
            </Grid>
        </Grid>
    );
}
