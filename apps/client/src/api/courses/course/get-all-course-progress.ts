import axiosInstance from "@/lib/axios";

export const getAllCourseProgress = async () => {
  const res = await axiosInstance.get(
    "/api/course/get-all-course-progress",
  );
  return res.data.data;
};
