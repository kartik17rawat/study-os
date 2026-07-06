import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Revision from "@/models/Revision";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const revision = await Revision.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    return NextResponse.json(revision);
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

    await Revision.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Revision deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}