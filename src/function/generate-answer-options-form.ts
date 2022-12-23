import { AnswerOptions } from 'type/AnswerOptions';

export const generateAnswerOptionsForm = (): AnswerOptions[] =>
  [...Array(201)].map(() => '');
