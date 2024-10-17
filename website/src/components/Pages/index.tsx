import React from 'react';
import Grid from '@mui/material/Grid2';
import { Link, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';


export function titleCase(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function getTags(tags: Array<string>) {
    return (
        <Grid>
            <Typography
                component="h3"
                variant="h5"
                marginTop={3}
                marginBottom={1}
            >
                Tags
            </Typography>
            <Grid aria-label="Tags group">
                {tags.map((tag) => (
                    <Button className="secondary">{tag}</Button>
                ))}
            </Grid>
        </Grid>
    );
}
