'use server';
/**
 * @fileOverview An AI flow to analyze contact form submissions.
 *
 * - analyzeContactMessage - A function that analyzes the content of a user's message.
 * - AnalyzeContactMessageInput - The input type for the analysis function.
 * - AnalyzeContactMessageOutput - The return type for the analysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const AnalyzeContactMessageInputSchema = z.object({
  message: z.string().describe('The content of the message from the contact form.'),
});
export type AnalyzeContactMessageInput = z.infer<typeof AnalyzeContactMessageInputSchema>;

export const AnalyzeContactMessageOutputSchema = z.object({
  category: z
    .enum(['Sales Inquiry', 'Support Request', 'Feedback', 'Job Application', 'Spam', 'Other'])
    .describe('The primary category of the message.'),
  sentiment: z
    .enum(['Positive', 'Negative', 'Neutral'])
    .describe('The overall sentiment of the message.'),
  urgency: z
    .boolean()
    .describe('Whether the message seems to require an urgent response.'),
  summary: z.string().describe('A one-sentence summary of the message.'),
});
export type AnalyzeContactMessageOutput = z.infer<typeof AnalyzeContactMessageOutputSchema>;

export async function analyzeContactMessage(input: AnalyzeContactMessageInput): Promise<AnalyzeContactMessageOutput> {
  return analyzeContactMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeContactMessagePrompt',
  input: {schema: AnalyzeContactMessageInputSchema},
  output: {schema: AnalyzeContactMessageOutputSchema},
  prompt: `You are a helpful assistant that analyzes incoming contact form submissions for a video editing company called Glitch Launch. Your task is to categorize the message, determine its sentiment, assess its urgency, and provide a concise summary.

Analyze the following message:

{{{message}}}

Based on the content, provide the structured analysis. A message should be considered urgent if it mentions deadlines, immediate needs, or expresses significant frustration.`,
});

const analyzeContactMessageFlow = ai.defineFlow(
  {
    name: 'analyzeContactMessageFlow',
    inputSchema: AnalyzeContactMessageInputSchema,
    outputSchema: AnalyzeContactMessageOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
