import { Story, Image, APIError } from '../types';

// Generate a unique ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Format date to a readable string
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

// Truncate long text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Create a new Story object
export const createStory = (content: string): Story => ({
  id: generateId(),
  content,
  createdAt: new Date(),
});

// Create a new Image object
export const createImage = (url: string): Image => ({
  id: generateId(),
  url,
  createdAt: new Date(),
});

// Create an APIError object
export const createAPIError = (message: string, code: string): APIError => ({
  message,
  code,
});

// Delay function for simulating API calls
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

// Simple input validation
export const isValidPrompt = (prompt: string): boolean => 
  prompt.trim().length > 0 && prompt.trim().length <= 500;