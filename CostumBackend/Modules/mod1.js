console.log("this is module");

function average ( arr ){

    let sum=0;
    arr.forEach(element => {
        sum+=element;
        
    });

    return sum/arr.length

}
// we can also export multiple by using object so then avg and both name are accessible
module.exports ={
    
    avg : average,
    name :'shahid'
}

module.exports.name="shahid"