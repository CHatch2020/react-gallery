import Axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

import GalleryList from './galleryList/galleryList';



function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGallery();
  },[]);
  
  const getGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((res) => {
      console.log('This is the gallery list', res.data);
      setGalleryList(res.data);
    }).catch((err) => {
      console.log('Error in Axios GET', err);
    })
  };

  const updateLikes = (id) => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((res) => {
      console.log('Updating likes in Axios PUT', res);
      getGallery();
    }).catch((err) => {
      console.log('Error in Axios PUT', err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} updateLikes={updateLikes}/>
      </div>
    );
}

export default App;
