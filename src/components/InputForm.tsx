import React from 'react';

interface InputFormProps {
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ prompt, onPromptChange, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label htmlFor="prompt">Enter a story prompt:</label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Once upon a time..."
        rows={4}
        required
      />
      <button type="submit" disabled={isLoading || !prompt.trim()}>
        {isLoading ? 'Generating...' : 'Generate Story'}
      </button>
    </form>
  );
};

export default InputForm;