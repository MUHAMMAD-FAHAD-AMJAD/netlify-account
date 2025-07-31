import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({apiKey: "AIzaSyCtki8H33DPpTger2DCYuNFftvdhmcpHnU"})],
  model: 'googleai/gemini-2.5-pro',
});
