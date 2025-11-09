"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function PdfUpload() {
  // ✅ State hooks must be inside your component
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // ✅ Handle file drop
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const pdf = acceptedFiles[0];

    if (!pdf || pdf.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }

    setFile(pdf);
    setIsUploading(true);

    // 🚧 Simulate upload (later replaced with API call)
    setTimeout(() => {
      setIsUploading(false);
    }, 1500);
  }, []);

  // ✅ Configure dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "application/pdf": [] },
  });

  return (
    <div
      {...getRootProps()}
      className="mt-6 border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50 transition-all"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-500">Drop the PDF here...</p>
      ) : (
        <p className="text-gray-500">Drag & drop a PDF here, or click to select</p>
      )}

      {file && (
        <div className="mt-4 p-4 bg-white rounded-md shadow">
          <p className="font-medium">{file.name}</p>
          <p className="text-sm text-gray-600">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          {isUploading ? (
            <p className="mt-2 text-blue-500 text-sm">Uploading...</p>
          ) : (
            <p className="mt-2 text-green-600 text-sm">Upload complete ✅</p>
            
          )}
          {isUploading && <p className="mt-2 text-sm text-blue-500">Uploading...</p>}

        </div>
      )}
    </div>
  );
  
}
