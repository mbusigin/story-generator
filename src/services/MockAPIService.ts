// Simulating delay for API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MockAPIService = {
  generateStory: async (prompt: string): Promise<string> => {
    // Simulate API delay
    await delay(2000);

    // Simple story generation logic
    const stories = [
      `Once upon a time, in a world inspired by "${prompt}", there was a brave hero who embarked on an epic journey...`,
      `In a distant galaxy, where "${prompt}" was a reality, an unlikely group of friends found themselves on an incredible adventure...`,
      `Deep in an enchanted forest, where "${prompt}" was whispered by the trees, a curious child discovered a magical secret...`
    ];

    return stories[Math.floor(Math.random() * stories.length)];
  },

  generateImage: async (story: string): Promise<string> => {
    // Simulate API delay
    await delay(3000);

    // Simple image URL generation logic
    const imageUrls = [
      'https://picsum.photos/seed/story1/400/300',
      'https://picsum.photos/seed/story2/400/300',
      'https://picsum.photos/seed/story3/400/300'
    ];

    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  }
};