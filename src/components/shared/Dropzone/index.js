"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../../../public/assets/images/upload.svg";
import Image from "next/image";

function DropZone(props) {
  const [logoFileImage, setLogoFileImage] = useState();
  const [logoFileData, setLogoFileData] = useState();
  const [loading, setLoading] = useState(false);
  const maxSize = 10485760;

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const validateImage = (data) => {
    var idxDot = data.lastIndexOf(".") + 1;
    var extFile = data.substr(idxDot, data.length).toLowerCase();
    if (
      extFile == "jpg" ||
      extFile == "jpeg" ||
      extFile == "png" ||
      extFile == "svg" ||
      extFile == "gif"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const changeHandler = async (files) => {
    let logoBase64 = "";
    let fileName = files[0].name;
    let checkValidImage = validateImage(fileName);

    if (checkValidImage) {
      let logoImageUrl = URL.createObjectURL(files[0]);
      setLogoFileImage(logoImageUrl);
      getBase64(files[0], (result) => {
        logoBase64 = result.split(",")[1];
        logoBase64 = /,(.+)/.exec(result)[1];
        setLogoFileData(logoBase64);
      });
    } else {
      toast.error("Only jpg/jpeg, svg, and png files are allowed!");
      handleRejectedFiles(files);
    }
  };

  const handleRejectedFiles = (files) => {
    files[0]?.errors?.forEach((error) => {
      toast.error(error.message);
    });
  };

  const clearLogoImage = () => {
    setLogoFileData();
    setLogoFileImage();
  };

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      handleRejectedFiles(rejectedFiles);
    }

    if (acceptedFiles.length > 0) {
      changeHandler(acceptedFiles);
    }
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    rejectedFiles,
    getFilesFromEvent,
  } = useDropzone({
    onDrop,
    minSize: 0,
    maxSize,
    noClick: false,
    noKeyboard: true,
    accept: {
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png'],
        'image/svg+xml': ['.svg'],
        'image/gif': ['.gif'],
      },
    multiple: props.multiple,
  });

  const isFileTooLarge =
    rejectedFiles?.length > 0 && rejectedFiles[0].size > maxSize;

  return (
    <div className="w-full flex flex-col gap-[8px]">
      <span className="text-[14px] lg:text-[16px] font-[400] text-[#666666] leading-[20px]">
        {props.label}
      </span>
      <div className="h-full w-full border border-[#E7E7E7] p-[16px] rounded-[12px] cursor-pointer">
        {!logoFileImage ? (
          <div {...getRootProps()} className="w-full h-full">
            <input
              {...getInputProps()}
              onClick={(e) => (e.target.value = null)}
            />
            <div className="h-full w-full flex flex-col items-center">
              {isDragActive && !isDragReject ? (
                <div className="flex justify-center items-center mt-[10%]">
                  <span className="text-[14px] font-[400] text-[#999999] mb-1 text-center">
                    Drop your file here...
                  </span>
                </div>
              ) : (
                !isDragReject && (
                  <div className="h-full w-full flex flex-col justify-center gap-8 items-center">
                    <Image
                      src={UploadIcon.src}
                      width={40}
                      height={40}
                      alt="upload"
                    />
                    <div className="flex flex-col items-center justify-center gap-3">
                      <span className="text-[14px] font-[400] text-[#999999] mb-1 text-center">
                        <span className="text-[#36BBCA] text-[14px] font-[700]">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </span>
                      <span className="text-[14px] font-[400] text-[#999999] text-center">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </span>
                    </div>
                  </div>
                )
              )}
              <span className="sm:text-[10px] md:text-[12px] font-[400] text-[#8C8C8C] font-nunito">
                {props.supportText}
              </span>
              <input
                {...getInputProps()}
                onClick={(e) => (e.target.value = null)}
              />
              {isDragReject && (
                <div className="flex justify-center items-center mt-[10%]">
                  <span className="text-[14px] font-[400] text-[#999999] mb-1 text-center">
                    "File type must be png, svg or jpeg!"
                  </span>
                </div>
              )}
              {isFileTooLarge && (
                <div className="text-[14px] font-[400] text-[#999999] mb-1 text-center mt-[10%]">
                  File is too large.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full h-full mt-2 flex flex-col justify-center items-center">
            <Image
              src={logoFileImage}
              width={100}
              height={100}
              className="rounded-[10px]"
            />
            <button
              type="button"
              className="my-5 w-[50%] h-[40px] rounded-[5px] bg-[#36BBCA] text-[14px] font-[700] text-white"
              onClick={clearLogoImage}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropZone;
