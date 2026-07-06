import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Test from "@/models/Test";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const test = await Test.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    return NextResponse.json(test);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    await Test.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Test deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}