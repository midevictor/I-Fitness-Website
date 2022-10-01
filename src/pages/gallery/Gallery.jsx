import React from 'react'
import "./Gallery.css"
import HeaderImage from "../../images/header_bg_3.jpg"
import Header from "../../components/Header";

function Gallery() {

  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));   
  }

  return (
    <>
    <Header title='Gallery' image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, labore.
    </Header>

    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Img ${index + 1}`} />
              </article>
          })
        }
      </div>

    </section>
    </>
  )
}

export default Gallery
