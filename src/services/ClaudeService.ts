import { StoryResponse, APIError } from '../types';

export class ClaudeService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async generateStory(prompt: string): Promise<StoryResponse> {
        try {
            const response = await fetch(`${this.apiUrl}/api/generate-story`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            console.error('Error generating story:', error);
            throw this.handleError(error);
        }
    }

    private handleError(error: any): APIError {
        return {
            message: error.message || 'An unexpected error occurred',
            code: 'UNKNOWN'
        };
    }
}