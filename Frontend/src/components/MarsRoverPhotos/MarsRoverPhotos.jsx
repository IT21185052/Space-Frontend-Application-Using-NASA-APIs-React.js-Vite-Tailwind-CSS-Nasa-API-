import React, { useState, useEffect } from 'react';

const MarsRoverPhotos = () => {
 const [photos, setPhotos] = useState([]);
 const [showImages, setShowImages] = useState(false);
 const [selectedPhoto, setSelectedPhoto] = useState(null);

 const fetchPhotos = async () => {
    try {
      const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=rvdrtDUQShdulgdVlFMKQ2bfzeHsrse6nselJoq3');
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
 };

 const handleShowImages = () => {
    fetchPhotos();
    setShowImages(true);
 };

 const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
 };

 return (
    <div className="">
      <div style={{ marginLeft: '4rem' }}>
        <h1 style={{ marginTop: '0.1rem', fontSize: '7rem', fontWeight: 'bold', color: 'black', textAlign: 'center', whiteSpace: 'nowrap', textShadow: '0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 8px white'}}>Mars Rover Photos</h1>
        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-center mb-8">
          <div style={{ width: '50%', marginRight: '8rem' }}>
            <p style={{ fontSize: '1rem', color: 'white', textAlign: 'justify' }}>Explore the rugged and mysterious terrain of Mars through the lens of NASA's Mars rover photos. Delve into the captivating world of space exploration as you embark on a visual journey across the Red Planet's surface, witnessing breathtaking landscapes, intriguing geological formations, and the remnants of ancient environments. These photos, captured by NASA's rovers, provide invaluable insights into Mars' history, geology, and potential habitability, fueling our curiosity and imagination about the possibilities of life beyond Earth. Join us in unraveling the mysteries of Mars and marvel at the stunning images that reveal the secrets of our neighboring planet. <a style={{ fontSize: '1rem', color: 'white', textShadow: '0 0 2px black, 0 0 4px black, 0 0 6px black, 0 0 8px black'}}>Add the Date to embark on a cosmic journey and immerse yourself in the awe-inspiring sights of NASA's Photo of the Day!"</a></p>
          </div>
          <div style={{ width: '50%' }}>
            <button onClick={handleShowImages} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: '80%', padding: '0.75rem 1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)', outline: 'none', color: '#1f2937', backgroundColor: '#f9fafb', cursor: 'pointer' }}>
              Show Images
            </button>
          </div>
        </div>
      </div>
      <hr/>
      {showImages && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {photos.map((photo, index) => (
            <div key={photo.id} style={{ position: 'relative', width: '200px', height: '200px' }}>
              <img
                src={photo.img_src}
                alt={photo.id}
                onClick={() => handlePhotoClick(photo)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
              />
              {selectedPhoto === photo && (
                <div style={{ position: 'absolute', bottom: 0, left: 0, background: 'rgba(0,0,0,0.5)', color: 'white', padding: '5px' }}>
                 <p>{photo.earth_date}</p>
                 <p>{photo.camera.full_name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
 );
};

export default MarsRoverPhotos;
