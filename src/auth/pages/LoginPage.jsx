import { Link as RouterLink } from 'react-router-dom'

import { CheckBox, Google } from '@mui/icons-material'
import { Box, Grid, Paper, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material'
import { fontFamily } from '@mui/system'


export const LoginPage = () => {
    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={ {
                position: 'absolute',
                top: 0,
                right: 0,
                width: 1,
                height: 1,
                backgroundColor: '#3C84AB'
            } }
        >

            <Paper
                elevation={ 10 }
                sx={ {
                    height: 0.5,
                    width: 0.4,
                    borderRadius: 4,
                } }
            >
                <Grid container
                    padding={ 3 }
                    rowGap={ 7 }
                    direction='column'
                    justifyContent='space-evenly'
                >
                    <Grid item xs={ 12 }>
                        <Typography variant='h4' component='h1'>LOGIN</Typography>
                    </Grid>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 12 }>
                            <TextField required label='Email' type='email' variant='outlined' sx={ { width: 1 } } />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField required label='Password' type='password' variant='outlined' sx={ { width: 1 } } />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <FormControlLabel control={ <Checkbox /> } label='Remember me' />

                        </Grid>
                        <Grid item xs={ 6 }>
                            <Button fullWidth variant='contained'>Login</Button>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <Button fullWidth variant='contained'>
                                <Box display='flex' alignContent='center'>
                                    <Google sx={ { width: 20 } } />
                                    <Typography variant='body1' component='p' marginLeft={ 0.5 }>Google</Typography>
                                </Box>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <Link
                                sx={ {
                                    textDecoration: 'none',
                                    color: '0000EE',
                                    fontFamily: [ 'Roboto', 'sans-serif' ].join( ',' )
                                } }
                            >
                                Forgot yout password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                component={ RouterLink }
                                to='/auth/register'
                                sx={ {
                                    textDecoration: 'none',
                                    color: '0000EE',
                                    fontFamily: [ 'Roboto', 'sans-serif' ].join( ',' )
                                } }
                            >
                                Don't have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>


        </Box >
    )
}
