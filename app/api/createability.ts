import {NextResponse} from 'next/server';
import axios from "axios";

export default async function handler(req:any, res:any) {
  if (req.method === "POST") {
    try {
      const { role_id, ability } = req.body;

      // Call your Laravel API endpoint
      const apiResponse = await axios.post("http://your-backend-url/api/create-ability", {
        role_id,
        ability,
      });

      return res.status(apiResponse.status).json(apiResponse.data);
    } catch (error) {
      return res.status(500).json({ message: "Server error. Please try again later." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}