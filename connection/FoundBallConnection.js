const axios = require('axios');
const qs = require('qs');

const DATA_URL = "http://localhost:3030";

const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

exports.getPemain = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?nama ?posisi ?age ?fromClub ?toClub ?season ?league ?fee ?urlFoto
    WHERE{
        ?sub rdf:type data:pemain
        OPTIONAL {?sub data:nama ?nama.}
        OPTIONAL {?sub data:posisi ?posisi.}
        OPTIONAL {?sub data:age ?age.}
        OPTIONAL {?sub data:fromClub ?fromClub.}
        OPTIONAL {?sub data:toClub ?toClub.}
        OPTIONAL {?sub data:season ?season.}
        OPTIONAL {?sub data:league ?league.}
        OPTIONAL {?sub data:fee ?fee.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        
        FILTER regex(?nama, "${param.nama ? param.nama : ''}", "i")
        FILTER regex(?posisi, "${param.posisi ? param.posisi : ''}", "i")
        FILTER regex(?league, "${param.league ? param.league : ''}", "i")
        FILTER regex(?age, "${param.age ? param.age : ''}", "i")
    }`
};
    try{
        const {data} = await axios(`${DATA_URL}/Foundball/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        console.log(data.results);
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

module.exports = exports;
