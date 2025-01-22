// src/api.js
const API_URL = "http://localhost:5000/api/auth/login"; // Endpoint-ul backend-ului

export async function login(email, password) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Autentificare eșuată. Verificați email-ul și parola.");
  }

  return await response.json(); // Returnează token-ul sau alte date
}
