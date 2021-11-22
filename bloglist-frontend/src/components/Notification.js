import React from "react"

import { Alert, AlertTitle } from "@mui/material"

const Notification = ({error, success}) => {

    if (error !== null && success === null) {
        return (
            <>
            <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
            </>
        )
    } else if (error === null && success !== null) {
        return (
            <>
            <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
                {success}
            </Alert>
            </>
        )
    }
    return null
}

export default Notification