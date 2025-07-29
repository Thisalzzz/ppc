export const uploadToCloudinary = async (file, resourceType = 'auto') => {
  const cloudName = "dssrvq7pe";
  const uploadPreset = "ppc_preset";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const finalResourceType = resourceType || 'auto';

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/${finalResourceType}/upload`, // 👈 this line changed
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok || !data.secure_url) {
      throw new Error(data.error?.message || "Upload failed");
    }

    return data.secure_url;
  } catch (err) {
    console.error("Upload failed:", err);
    throw err;
  }
};

export const uploadCV = async (file) => {
  return uploadToCloudinary(file, 'raw'); // ensures it's uploaded to /raw/upload/
};
