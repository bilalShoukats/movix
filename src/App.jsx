import { useEffect, useState } from 'react'
import {fetchDataFromApi} from  './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import {getApiConfiguration,getGenres  } from './Store/homeSlice'
import './App.css'
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Detalis from './pages/details/Detalis';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/Page404/PageNoFound';


function App() {

  const dispatch = useDispatch()
  const {url}= useSelector((state)=>state.home)
  console.log(url,'rrr')
  useEffect(()=>{
    fetchApiConfig()
    genresCall()
  },[]);


const fetchApiConfig = ()=>{
  fetchDataFromApi('/configuration').then((res)=>{
    console.log(res)

    const url = {
      backdrop:res.images.secure_base_url + "original",
      poster:res.images.secure_base_url + "original",
      profile:res.images.secure_base_url + "original"

    }
    dispatch(getApiConfiguration(url))
  })
}

    const genresCall = async ()=>{

      let promises = []
      let endPointsApi = ["tv","movie"]
      let allGenres = {}

      endPointsApi.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
         
      })
      const data = await Promise.all(promises);
      data.map(({genres})=>{
        return genres.map((item)=>(allGenres[item.id]= item))
      })
      console.log('allGenres',allGenres)
      dispatch(getGenres(allGenres))
    }   

  return (
     
      <div className='App'>
        <BrowserRouter>

        <Header/>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/:mediaType/:id' element={<Detalis/> }/>
        <Route path='/search/:query' element={ <SearchResult/>  }/>
        <Route path='/explore/:mediaType' element={<Explore/> }/>
        <Route path='*' element={<PageNotFound/> }/>

        </Routes>
        <Footer/>
        </BrowserRouter>


      </div>
        

  )
}

export default App;
