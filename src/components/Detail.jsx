import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipamentImage from '../assets/icons/equipment.png';

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const Detail = ({ exerciseDetail}) => {
  const { bodyPart, gifUrl, id, name, target, equipment } = exerciseDetail;

  const animatedGifUrl = id 
    ? `https://exercisedb.p.rapidapi.com/image?exerciseId=${id}&resolution=360&rapidapi-key=${RAPID_API_KEY}` 
    : gifUrl;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipamentImage,
      name: equipment,
    },
  ]

  return (
    <Stack gap='60px' sx={{flexDirection: { lg: 'row'}, p:'20px', alignItems:'center'}} >
      <img src={animatedGifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{ gap: { lg: '35px', xs:'20px'}}}>
        <Typography variant='h3' textTransform='capitalize'>{name}</Typography>
        <Typography variant='h6'>
          Exercícios mantêm você forte. {' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> é um
          dos melhores exercícios para focar em {target}. Ele ajudará você a melhorar seu{' '}
          humor e ganhar energia.
        </Typography>

        {extraDetail.map((item, index) => (
          <Stack key={index} direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
              <img src={item.icon} alt={item.name} style={{width:'50px', height:'50px'}}/>
            </Button>
            <Typography  textTransform='capitalize' variant='h6'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail