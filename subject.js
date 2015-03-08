var fs = require("fs");
function inc(p, q){
   if(q ==null) q =1
   if( p < 0 )
   {
   	p = -p
   }
    return p + q/q
}

exports.inc = inc;

