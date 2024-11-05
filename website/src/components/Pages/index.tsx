import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

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
                    <Button className="primary-dark">{tag}</Button>
                ))}
            </Grid>
        </Grid>
    );
}
