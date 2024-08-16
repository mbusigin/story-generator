import React from 'react';

interface StoryDisplayProps {
  story: string;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ story }) => {
  // Split the story into paragraphs
  const paragraphs = story.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <div className="story-display">
      <h2>Your Generated Story</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default StoryDisplay;