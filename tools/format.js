module.exports = fn = data => {
    return {
     
        "id": data.id ? data.id.value : '',
        "nama": data.nama ? data.nama.value : '',
        "posisi": data.posisi ? data.posisi.value : '',
        "age": data.age ? data.age.value : '',
        "fromClub": data.fromClub ? data.fromClub.value : '',
        "toClub": data.toClub ? data.toClub.value : '',
        "season": data.season ? data.season.value : '',
        "league": data.league ? data.league.value : '',
        "fee": data.fee? data.fee.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : ''
    }
}