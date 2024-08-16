const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
const Replicate = require('replicate');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

app.post('/api/generate-story', async (req: any, res: any) => {
  try {
    const { prompt } = req.body;
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 8192,
      temperature: 1,
      messages: [
        {
          role: "user",
          content: "You are a creative storyteller for children. Your task is to generate a short, engaging story based on the given prompt. The story should be suitable for children and contain elements of imagination and wonder.\n\n" + `<prompt> ${prompt} </prompt>`,
        },
      ]
    }, {
      headers: {
        "anthropic-beta": "max-tokens-3-5-sonnet-2024-07-15"
      }
    });

    const storyContent = response.content[0].text;

    // Generate image using Replicate
    const imagePrompt = `Illustration for a children's story: ${storyContent.substring(0, 200)}...`;
    const imageOutput = await replicate.run("black-forest-labs/flux-pro", { 
      input: { prompt: imagePrompt }
    });

    res.json({
      story: {
        id: response.id,
        content: storyContent,
        createdAt: new Date(response.created_at)
      },
      image: {
        url: imageOutput
      }
    });
  } catch (error) {
    console.error('Error generating story and image:', error);
    res.status(500).json({ error: 'An error occurred while generating the story and image' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
