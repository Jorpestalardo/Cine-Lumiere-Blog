function tamañoImagen(req, res, next){
    if(req.files.length > 0){
        sharp(req.files[0].path)
        .resize(200, 200)
        .toFile(`react/public/img/novedades/${Date.now()}`)
        .then(()=>{
            next()
        })
        .catch(err => {
            res.status(500).json({message: 'Error al subir la imagen'})
        })
        }else {
            next()
        }
    }


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'react/public/img/novedades')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const fileFilter = function (req, file, cb) {
    // Check file type
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .png and .gif files are allowed!"), false);
    }
  };

  const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;