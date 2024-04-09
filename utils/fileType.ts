export function CheckFileType(filename: string) {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"]; // Add more image extensions if needed
  const videoExtensions = [".mp4", ".mov", ".avi", ".mkv"]; // Add more video extensions if needed

  const extension = filename
    .slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2)
    .toLowerCase(); // Extract extension from filename

  if (imageExtensions.includes(extension)) {
    return "image";
  } else if (videoExtensions.includes(extension)) {
    return "video";
  } else {
    return "text";
  }
}
