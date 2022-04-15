function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert("getUserMedia() is not supported by your browser");
}

const hdConstraints = {
  video: { width: { min: 1280 }, height: { min: 720 } },
};

navigator.mediaDevices.getUserMedia(hdConstraints).then((stream) => {
  video.srcObject = stream;
});