import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialBadge = ({ github, linkedin }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        { github ? <a href={github} className='primary-dark' style={{ margin: '0 10px' }} target="_blank" rel="noopener noreferrer">
          <GitHubIcon alt='Github' style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
        </a> : null}
        <a href={linkedin} className='primary-dark' style={{ margin: '0 10px' }} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon alt='Linkedin' style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
        </a>
    </div>
  );
};

export default SocialBadge;