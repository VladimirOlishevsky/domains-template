import React from 'react';
import { Grid } from '@material-ui/core';

const NS1 = () => {
    return (
        <>
            <Grid item>
                rudhost.com
            </Grid>
            <Grid item>
                ns1.colocall.pp.ua
            </Grid>
            <Grid item>
                ns2.colocall.pp.ua
            </Grid>
        </>
    )
}
const NS2 = () => {
    return (
        <>
            <Grid item>
                hosting.energy
            </Grid>
            <Grid item>
                ns1.globalnameservers.net
            </Grid>
            <Grid item>
                ns2.globalnameservers.org
            </Grid>
        </>
    )
}
const NS3 = () => {
    return (
        <>
            <Grid item>
                era.host
            </Grid>
            <Grid item>
                ns1.server - dns.name
            </Grid>
            <Grid item>
                ns2.server - dns.name
            </Grid>
        </>
    )
}
const NS5 = () => {
    return (
        <>
            <Grid item>
                shneider - host.ru
            </Grid>
            <Grid item>
                ns23.shneider - host.ru
            </Grid>
            <Grid item>
                ns24.shneider - host.ru
            </Grid>
        </>
    )
}
const NS4 = () => {
    return (
        <>
            <Grid item>
                Rudhost
            </Grid>
            <Grid item>
                ns1.rudh.org.ua
             </Grid>
            <Grid item>
                ns2.rudh.org.ua
            </Grid>
        </>
    )
}

export const registerNS = [
    <NS1 />,
    <NS2 />,
    <NS3 />,
    <NS4 />,
    <NS5 />,
]