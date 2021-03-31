export const defaultEnvironment = {
  // modules to be shown on text editor toolbar
  quillToolbars: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["link"],
    ["clean"],
  ],
  pageSizeOptions: [10, 20, 50, 100],
  adminUrl: "admin",
  appUrl: "app",
  encryptedBase64Key: "bXVzdGJlMTZieXRlc2tleQ==",
};
