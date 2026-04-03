'use server';
/**
 * @fileOverview A GenAI tool to generate suggestions for improving landing page content.
 *
 * - getLandingPageOptimizationSuggestions - A function that generates optimization suggestions for landing page elements.
 * - LandingPageOptimizationInput - The input type for the getLandingPageOptimizationSuggestions function.
 * - LandingPageOptimizationOutput - The return type for the getLandingPageOptimizationSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LandingPageOptimizationInputSchema = z.object({
  currentPageTitle: z
    .string()
    .describe('The current title of the landing page.'),
  currentPageValueProposition: z
    .string()
    .describe('The current value proposition on the landing page.'),
  currentPageCallToAction: z
    .string()
    .describe('The current call to action on the landing page.'),
  targetAudience: z
    .string()
    .optional()
    .describe('The target audience for the landing page.'),
  desiredOutcome: z
    .string()
    .optional()
    .describe('The desired outcome or conversion goal for the landing page.'),
});
export type LandingPageOptimizationInput = z.infer<
  typeof LandingPageOptimizationInputSchema
>;

const LandingPageOptimizationOutputSchema = z.object({
  optimizedTitleSuggestions: z
    .array(z.string())
    .describe('An array of suggested optimized titles for the landing page.'),
  optimizedValuePropositionSuggestions: z
    .array(z.string())
    .describe(
      'An array of suggested optimized value propositions for the landing page.'
    ),
  optimizedCallToActionSuggestions: z
    .array(z.string())
    .describe(
      'An array of suggested optimized calls to action for the landing page.'
    ),
  generalOptimizationTips: z
    .array(z.string())
    .optional()
    .describe(
      'General tips for improving click-through rates and conversions.'
    ),
});
export type LandingPageOptimizationOutput = z.infer<
  typeof LandingPageOptimizationOutputSchema
>;

const prompt = ai.definePrompt({
  name: 'landingPageOptimizationPrompt',
  input: {schema: LandingPageOptimizationInputSchema},
  output: {schema: LandingPageOptimizationOutputSchema},
  prompt: `You are an expert marketing consultant specializing in landing page optimization. Your goal is to help a marketing manager increase click-through rates and conversion for their landing page.

Analyze the provided landing page elements and suggest modifications for the title, value proposition, and calls to action. Provide at least 3 distinct suggestions for each, focusing on clarity, impact, and persuasion.

Consider the following context:

Current Page Title: {{{currentPageTitle}}}
Current Value Proposition: {{{currentPageValueProposition}}}
Current Call to Action: {{{currentPageCallToAction}}}
{{#if targetAudience}}Target Audience: {{{targetAudience}}}{{/if}}
{{#if desiredOutcome}}Desired Outcome: {{{desiredOutcome}}}{{/if}}

Focus on creating compelling and effective alternatives. Provide any additional general optimization tips that could help improve conversion.`,
});

const landingPageOptimizationSuggestionsFlow = ai.defineFlow(
  {
    name: 'landingPageOptimizationSuggestionsFlow',
    inputSchema: LandingPageOptimizationInputSchema,
    outputSchema: LandingPageOptimizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function getLandingPageOptimizationSuggestions(
  input: LandingPageOptimizationInput
): Promise<LandingPageOptimizationOutput> {
  return landingPageOptimizationSuggestionsFlow(input);
}
