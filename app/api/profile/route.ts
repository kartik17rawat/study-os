import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Task from "@/models/Task";

export async function GET() {
  try {
    await connectDB();

    const user = await User.findOne();

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const totalTasks = await Task.countDocuments();

    const completedTasks = await Task.countDocuments({
      completed: true,
    });

    return NextResponse.json({
      name: user.name,
      email: user.email,
      dailyGoal: user.studyGoal,
      streak: 0,
      totalTasks,
      completedTasks,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}