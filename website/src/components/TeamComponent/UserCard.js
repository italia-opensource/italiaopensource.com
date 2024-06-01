import React from 'react';
import SocialBadge from './SocialBadge';
import { Grid } from '@mui/material';

const UserCard = ({ item }) => {
  return (
     <Grid item xs={12} sm={4} padding={1}>
        <div key={item.id} style={{ textAlign: 'center', margin: '0 10px' }}>
          <img src={item.imageSrc} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
          <div style={{ marginTop: '10px' }}>
            <h3>{item.name}</h3>
            <p>{item.jobTitle}</p>
            <SocialBadge github={item.socialLinks.find(link => link.name === 'github').link}
             linkedin={item.socialLinks.find(link => link.name === 'linkedin').link} />
          </div>
        </div>
      </Grid>
  );
};

export default UserCard;