import { Link as RouterLink } from 'react-router-dom'

import { Box, Grid, Paper, Typography, TextField, Button, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks/useForm'


const initalForm = {
    displayName: '',
    email: '',
    password: '',
}

export const RegisterPage = () => {

    const { displayName, email, password, onInputChange } = useForm( initalForm );
    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log( { displayName, email, password } )
    }

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
                <form onSubmit={ onSubmit }>
                    <Grid container
                        padding={ 3 }
                        rowGap={ 7 }
                        direction='column'
                        justifyContent='space-evenly'
                    >
                        <Grid item xs={ 12 }>
                            <Typography variant='h4' component='h1'>SIGN UP</Typography>
                        </Grid>
                        <Grid container item spacing={ 2 }>
                            <Grid item xs={ 12 }>
                                <TextField
                                    required
                                    label='Name'
                                    type='text'
                                    variant='outlined'
                                    sx={ { width: 1 } }
                                    name='displayName'
                                    value={ displayName }
                                    onChange={ onInputChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    required
                                    label='Email'
                                    type='email'
                                    variant='outlined'
                                    sx={ { width: 1 } }
                                    name='email'
                                    value={ email }
                                    onChange={ onInputChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    required
                                    label='Password'
                                    type='password'
                                    variant='outlined'
                                    sx={ { width: 1 } }
                                    name='password'
                                    value={ password }
                                    onChange={ onInputChange }
                                />
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Button fullWidth variant='contained' type='submit'>sign up</Button>
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
                        <Grid container justifyContent='end'>
                            <Grid item>
                                <Link
                                    component={ RouterLink }
                                    to='/auth/login'
                                    sx={ {
                                        textDecoration: 'none',
                                        color: '0000EE',
                                        fontFamily: [ 'Roboto', 'sans-serif' ].join( ',' )
                                    } }
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>


        </Box >
    )
}
