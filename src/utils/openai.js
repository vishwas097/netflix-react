import OpenAI from 'openai';
import { OPEN_KEY } from './constants';

const openai = new OpenAI({
  apiKey: "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", 
  dangerouslyAllowBrowser: true
});

export default openai;