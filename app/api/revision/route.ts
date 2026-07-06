import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Revision from "@/models/Revision";

export async function GET() {
  try {
    await connectDB();

    const revisions = await Revision.find().sort({
      subject: 1,
      createdAt: 1,
    });

    return NextResponse.json(revisions);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const revision = await Revision.create(body);

    return NextResponse.json(revision, {
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}