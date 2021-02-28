class Box {
            constructor(x,y) {
              var options = {
                  isStatic: true,
               restitution :0,
              density :1,
                friction :1,
              }
             this.body = Bodies.rectangle(x,y,20,10,options);
             this.width = 20;
             this.height = 10;
             World.add(world,this.body);
            }
                display(){
                   var pos = this.body.position;
                     this.body.color = 'red'
                     
                     rectMode(CENTER);
                     rect(pos.x,pos.y,20,10);
                 }
                }  
    
