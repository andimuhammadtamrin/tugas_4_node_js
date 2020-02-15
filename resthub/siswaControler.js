//siswaControler.js

//import siswa
Siswa = require('./siswaModel');

//import index actions
exports.index = function(req,res){
  Siswa.get(function(err,siswa1){
    if(err){
      res.json({
        status:"error",
        message:err,
      });
    }
    res.json({
      status:"success",
      message:"Data Siswa Berhasil di Ambil",
      data : siswa1
    });
  });
};

//handle create contact actions
exports.new = function(req,res){
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggallahir = req.body.tanggallahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;

  //save the contact and check for error
  siswa.save(function(err){
    //if(err)
    //res.json(err);

    res.json({
      message:'Data Siswa Berhasil di Buat',
      data : siswa
    });
  });
};

//handle view Info
exports.view = function(req,res){
  Siswa.findById(req.params.siswa1_id,function(err,siswa)
{
  if(err)
  res.send(err);
  res.json({
    message:"Siswa details loading..",
    data : siswa
  });
});
};

//handle update siswa Info
exports.update = function(req,res){
Siswa.findById(req.params.siswa1_id,function(err,siswa){
  if(err)
    res.send(err);
siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
      siswa.tanggallahir = req.body.tanggallahir;
      siswa.jeniskelamin = req.body.jeniskelamin;
      siswa.hobi = req.body.hobi;

//save the siswa and check and check for error
    siswa.save(function(err){
      if(err)
          res.json(err);
      res.json({
          message:'Info Siswa Telah di Perbaharui',
          data : siswa
      });
    });
  });
}

//handle delete siswa
exports.delete = function(req,res){
  Siswa.remove({
    _id:req.params.siswa1_id
  },function(err,siswa){
    if(err)
        res.send(err);
res.json({
          status : "success",
          message : "Data Siswa Telah di Hapus"
        });
      });

};
