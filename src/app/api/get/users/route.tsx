// app/api/users/route.js

import connectToDatabase from '@/lib/mongo/mongo_connection';
import User from '@/lib/mongo/models/User';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await connectToDatabase();

    const users = await User.find({}); // .lean() returns plain JavaScript objects instead of Mongoose documents
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
