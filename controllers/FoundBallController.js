const connection = require('../connection/FoundBallConnection');
const Format = require('../tools/format');

module.exports.getPemain = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let foundball = await connection.getPemain(req.query);

            if(!foundball.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }

            foundball = foundball.bindings.map((pemain)=>Format(pemain));

            if(req.params.npm){
                let pemain = foundball.filter((pemain)=>{
                    return pemain.npm == req.params.npm
                });
                res.status(200).json({
                    data:pemain[0],
                    message: pemain.length ? 'Data pemain berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: foundball,
                    message: "Show all Data pemain"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
    }