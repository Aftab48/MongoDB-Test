import { createUser, getAllUsers } from "@/lib/actions/users.actions";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}

export async function POST(request) {
  const data = await request.json();
  const user = await createUser(data);
  return NextResponse.json(user, { status: 201 });
}
