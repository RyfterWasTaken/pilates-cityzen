import { NextRequest, NextResponse} from 'next/server';

const webhook = "https://canary.discord.com/api/webhooks/1221035576010997822/8doMx9QwPJ9mpkRwKY5961v_FMLbKkGAKJiIasaNjT0wH4BbkEkzdhCjzhXt9Nlhmo34";

export async function middleware(req){
  const ua = userAgent(req)?.ua;
  const body = {
    "content": "logged entry"
  }
  await fetch(webhook,{body: JSON.stringify(body), headers:{"content-type":"application/json"}, method:"POST"})
  return NextResponse;
}