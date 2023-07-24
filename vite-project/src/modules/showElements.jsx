import React from 'react'

export const Preview = ({ data }) => {

  const  { title, description, seasons, image, genres, updated } = data


  
    const wordsArray = description.trim().split(/\s+/);
    const first10Words = wordsArray.slice(0, 10);
    const resultString = first10Words.join(' ');
  


  return (

    <sl-card className="card-overview grid-item" >
      <div className="grid-container">  
        <div className="preview-image-container">
          <img className="preview-image"
          slot="image"
          src={image}
          alt="cover photo"
         />
        </div>

        <div className="preview-body">
        <strong>{title}</strong>
        

        <p>{resultString}...</p>
        </div>  
        <div slot="footer" className="preview-footer">
        <sl-button  size="small">view more</sl-button>
        <sl-rating ></sl-rating>
        </div>
      </div>
    </sl-card>






  );
};
