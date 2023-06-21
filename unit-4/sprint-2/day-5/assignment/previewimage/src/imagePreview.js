import React, { useRef } from "react";

const ImagePreviewForm = () => {
  const fileInputRef = useRef(null);
  const imagePreviewRef = useRef(null);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      imagePreviewRef.current.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImagePreview}
      />
      <br />
      <img ref={imagePreviewRef} alt="Preview" />
    </div>
  );
};

export default ImagePreviewForm;