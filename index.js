var rect={
    perimeter:(x,y) => (2*(x+y)),
    area:(x,y)=>(x*y) 
};

function solveRect(l,b){
    console.log('Solving for rectangle with l='+ l +'and b=' + b +' .');
    if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than zero");
    }
    else{
        console.log("The area of Rectangle is "+rect.area(l,b));
        console.log("The perimeter of rectangle is "+rect.perimeter(l,b));
    }
}

solveRect(5,3);
solveRect(4,2);
solveRect(0,5);
solveRect(-3,5);
