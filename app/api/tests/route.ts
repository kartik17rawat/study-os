import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Test from "@/models/Test";

export async function GET() {
  try {
    await connectDB();

    const tests = await Test.find().sort({
      testDate: -1,
    });

    return NextResponse.json(tests);
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

    const test = await Test.create(body);

    return NextResponse.json(test, {
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}