import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export async function searchProblem(query: string) {
  if (query.trim().length === 0) {
    toast.error("search cannot be empty");
  }
  const data = await axiosInstance.post("/api/admin/search-problem", {
    query,
  });

  return data.data;
}
