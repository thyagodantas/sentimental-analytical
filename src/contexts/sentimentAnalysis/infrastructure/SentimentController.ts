import { Request, Response } from "express";
import { AnalyzeText } from "../application/AnalyzeText";
import { AdvancedSentimentAnalyzer } from "../domain/AdvancedSentimentAnalyzer";

export class SentimentController {
  static async analyze(req: Request, res: Response) {
    const { text } = req.body;
    const sentimentAnalyzer = new AdvancedSentimentAnalyzer();
    const analyzeText = new AnalyzeText(sentimentAnalyzer);

    const emotions = await analyzeText.execute(text);

    return res.json({
      emotions: emotions.map((emotion) => ({
        emotion: emotion.emotionType,
        confidence: emotion.confidence,
      })),
    });
  }
}
