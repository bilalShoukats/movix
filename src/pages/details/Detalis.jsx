import React from 'react'
import { useParams } from 'react-router-dom';
import "./style.scss";
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videoSction/VideosSection';
import Recommendation from './carousels/Recommendation';
import Similar from './carousels/Similar';


const  Detalis= () =>{

   const { mediaType, id} = useParams()
   const {data, loading}=useFetch(`/${mediaType}/${id}/videos`)
   const {data: credits, creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
    <DetailsBanner video={data?.results?.[0]}  crew={credits?.crew} />
     <Cast data={credits?.cast} loading={ creditsLoading }/>
      <VideosSection data={data} loading={ loading }/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Detalis