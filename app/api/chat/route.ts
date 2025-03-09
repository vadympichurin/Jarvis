import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';


const api = axios.create({
    baseURL: 'https://msg-global-solutions-deutschland-gmbh-msgbuild-os73gm1h58dc8842.cfapps.eu10-004.hana.ondemand.com',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'DataServiceVersion': '4.0',
      'OData-MaxVersion': '4.0',
      'OData-Version': '4.0'
    }
  });
  
  export async function POST(request: Request) {
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        console.error('API Key not found in environment variables');
        return NextResponse.json(
          { error: 'API key not configured' },
          { status: 500 }
        );
      }
  
      const body = await request.json();
      
      const response = await api.post('/odata/v4/ai/aiProxy', 
        { prompt: body.prompt },
        { 
          headers: {
            'Authorization': `Bearer ${apiKey}`
          },
          withCredentials: false 
        }
      );
  

      return NextResponse.json(response.data, {
        headers: {
          'Access-Control-Allow-Credentials': 'false'
        }
      });
    } catch (error) {
      console.error('API Error:', error);
      if (error instanceof AxiosError) {
        const status = error.response?.status || 500;
        const message = status === 401 ? 'Authentication failed. Please check API key.' : 'Failed to process request';
        return NextResponse.json(
          { error: message },
          { status }
        );
      }
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }
  