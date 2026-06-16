import multer from "multer";

const storage = multer.diskStorage({
    destination: function(request, file, callback){
        callback(null, './public/uploads');
    },
    filename: function(request, file, callback){
        const uniqueDate = Date.now();
        const extension = file.mimetype.split("/")[1];
        callback(null, file.fieldname + "-" + uniqueDate + `.${extension}`);
    }
})

const fileFilter = (req, file, callback) => {
    const extension = file.mimetype.split("/")[1];
    const acceptedExtensions = ["png", "webp", "jpg", "jpeg"];
    if(!acceptedExtensions.includes(extension)){
        console.log("wrong extension");
        callback(null,false);
    }
    else{
        callback(null,true);
    }
};

const upload = multer({
    

    storage: storage, 
    fileFilter:fileFilter, 
    limits:{
        fileSize: 1024 * 1024 * 10,
        files: 1,
        fields: 4,
        fieldNestingDepth: 1
    }  
});

export default upload;