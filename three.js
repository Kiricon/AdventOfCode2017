const input = 1024;

class Location {
    /**
     * coordinates
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

class Node {
    /**
     * 
     * @param {Number} value 
     * @param {Location} location 
     */
    constructor(value, location) {
        this.value = value;
        this.location = location
    }

    toString() {
        return `${this.location.x},${this.location.y}: ${this.value} - total: ${Math.abs(this.location.x) + Math.abs(this.location.y)}`;
    }
}

let i = 1;
let x = 0;
let y = 0;

let maxX = x;
let maxY = y;

let node = new Node(i, new Location(x,y));

let sideLength = 2;
let side = 'right';
let sideCount = 0;


while(i < input) {
    i++;
    switch(side) {
        case 'right':
            y++;
            sideCount++;
            if(sideCount === sideLength) {
                side = 'top';
                sideCount = 0;
            }
            break;
        case 'top':
            x--;
            sideCount++;
            if(sideCount === sideLength) {
                side = 'left';
                sideCount = 0;
            }
            break;
        case 'left':
            y--;
            sideCount++;
            if(sideCount === sideLength) {
                side = 'bottom';
                sideCount = 0;
            }
            break;
        case 'bottom':
            x++;
            sideCount++;
            if(sideCount === sideLength) {
                side = 'right';
                sideCount = 0;
                sideLength++;
            }
            break;

    }

    node.nextNode = new Node(i, new Location(x,y));
    node = node.nextNode;

}

console.log(node.toString());
console.log(i);
