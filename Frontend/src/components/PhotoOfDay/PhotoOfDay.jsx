import React, { useState, useEffect } from 'react';

const PhotoOfDay = () => {
  const [photo, setPhoto] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=rvdrtDUQShdulgdVlFMKQ2bfzeHsrse6nselJoq3&date=${date}`);
        const data = await response.json();
        setPhoto(data);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    if (date) {
      fetchPhoto();
    }
  }, [date]);

  return (
    <div className="">
      <div className="">
        <div style={{ marginLeft: '4rem' }}>
          <h1 style={{ marginTop: '0.1rem', fontSize: '7rem', fontWeight: 'bold', color: 'black', textAlign: 'center', whiteSpace: 'nowrap', textShadow: '0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 8px white'}}>Photo of the Day</h1>
          <div data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-center mb-8">
            <div style={{ width: '50%', marginRight: '8rem' }}>
              <p style={{ fontSize: '1rem', color: 'white', textAlign: 'justify' }}>"Welcome to NASA's Photo of the Day Delve into the captivating world of space exploration with our daily showcase of mesmerizing images captured by NASA's satellites, rovers, and telescopes. From stunning views of Earth to breathtaking snapshots of distant galaxies, each photo offers a unique glimpse into the wonders of the universe. Join us in exploring the cosmos and experience the beauty and majesty of space firsthand. <a style={{ fontSize: '1rem', color: 'white', textShadow: '0 0 2px black, 0 0 4px black, 0 0 6px black, 0 0 8px black'}}>Add the Date to embark on a cosmic journey and immerse yourself in the awe-inspiring sights of NASA's Photo of the Day!"</a></p>
            </div>
            <div style={{ width: '50%' }}>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: '80%', padding: '0.75rem 1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)', outline: 'none', color: '#1f2937', backgroundColor: '#f9fafb', cursor: 'pointer' }}
                placeholder="Select a date"
              />
            </div>
          </div>
        </div>
        <hr/>
        <div className="mb-8" style={{ marginRight: '4rem' }}>
          {photo && (
            <div style={{ marginLeft: '4rem' }}>
              <h2 style={{ color:'white' ,fontSize: '2rem', fontWeight: '600', marginBottom: '0.5rem' ,textAlign: 'center'}}>{photo.title}</h2>
              <img src={photo.url} alt={photo.title} style={{ width: '90vw', height: '45vw', marginBottom: '1rem',border: '8px solid #FFFFFF'  }} /> {/* Adjusted width here */}
              <p style={{ textAlign: 'justify' ,fontSize: '1.3rem',color: 'white' }}>{photo.explanation}</p>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: '80%', padding: '0.75rem 1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)', outline: 'none', color: '#1f2937', backgroundColor: '#f9fafb', cursor: 'pointer' }}
                placeholder="Select a date"
              />
            </div>
            
          )}
          
        </div>
      </div>
    </div>
  );
};

export default PhotoOfDay;
