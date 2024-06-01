// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { AlertTitle, Alert } from "@mui/material";

export default function ReportAlert() {
    return (
        <Alert severity="info">
            <AlertTitle>The State of Italian Open-Source</AlertTitle>
            Join us and hundreds of other developers.
            <br/>Take part in the <b><a href='https://forms.gle/FvRxowZh5XPhByrM7' target='_blank'>survey</a></b> yourself, it will only take two minutes to complete.
        </Alert>
    );
}
