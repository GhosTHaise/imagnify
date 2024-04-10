import { CldUploadWidget } from "next-cloudinary";
import { useToast } from "../ui/use-toast";
import { title } from "process";
import React from "react";
import Image from "next/image";

type MediaUploaderProps = {
  onValueChange: (value: string) => void,
  setImage: React.Dispatch<any>,
  image: any,
  publicId: string,
  type: string
}

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: "Impage uploaded successfully",
      description: "1 credit was deducted from your account",
      duration: 5000,
      className: "success-toast"
    })
  }
  const onUploadErrorHandler = (result: any) => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast"
    })
  }
  return (
    <CldUploadWidget
      uploadPreset="ghost_imaginify"
      options={{
        multiple: false,
        resourceType: "image"
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {
        ({ open }) => (
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600">
              Original
            </h3>
            {
              publicId ? (
                <>
                  HERE IS THE IMAGE
                </>
              ) : (
                <div className="media-uploader_cta" onClick={() => open()}>
                  <div className="media-uploader_cta-image">
                    <Image
                      src="/assets/icons/add.svg"
                      alt="Add Image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="p-14-medium">Click Here to upload image</p>
                </div>
              )
            }
          </div>
        )
      }
    </CldUploadWidget>);
};

export default MediaUploader;
