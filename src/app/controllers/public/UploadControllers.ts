import { Delete, JsonController, Param, Post, UploadedFile, UseBefore } from "routing-controllers";
import multer from "multer";
import configMulter from '../../../configs/multer';
import { UploadFileService } from "../../../services/UploadFileService";
import { DeleteImagesService } from "../../../services/DeleteFileService";

const upload = multer(configMulter)

@JsonController('/file')
export class UploadController {

  @Post('/upload')
  @UseBefore(upload.single('file'))
  public async uploadFile(
    @UploadedFile("file") file: any
  ) {

    const uploadImageService = new UploadFileService();

    const url = await uploadImageService.execute(file);

    return { url }
  }

  @Delete('/delete/:id')
  public async deleteFile(
    @Param('id') filename: string
  ) {
    const deleteImagesService = new DeleteImagesService();

    const url = await deleteImagesService.execute(filename);

    return { url }
  }
}