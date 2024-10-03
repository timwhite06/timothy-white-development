import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongo/mongo_connection';

export async function GET() {
  const con = await connectToDatabase();
  console.log('hit db connect', new Date().getSeconds());
  return new NextResponse('connected and disconnected');

  //   return NextResponse.json({ messsage: "Hello World" });
}
