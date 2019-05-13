var Boat = /** @class */ (function () {
    function Boat(xCoord, yCoord) {
        this.moveBack = function (value) {
            return this.yCoord -= value;
        };
        this.moveRight = function (value) {
            return this.xCoord += value;
        };
        this.moveLeft = function (value) {
            this.xCoord -= value;
        };
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }
    Boat.prototype.moveUp = function (value) {
        return this.yCoord += value;
    };
    Boat.prototype.provideLocation = function () {
        alert('Coords = [' + this.yCoord + ']|[' + this.xCoord + ']');
    };
    return Boat;
}());
var boat1 = new Boat(0, 0);
boat1.moveBack(1);
boat1.moveRight(2);
boat1.provideLocation();
