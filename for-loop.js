var x,y;
document.write("<br>Loop 3 (for loop): ");

for(x=1,y=1; x<4109; x = 2*x+y,y--){
    if(x==4108){
        document.write(x);
        break;
    }
    document.write(x + ", ");
}