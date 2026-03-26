import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinaryUpload } from "./cloudinary.config";
import multer from "multer";
import status from "http-status";
import AppError from "../errorHelper/AppError";
const storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: async (req, file) => {
    if (!file) {
      throw new AppError(status.BAD_REQUEST, "file upload failed");
    }

    const originalName = file.originalname;
    const extension = originalName.split(".").pop()?.toLocaleLowerCase();

    const fileNameWithoutExtension = originalName
      .split(".")
      .slice(0, -1)
      .join(".")
      .toLowerCase()
      .replace(/\s+/g, "-")
      // eslint-disable-next-line no-useless-escape
      .replace(/[^a-z0-9\-]/g, "");

    const uniqueName =
      Math.random().toString(36).substring(2) +
      "-" +
      Date.now() +
      "-" +
      fileNameWithoutExtension;

    const folder = extension === "pdf" ? "pdfs" : "images";

    return {
      public_id: `planora/${folder}/${uniqueName}`,
      folder: `planora/${folder}`,
      resource_type: "auto",
    };
  },
});

const uploadParser = multer({ storage: storage });
