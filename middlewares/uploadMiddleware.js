import upload from "./upload.js";


const uploadMiddleWare = upload.fields([{name: `review-image`, maxCount:1}]);

export default uploadMiddleWare;