import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const SocialBadge = ({ github, linkedin }) => {
  const { isDarkTheme } = useColorMode();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        { github ? <a href={github} style={{ margin: '0 10px' }} target="_blank" rel="noopener noreferrer">
          <img src={isDarkTheme ? 'https://cdn-icons-png.flaticon.com/128/5968/5968866.png' : 'https://cdn-icons-png.flaticon.com/128/5968/5968866.png'} alt='github' style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
        </a> : null}
        <a href={linkedin} style={{ margin: '0 10px' }} target="_blank" rel="noopener noreferrer">
        <img src={isDarkTheme ? 'https://cdn-icons-png.flaticon.com/128/3536/3536569.png' : 'https://cdn-icons-png.flaticon.com/128/3536/3536569.png'} alt='linkedin' style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
        </a>
    </div>
  );
};

export default SocialBadge;