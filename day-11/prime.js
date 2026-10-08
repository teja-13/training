let v = 8493;
let c = 0;
for(var i = 2;i<v;i++){
    if(v%i==0)
        c++;
}
if(c===0)
    console.log("Prime");
else
    console.log("Not prime");