import { Emotion } from "./Emotion";

export interface ISentimentAnalyzer {
  analyze(text: string): Promise<Emotion[]>;
}
