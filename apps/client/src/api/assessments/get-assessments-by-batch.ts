import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAssessmentsByBatch = async (statefn: any, paramId: string) => {
  try {
    const getAssessments = await axiosInstance.get(
      "/api/assessment/get-by-batch/" + paramId,
    );
    statefn(getAssessments.data);
  } catch (error) {
    toast.error("error getting assessments");
  }
};
