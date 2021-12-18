import {
    makeStyles,
} from '@material-ui/core';


export const getStyles = makeStyles(() => ({
    app: {
        color: 'rgba(245,245,220,0.7)',
        paddingTop: 100,
        textAlign: 'center',
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 'calc(10px + 2vmin)',
        gap: 64
    },
    inputBlock: {
        display: 'flex',
        flexDirection: 'column',
        width: 300
    },
    input: {
        marginBottom: 10,
        '& .MuiInputLabel-root': {
            color: "beige"
          },
        '& .MuiInputBase-input': {
            color: 'beige',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#fff8',
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
    },
    container: {
        width: '50%',
        paddingBottom: 100
    }
}));