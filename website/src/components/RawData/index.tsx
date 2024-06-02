// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import GitHub from '@mui/icons-material/GitHub'; 
import metadata from "../../../database/metadata.json";

export default function RawData() {
    const url = metadata['source'].replace('.git','') + '/tree/' + metadata['hash'] + '/analytics';

    return (
        <p><GitHub/> See raw data on <a href={url} target='blank'>awesome-italia-opensource (ref: {metadata['hash']})</a></p>
    );
}
