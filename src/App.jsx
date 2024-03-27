import "./App.css"
import imgcard1 from "./assets/img-card1.svg"
import {useEffect, useState} from "react"
import axios from "axios"
import imgsearch from "./assets/img-search.svg"

const App = () => {

  const [images, setImages] = useState([])

  const [inputSearch,setInputSearch] = useState("")

  useEffect(() => {

    axios.get("https://search-component-joao.vercel.app/images").then((response) => setImages(response.data))

  }, [])

  const handleSubmit = (event) => {
      event.preventDefault()

      console.log(inputSearch)

    getImages(inputSearch)

  }

  const getImages = (searchValue) => {

    axios.get("https://search-component-joao.vercel.app/images?category=" + searchValue).then((response) => setImages(response.data))

  }

  return (

    <>
    
      <div className="container-all">

        <form onSubmit={(event) => handleSubmit(event)}>

            <div className="container-input">

                <input placeholder="Street photography" onChange={(event) => setInputSearch(event.target.value)}/>
                <img src={imgsearch} className="img-search"/>

            </div>

            <button>Search</button>

        </form>


              <div className="cards">

                  {images.map((image) => (

                  <div key={image.imageLink}>
                    <img src={image.imageLink} className="img-card"/>
                    <h1 className="h1-card"> {image.photographerName} </h1>
                    <p className="phrase-card"> {image.instagramHandle} </p>
                  </div>

              ))}

              </div>

      </div>

    </>

  )

}


export default App
