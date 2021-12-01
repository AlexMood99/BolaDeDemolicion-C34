class Cuerda{
    constructor(bodyA, pointB){
        var options = {
          bodyA: bodyA, 
          pointB: pointB,
          stiffness: 1.2,
          lenght: 350
        }

        this.pointB = pointB;
        this.Cuerda = Constraint.create(options);
        World.add(world, this.Cuerda)
    }

    attach(body){
        this.Cuerda.bodyA = body;
    }

    fly(){
        this.Cuerda.bodyA = null;
    }

    display(){
        if(this.Cuerda.bodyA){
            var pointA = this.Cuerda.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("orange");
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
        
    }

}