

class Sensor{
    constructor(car){
        this.raysCount = 3;
        this.rayLength = 100;
        this.castAngle = Math.PI/4;
        this.rays = [];
        
        
        
    }

    rayCast(car){
        this.rays = []
        for(let i = 0; i < this.raysCount; i++){
            const rayAngle = lerp(this.castAngle/2, -(this.castAngle/2), i/(this.raysCount - 1)) + car.angle;
            let start = { x:car.x, y:car.y };
            let end = { x:car.x - Math.sin(rayAngle)*this.rayLength,
                        y:car.y - Math.cos(rayAngle)*this.rayLength };
            this.rays.push([start,end]);
            

        }
    }

    draw(ctx){
        for(let i = 0; i < this.raysCount; i++){
            ctx.beginPath();
            ctx.lineWidth =3;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(this.rays[i][0].x, this.rays[i][0].y);
            ctx.lineTo(this.rays[i][1].x, this.rays[i][1].y);
            ctx.stroke();
            
        }

    }
}