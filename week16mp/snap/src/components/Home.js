import Menu from "./Menu";
import { Link } from "react-router-dom";
import './Home.css';
import Search from "./Search";

import ImageGallery from "./Images"

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Acceuil = () => {

  const { name } = useParams();
  const [images, setImages] = useState([]);
  const [category, setcategory] = useState(name);

  const apiKey="55LNQGpFWUiXHMpbIwovhP9ktLvdbH4mtRD9DjMhwaQbHH7YZmtlkehp";


  useEffect(() => {
    
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${name}&per_page=30`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [name]);


  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=30`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      setImages(data.photos);
      setcategory(searchTerm)
    } catch (error) {
      console.error(error);
    }
  };


    return (
      <div>
        <h1>Home Page</h1>
        <Search handleSearch ={handleSearch} />
        <Menu  />
        <h1 className="name">{category} Page</h1>
        <ImageGallery images={images} />
        
      </div>
    );
  };
  
  export default Acceuil;