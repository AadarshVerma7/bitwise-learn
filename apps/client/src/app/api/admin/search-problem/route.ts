//

import axiosInstance from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const backendUrl = `${process.env.BACKEND_URL}/api/v1/problems/search-question`;

    const response = await axiosInstance.post(backendUrl, data);

    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 400 },
    );
  }
}
