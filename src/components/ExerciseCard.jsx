import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const ExerciseCard = ({ exercise }) => {
    const gifUrlFallback = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exercise.id}&resolution=180&rapidapi-key=${RAPID_API_KEY}`;

  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={gifUrlFallback} alt={exercise.name} loading='lazy'
        style={{ minHeight: '360px'}}/>
        <Stack direction='row'>
            <Button sx={{ ml:'21px',color:'#fff', 
                background:'#ffa9a9', fontSize:'14px',
                borderRadius: '20px', textTransform:'capitalize'
            }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml:'21px',color:'#fff', 
                background:'#fcc757', fontSize:'14px',
                borderRadius: '20px', textTransform:'capitalize'
            }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px'
            pb='10px' textTransform='capitalize' fontSize='22px'>
                {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard