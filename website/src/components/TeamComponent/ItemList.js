import React from 'react';
import { Grid } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <Grid container justifyContent="center">
      {items.map((item, index) => (
            item
      ))}
    </Grid>
  );
};

export default ItemList;