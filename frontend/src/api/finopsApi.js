import axios from "axios";

const api = axios.create({
  baseURL:
    "https://v6otqa5d5i.execute-api.us-east-1.amazonaws.com/prod",
});

export async function askFinopsAI(message) {

  const response = await api.post(
    "/chat",
    {
      message,
    }
  );

  return response.data;
}