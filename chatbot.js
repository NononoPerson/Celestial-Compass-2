
// Main function to get a reply
async function getAnswer(question) {
  const trimmedQuestion = question.trim();
  const answer = zodiacBotQA[trimmedQuestion];

  if (answer) {
    return `🧿 ZodiacVerseGpt: ${answer}`;
  } else {
    const wikiAnswer = await fetchFromWikipedia(trimmedQuestion);
    return wikiAnswer || "🧿 ZodiacVerseGpt: Sorry, I couldn't find an answer.";
  }
}

// Fallback function using Wikipedia API
async function fetchFromWikipedia(query) {
  try {
    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) return null;

    const data = await response.json();

    if (data.extract) {
      return `🌐 Wikipedia says: ${data.extract}`;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
