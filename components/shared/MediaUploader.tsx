import React from "react";
import { useToast } from "../ui/use-toast";
import {CldUploadWidget} from "next-cloudinary"


const MediaUploader = () => {
  const {toast} = useToast()
  return <div>
    <CldUploadWidget
    uploadPreset="pictify"
    options={{
      multiple:false,
      resourceType:"image"
    }}
    // onSuccess={onUploadSuccessHandler}
    >

    </CldUploadWidget>

  </div>;
};

export default MediaUploader;
