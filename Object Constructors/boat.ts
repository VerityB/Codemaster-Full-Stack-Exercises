class Boat {
   
        
        private xCoord : number;
        private yCoord : number;

    constructor(xCoord: number, yCoord: number) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }


        public moveUp(value: number): number {
            return this.yCoord += value;
        }
        public moveBack = function (value: number): number {
            return this.yCoord -= value;
        }
        public moveRight = function (value: number): number {
            return this.xCoord += value;
        }
        public moveLeft = function (value: number): number {
            this.xCoord -= value;
        }

        public provideLocation(): any {
             alert('Coords = [' + this.yCoord + ']|[' + this.xCoord + ']')
        }
    }
    

   var battleship = new Boat(0, 0);
   battleship.moveBack(1);
battleship.moveRight(2);
battleship.provideLocation();

 

