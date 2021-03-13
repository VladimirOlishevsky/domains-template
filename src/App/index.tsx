import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { getStyles } from './styles';
import { registerNS } from './constants';

export const App = () => {
    const classes = getStyles();
    const [values, setvalues] = useState(0);

    let stars = [];
    for (let i = 0; i < values; i++) {
        
        stars.push(
            <Grid key={i} container direction='column' alignItems='flex-start'>
                <Grid item>Домен:  </Grid>
                <Grid item>Регистратор:  </Grid>
                <Grid item>Логин:   </Grid>
                <Grid item>пароль:   </Grid>
                <Grid item> ____ </Grid>
                <Grid item container direction='column' alignItems='flex-start'>
                    {registerNS[i % registerNS.length]}
                </Grid>
                <Grid item> ____ </Grid>
                <Grid item>почта:   </Grid>
                <Grid item> пароль:   </Grid>
                <Grid item> __________________________________________________ </Grid>
            </Grid>
        );
    }

    return (
        <Grid className={classes.app}>
            <TextField className={classes.input} onChange={(e) => setvalues(Number(e.currentTarget.value))} />
            {stars.map(el => (
                el
            ))}
        </Grid>
    );
}
