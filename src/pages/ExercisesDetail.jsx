import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData.jsx';
import Detail from '../components/Detail.jsx';
import ExerciseVideos from '../components/ExerciseVideos.jsx';
import SimilarVideos from '../components/SimilarVideos.jsx';


const ExercisesDetails = () => {
  const [ exerciseDetail, setExerciseDetail ] = useState({});
  const [ exerciseVideo, setExerciseVideo ] = useState([]);
  const [ targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [ equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const ytSearchExercise =  'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // const exerciseVideosData = await fetchData(`${ytSearchExercise}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      // setExerciseVideo(exerciseVideosData.contents);
      if (exerciseDetailData?.name) {
        const exerciseVideosData = await fetchData(
          `${ytSearchExercise}/search?query=${exerciseDetailData.name}`, 
          youtubeOptions
        );
        // Salva apenas a lista contida em .contents
        setExerciseVideo(exerciseVideosData.contents);
      }

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);

      if (exerciseDetailData?.equipment) {
        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment.trim()}`, 
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      }
    } 

    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
      <SimilarVideos targetMuscleExercises={targetMuscleExercises}
                    equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExercisesDetails