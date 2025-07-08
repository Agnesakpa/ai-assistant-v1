const responses = [
  {
    keywords: ["what is fire stick", "what does fire stick do", "about fire stick", "fire stick", "firestick"],
    reply: "Fire Stick is a mosquito-repellent candle. It kills mosquitoes using a scent that's safe for humans but lethal to mosquitoes."
  },
  {
    keywords: ["safe for humans", "harmful to humans", "toxic", "is fire stick safe", "harmful to mosquitoes"],
    reply: "Yes, Fire Stick is completely safe for humans. Only mosquitoes are affected by its scent."
  },
  {
    keywords: ["how long", "how many minutes", "how fast", "start working"],
    reply: "Fire Stick starts killing mosquitoes within 5 minutes after you light it."
  },
  {
    keywords: ["price", "cost", "how much", "naira"],
    reply: "Each Fire Stick costs just 20 Naira."
  },
  {
    keywords: ["where can i buy", "available", "location", "distribute", "sell", "get", "find"],
    reply: "Fire Stick is distributed nationwide in Nigeria and can be made available in your area."
  }
];

function sendMessage() {
  const input = document.getElementById("user-input");
  const output = document.getElementById("chat-output");

  const userMessage = input.value.trim();
  const lowerMessage = userMessage.toLowerCase();
  if (!userMessage) return;

  // Show user message
  output.innerHTML += `<div class="message user">You: ${userMessage}</div>`;
  input.value = "";

  // Try to find a match
  let found = false;
  for (const item of responses) {
    for (const keyword of item.keywords) {
      if (lowerMessage.includes(keyword)) {
        output.innerHTML += `<div class="message bot">Oshanodes Assistant: ${item.reply}</div>`;
        found = true;
        break;
      }
    }
    if (found) break;
  }

  // Fallback if no match
  if (!found) {
    output.innerHTML += `<div class="message bot">Oshanodes Assistant: Sorry, I don’t have an answer to that yet.</div>`;
  }
}
document.getElementById("user-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
