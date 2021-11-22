import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => {
    return {
    mainGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
    },
    aboutGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    contentGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        height: '100%',
    },
    authenticationBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        width: '100%',
        borderLeft: "1px solid rgb(212, 212, 212)"
    },
    loginBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signupBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}})

export default useStyles