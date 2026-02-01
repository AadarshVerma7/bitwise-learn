import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const token = req.cookies.get("token") || "";
    if (!token) throw new Error("Token not found");
    const cookieHeader = req.headers.get("cookie");
    const res = await fetch(
      `${process.env.BACKEND_URL}/api/v1/courses/get-course-enrollments/${id}`,
      {
        headers: {
          Cookie: cookieHeader || "",
        },
        credentials: "include",
      },
    );

    let data = await res.json();
    const output = data.data.data;
    const resultArray = data.data.data.filter((enrollment: any) => {
      return enrollment.institution.id === id;
    });

    const responseResult = {
      data: {
        course: data.data.course,
        data: resultArray,
      },
    };
    return NextResponse.json(responseResult.data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
