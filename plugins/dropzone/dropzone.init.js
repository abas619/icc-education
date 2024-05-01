Dropzone.options.fileImagesUploadCover = {
  paramName: "file",
  maxFilesize: 0.5,
  url: "/your-upload-url",
  parallelUploads: 1,
  uploadMultiple: false,
  acceptedFiles: "image/*,application/pdf,.doc,.docx",
  // accept: function (file, done) {
  //     if (file.name == "justinbieber.jpg") {
  //         done("Naha, you don't.");
  //     }
  //     else { done(); }
  // }
};
// Dropzone.options.fileImagesUploadBg = {
//   paramName: "file",
//   maxFilesize: 1,
//   url: "/your-upload-url",
//   parallelUploads: 1,
//   uploadMultiple: false,
//   acceptedFiles: "image/*",
// };
// Dropzone.options.fileImagesUploadMobile = {
//   paramName: "file",
//   maxFilesize: 0.4,
//   url: "/your-upload-url",
//   parallelUploads: 1,
//   uploadMultiple: false,
//   acceptedFiles: "image/*",
// };
