import { v2 as cloudinary } from "cloudinary";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(filePath: string) {
  const result = await cloudinary.uploader.upload(filePath, {
    resource_type: "raw",
    folder: "assessment-reports",
    use_filename: true,
    unique_filename: false,
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
}
