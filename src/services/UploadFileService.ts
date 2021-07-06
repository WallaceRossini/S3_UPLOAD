import { S3Storage } from "../utils/S3Storage";

export class UploadFileService {
  async execute(file: Express.Multer.File): Promise<string>{
    const s3Storage = new S3Storage;

    const url = await s3Storage.saveFile(file.filename)

    return url
  }
}