import { AdvancedSentimentAnalyzer } from "../domain/AdvancedSentimentAnalyzer";
import { Emotion } from "../domain/Emotion";

export class AnalyzeText {
  private sentimentAnalyzer: AdvancedSentimentAnalyzer;

  constructor(sentimentAnalyzer: AdvancedSentimentAnalyzer) {
    this.sentimentAnalyzer = new AdvancedSentimentAnalyzer();
  }

  async execute(text: string): Promise<Emotion[]> {
    return this.sentimentAnalyzer.analyze(text);
  }
}
