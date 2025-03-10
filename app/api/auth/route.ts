import { NextResponse } from 'next/server';
import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://msgbuild-os73gm1h.authentication.eu10.hana.ondemand.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

export async function POST() {


  try {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET1 + "$" + process.env.NEXT_PUBLIC_CLIENT_SECRET2;
    const grantType = process.env.NEXT_PUBLIC_CLIENT_GRANT_TYPE;

    if (!clientId || !clientSecret || !grantType) {
      return NextResponse.json(
        { error: 'OAuth credentials not configured' },
        { status: 500 }
      );
    }

    const data = {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: grantType
    };

    
    const response = await authApi.post('/oauth/token', data);
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Token fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to obtain access token' },
      { status: 500 }
    );
  }
}
