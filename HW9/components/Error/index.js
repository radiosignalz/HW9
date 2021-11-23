import React from 'react';
import {Alert,Button} from "react-bootstrap";

export const Error = ({reload}) => {
    return (
        <Alert variant={"danger"}>
            Something goes wrong!
            <Button onclick={reload}>Reload</Button>

        </Alert>
    );
};

