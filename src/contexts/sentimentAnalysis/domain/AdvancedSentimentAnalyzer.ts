import Sentiment from "sentiment";
import { Emotion, EmotionType } from "./Emotion";
import { ISentimentAnalyzer } from "./SentimentAnalyzer";

export class AdvancedSentimentAnalyzer implements ISentimentAnalyzer {
  private sentiment: Sentiment;

  constructor() {
    this.sentiment = new Sentiment();
  }

  async analyze(text: string): Promise<Emotion[]> {
    const result = this.sentiment.analyze(text);
    const emotions: Emotion[] = [];
    const textLower = text.toLowerCase();

    // Baseando na pontuação total do texto e arredondando a confiança
    let baseScore = parseFloat((Math.abs(result.score) / 10).toFixed(2));

    // Ajustar o baseScore com base na intensidade de palavras-chave positivas ou negativas
    if (textLower.includes("muito") || textLower.includes("extremamente")) {
      baseScore = parseFloat((baseScore * 1.5).toFixed(2));
    } else if (textLower.includes("um pouco") || textLower.includes("ligeiramente")) {
      baseScore = parseFloat((baseScore * 0.75).toFixed(2));
    }

    // Determinando emoções básicas com base no score
    if (result.score > 0) {
      emotions.push(new Emotion(EmotionType.ALEGRIA, baseScore));
    } else if (result.score < 0) {
      emotions.push(new Emotion(EmotionType.TRISTEZA, baseScore));
    } else {
      emotions.push(new Emotion(EmotionType.NEUTRO, 0.50));
    }

    // Detecção de palavras-chave com pesos e ajustes de confiança
    if (textLower.includes("raiva") || textLower.includes("furioso")) {
      let confidence = 0.8;
      if (textLower.includes("muito raiva") || textLower.includes("extremamente furioso")) {
        confidence = 0.9;
      } else if (textLower.includes("um pouco raiva") || textLower.includes("ligeiramente furioso")) {
        confidence = 0.7;
      }
      emotions.push(new Emotion(EmotionType.RAIVA, confidence));
    }

    if (textLower.includes("medo") || textLower.includes("assustado")) {
      let confidence = 0.7;
      if (textLower.includes("muito medo") || textLower.includes("extremamente assustado")) {
        confidence = 0.85;
      } else if (textLower.includes("um pouco medo") || textLower.includes("ligeiramente assustado")) {
        confidence = 0.6;
      }
      emotions.push(new Emotion(EmotionType.MEDO, confidence));
    }

    if (textLower.includes("surpresa") || textLower.includes("chocado")) {
      let confidence = 0.7;
      if (textLower.includes("muito surpresa") || textLower.includes("extremamente chocado")) {
        confidence = 0.85;
      } else if (textLower.includes("um pouco surpresa") || textLower.includes("ligeiramente chocado")) {
        confidence = 0.6;
      }
      emotions.push(new Emotion(EmotionType.SURPRESA, confidence));
    }

    if (textLower.includes("nojo") || textLower.includes("repulsa")) {
      let confidence = 0.7;
      if (textLower.includes("muito nojo") || textLower.includes("extremamente repulsa")) {
        confidence = 0.85;
      } else if (textLower.includes("um pouco nojo") || textLower.includes("ligeiramente repulsa")) {
        confidence = 0.6;
      }
      emotions.push(new Emotion(EmotionType.NOJO, confidence));
    }

    // Garantindo que pelo menos uma emoção seja capturada
    if (emotions.length === 0) {
      emotions.push(new Emotion(EmotionType.NEUTRO, 0.50));
    }

    return emotions;
  }
}
