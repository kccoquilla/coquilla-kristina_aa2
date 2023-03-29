var x = 1;
document.write("Loop 1 (while): ");

while(x<52){
    if(x==51){
        document.write(x);
        break;
    }
    document.write(x + ", ");
    x = x+2;
    
} 