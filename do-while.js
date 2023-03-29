var x = 2;
var y = 1;
document.write("<br> Loop 2 (do-while): ");

do{
    if(x*y==50){
        document.write(x*y);
        break;
    }document.write(x*y + ", ");
    y = y+1;
}
while(x*y<51);