// app/api/users/route.ts
import { NextResponse } from 'next/server';
import users from '@/app/data/admin.json';

export async function GET() {
  return NextResponse.json(users);
}

