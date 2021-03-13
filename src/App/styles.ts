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
        fontSize: 'calc(10px + 2vmin)'
    },
    input: {
        marginBottom: 100,
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
    button: {
        marginTop: 20,
        borderColor: 'beige',
        color: 'beige'
    }
}));