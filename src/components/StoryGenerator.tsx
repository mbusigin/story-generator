import React, { useState } from 'react';
import InputForm from './InputForm';
import StoryDisplay from './StoryDisplay';
import ImageDisplay from './ImageDisplay';
import { ClaudeService } from '../services/ClaudeService';

const claudeService = new ClaudeService('http://localhost:3001');

const StoryGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [story, setStory] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePromptChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  const generateStory = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await claudeService.generateStory(prompt);
      setStory(response.story.content);
      setImageUrl(response.image.url);
    } catch (err) {
      setError('An error occurred while generating the story and image.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="story-generator">
      <InputForm
        prompt={prompt}
        onPromptChange={handlePromptChange}
        onSubmit={generateStory}
        isLoading={isLoading}
      />
      {error && <div className="error">{error}</div>}
      {story && <StoryDisplay story={story} />}
      {imageUrl && <ImageDisplay imageUrl={imageUrl} />}
    </div>
  );
};

export default StoryGenerator;