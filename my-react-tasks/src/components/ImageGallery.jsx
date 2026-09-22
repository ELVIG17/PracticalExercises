import React from 'react';

const ImageGallery = () => {
  // Стили для выравнивания картинок в ряд
  const galleryStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginTop: '10px'
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px'
  };

  return (
    <div style={galleryStyle}>
      <img 
        src="https://picsum.photos/200/200?random=1" 
        alt="Случайное изображение 1" 
        style={imageStyle} 
      />
      <img 
        src="https://picsum.photos/200/200?random=2" 
        alt="Случайное изображение 2" 
        style={imageStyle} 
      />
      <img 
        src="https://picsum.photos/200/200?random=3" 
        alt="Случайное изображение 3" 
        style={imageStyle} 
      />
    </div>
  );
};

export default ImageGallery;