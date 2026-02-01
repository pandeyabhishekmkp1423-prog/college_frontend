import { useEffect, useState } from "react";

const CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

function generateCaptchaText(length = 6) {
  let text = "";
  for (let i = 0; i < length; i++) {
    text += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
  }
  return text;
}

export default function useCaptcha() {
  const [captchaText, setCaptchaText] = useState("");
  const [captchaQuestion, setCaptchaQuestion] = useState("");

  const generate = () => {
    const text = generateCaptchaText();
    setCaptchaText(text);

    // visually scramble (spaces + separators)
    const scrambled = text
      .split("")
      .map((c) => `${c}`)
      .join("  ");

    setCaptchaQuestion(scrambled);
  };

  useEffect(() => {
    generate();
  }, []);

  const validateCaptcha = (input) => {
    return input.trim() === captchaText;
  };

  const regenerateCaptcha = () => {
    generate();
  };

  return {
    captchaQuestion,
    validateCaptcha,
    regenerateCaptcha,
  };
}
