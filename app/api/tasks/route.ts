import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";

export async function GET() {
  try {
    await connectDB();

    const tasks = await Task.find().sort({ createdAt: -1 });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("GET TASKS ERROR:", error);

    return NextResponse.json(
      { message: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    console.log("Incoming Task:", body);

    const task = await Task.create(body);

    console.log("Task Created:", task);

    return NextResponse.json(task, { status: 201 });
  } catch (error: any) {
    console.error("CREATE TASK ERROR:", error);

    return NextResponse.json(
      {
        message: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}