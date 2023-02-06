import { Box, Grid, Paper, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import { Google } from '@mui/icons-material'

export const RegisterPage = () => {
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
                >
                    <Grid item xs={ 12 }>
                        <Typography variant='h4' component='h1'>SIGN UP</Typography>
                    </Grid>
                    <Grid container item spacing={ 2 }>
                        <Grid item xs={ 12 }>
                            <TextField required label='Name' type='text' variant='outlined' sx={ { width: 1 } } />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField required label='Email' type='email' variant='outlined' sx={ { width: 1 } } />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField required label='Password' type='password' variant='outlined' sx={ { width: 1 } } />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <Button fullWidth variant='contained'>sign up</Button>
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
                </Grid>
            </Paper>


        </Box >
    )
}
