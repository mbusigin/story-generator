import React from 'react';

interface ImageDisplayProps {
  imageUrl: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
  return (
    <div className="image-display">
      <h2>Story Illustration</h2>
      <img src={imageUrl} alt="Generated story illustration" />
    </div>
  );
};

export default ImageDisplay;