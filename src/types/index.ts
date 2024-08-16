// Story related types
export interface Story {
  id: string;
  content: string;
  createdAt: Date;
}

// Image related types
export interface Image {
  id?: string;
  url: string;
  createdAt?: Date;
}

// API response types
export interface StoryResponse {
  story: Story;
  image: Image;
}

// Error types
export interface APIError {
  message: string;
  code: string;
}

// State types
export interface AppState {
  prompt: string;
  story: Story | null;
  image: Image | null;
  isLoading: boolean;
  error: APIError | null;
}

// API service interface
export interface APIService {
  generateStory: (prompt: string) => Promise<StoryResponse>;
}

// Input form props
export interface InputFormProps {
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

// Story display props
export interface StoryDisplayProps {
  story: string;
}

// Image display props
export interface ImageDisplayProps {
  imageUrl: string;
}