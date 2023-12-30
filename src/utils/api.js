import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3'


const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmZhZmU5NjgwNDBmMmMzMGYwYTIwNzY4Zjg2ZmUxOCIsInN1YiI6IjY1OGE4NTNhYjdiNjlkMDhiMzZlNDNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9C0n3DGTNjkNMRpyIzfgt_mvh_KTCHFJvxQfrIS-SK4";

const headers = {
    Authorization: "bearer "+
    TMDB_TOKEN,
}



export const fetchDataFromApi= async(url, params)=>{
    try{
   const {data} = await axios.get(BASE_URL + url,{
    headers,
    params
   })
    return data

    }catch(err){
        console.log(err);
        return err;
    }
}

