import React, { useEffect, useState } from 'react'
import { Grid, Container, Typography, Paper, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CandidateDetails from './candidateDetails';
import CourtSearch from './courtSearch';
import { Link } from 'react-router-dom';


const CandidateInfo = () => {
    const [engage, setEngage] = useState(false);
    useEffect(() => {
        setEngage(true);
        // console.log(engage);
    }, [engage]);

    return (
        <Container sx={{ paddingTop: '20px' }}>
            <br />
            <Grid container component={Container} direction='row' spacing={1} sx={{ paddingBottom: '30px' }}>
                <Grid item>
                    <Link to='/' style={{ color: 'black' }}><ArrowBackIcon /></Link>
                </Grid>
                <Grid item>
                    <Typography variant='h6'> John Smith </Typography>
                </Grid>
                <Grid sm={10}>
                    <Box display="flex" justifyContent="flex-end">
                        <Grid item>
                            <Button
                                size='small'
                                sx={{ bgcolor: 'white', color: 'black', textTranfrom: 'capitalize' }}>
                                Pre-Adverse Action
                            </Button>
                        </Grid>
                        <Grid item>
                            {/* <Button
                                onClick={() => handleEngageButton()}
                                variant='contained' size='small'
                                sx={{ color: 'white', textTranfrom: 'capitalize' }}> */}
                                <Link to='/' state={{ engage }} style={{ /*color: 'white',*/  textDecoration: 'none' }}>
                                    Engage
                                </Link>
                            {/* </Button> */}
                        </Grid>
                    </Box>
                </Grid>

            </Grid>
            <Paper><CandidateDetails title='Candidate Information' /></Paper>
            <Container sx={{ paddingBottom: '50px' }}></Container>
            <Paper><CandidateDetails title='Report Information' /></Paper>
            <Container sx={{ paddingBottom: '50px' }}></Container>
            <CourtSearch />
        </Container>
    );
}

export default CandidateInfo;

