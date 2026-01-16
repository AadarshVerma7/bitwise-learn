import axiosInstance from "@/lib/axios";

export const getInstituteData = async (statefn: any, paramId: string) => {
    const getInstitution = await axiosInstance.get("/api/institution/" + paramId);
    console.log(getInstitution.data);
    statefn(getInstitution.data);
};
