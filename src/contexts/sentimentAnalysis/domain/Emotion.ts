export enum EmotionType {
  ALEGRIA = "alegria",
  TRISTEZA = "tristeza",
  RAIVA = "raiva",
  MEDO = "medo",
  SURPRESA = "surpresa",
  NOJO = "nojo",
  NEUTRO = "neutro",
}

export class Emotion {
  constructor(
    public readonly emotionType: EmotionType,
    public readonly confidence: number
  ) {}
}
