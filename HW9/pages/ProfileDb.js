import React from 'react';
import {Stack}from "react-bootstrap"
import ReactJson from "react-json-view"

import {getUserId } from "../store/user/reducers"
import {useSelector} from "react-redux";


export const ProfileDb = () => {
    const user=useSelector(getUserId)
    return (
        <Stack gap={3}>
            <h1>ProfileDB</h1>
            <ReactJson src={user.toJSON()}/>

        </Stack>
    );
};

