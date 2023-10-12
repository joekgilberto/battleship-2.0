//a class used to make ship objects with custom name, alliance, size, and orientation properties
class Ship {
    constructor(name, alliance, size, orientation) {
        this.name = name;
        this.divEl = document.createElement('div');
        this.alliance = alliance;
        this.size = size;
        this.orientation = orientation;
        this.columnPosition = 0;
        this.rowPosition = 0;
        this.xCoordinates = [];
        this.yCoordinates = [];
        this.squaresTaken = [];
        this.inGraveyard = 'hidden';
        this.cheatSheet = 'No cheating!';
    };

    //records in the ship's squaresTaken array where the x and yCoordinates are taking up
    recordSquaresTaken() {
        let squareOne;
        let squareTwo;
        let squareThree;

        if (this.alliance === 'ally') {
            squareOne = document.querySelector(`.bottom-grid > ${bottomRows[this.rowPosition - 1]}${columns[this.columnPosition - 2]}`);
            squareOne.setAttribute('id', 'taken');
            this.squaresTaken.push(squareOne);
            if (this.size === 2) {
                if (this.orientation === 'a') {
                    squareTwo = document.querySelector(`.bottom-grid > ${bottomRows[this.rowPosition]}${columns[this.columnPosition - 2]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);
                } else if (this.orientation === 'b') {
                    squareTwo = document.querySelector(`.bottom-grid > ${bottomRows[this.rowPosition - 1]}${columns[this.columnPosition - 1]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);
                };
            } else if (this.size === 3) {
                if (this.orientation === 'a') {
                    squareTwo = document.querySelector(`.bottom-grid > ${bottomRows[this.rowPosition]}${columns[this.columnPosition - 2]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);

                    squareThree = document.querySelector(`.bottom-grid > ${bottomRows[this.rowPosition + 1]}${columns[this.columnPosition - 2]}`);
                    squareThree.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareThree);
                } else if (this.orientation === 'b') {
                    squareTwo = document.querySelector(`.bottom-grid > ${bottomRows[this.rowPosition - 1]}${columns[this.columnPosition - 1]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);

                    squareThree = document.querySelector(`.bottom-grid > ${bottomRows[this.rowPosition - 1]}${columns[this.columnPosition]}`);
                    squareThree.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareThree);
                };
            };

        } else if (this.alliance === 'enemy') {
            squareOne = document.querySelector(`.top-grid > ${upperRows[this.rowPosition - 2]}${columns[this.columnPosition - 2]}`);
            squareOne.setAttribute('id', 'taken');
            this.squaresTaken.push(squareOne);
            if (this.size === 2) {
                if (this.orientation === 'a') {
                    squareTwo = document.querySelector(`.top-grid > ${upperRows[this.rowPosition - 1]}${columns[this.columnPosition - 2]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);
                } else if (this.orientation === 'b') {
                    squareTwo = document.querySelector(`.top-grid > ${upperRows[this.rowPosition - 2]}${columns[this.columnPosition - 1]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);
                };
            } else if (this.size === 3) {
                if (this.orientation === 'a') {
                    squareTwo = document.querySelector(`.top-grid > ${upperRows[this.rowPosition - 1]}${columns[this.columnPosition - 2]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);

                    squareThree = document.querySelector(`.top-grid > ${upperRows[this.rowPosition]}${columns[this.columnPosition - 2]}`);
                    squareThree.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareThree);
                } else if (this.orientation === 'b') {
                    squareTwo = document.querySelector(`.top-grid > ${upperRows[this.rowPosition - 2]}${columns[this.columnPosition - 1]}`);
                    squareTwo.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareTwo);

                    squareThree = document.querySelector(`.top-grid > ${upperRows[this.rowPosition - 2]}${columns[this.columnPosition]}`);
                    squareThree.setAttribute('id', 'taken');
                    this.squaresTaken.push(squareThree);
                };
            };
        };
    };

    //resets all of a ship's properties to default
    resetMe() {
        this.columnPosition = 0;
        this.rowPosition = 0;
        this.xCoordinates = [];
        this.yCoordinates = [];
        this.squaresTaken = [];
        this.inGraveyard = 'hidden';
        this.cheatSheet = 'No cheating!';
        if (this.onBoard) {
            this.onBoard = 'visible';
            this.beenHit = false;;
        };
    };
};


//a class extending Ship that makes ally ship objects with the addition of the properties onBoard and beenHit, along with the function buildShip()
class AllyShip extends Ship {
    constructor(name, alliance, size, orientation, columnPosition, rowPosition, xCoordinates, yCoordinates, squaresTaken, inGraveyard) {
        super(name, alliance, size, orientation, columnPosition, rowPosition, xCoordinates, yCoordinates, squaresTaken, inGraveyard);
        this.onBoard = 'visible';
        this.beenHit = false;
    };

    //builds the ship and pipe divs and adds them to the board when called upon
    buildShip() {

        let pipeOneEl = document.createElement('div');
        let pipeTwoEl = document.createElement('div');
        let pipeThreeEl = document.createElement('div');

        function buildPipe(pipeEl, pipeColumnPosition, pipeRowPosition, ship) {
            pipeEl.classList.add('pipe');
            pipeEl.style.gridColumn = `${pipeColumnPosition} / span 1`;
            pipeEl.style.gridRow = `${pipeRowPosition} / span 1`;
            ship.divEl.appendChild(pipeEl);

        }

        this.divEl.classList.add('ship');
        this.divEl.setAttribute('id', this.name);
        this.divEl.style.display = 'grid';

        if (this.size === 3 && this.orientation === 'a') {
            this.divEl.style.gridTemplateColumns = 'repeat(3, 1fr)';
            this.divEl.style.gridTemplateRows = 'repeat(9, 1fr)';
            this.divEl.style.gridColumn = `${this.columnPosition} / span 1`;
            this.divEl.style.gridRow = `${this.rowPosition} / span 3`;
            buildPipe(pipeOneEl, 2, 2, this);
            buildPipe(pipeTwoEl, 2, 5, this);
            buildPipe(pipeThreeEl, 2, 8, this);
        } else if (this.size === 2 && this.orientation === 'a') {
            this.divEl.style.gridTemplateColumns = 'repeat(3, 1fr)';
            this.divEl.style.gridTemplateRows = 'repeat(6, 1fr)';
            this.divEl.style.gridColumn = `${this.columnPosition} / span 1`;
            this.divEl.style.gridRow = `${this.rowPosition} / span 2`;
            buildPipe(pipeOneEl, 2, 2, this);
            buildPipe(pipeTwoEl, 2, 5, this);
        } else if (this.size === 3 && this.orientation === 'b') {
            this.divEl.style.gridTemplateColumns = 'repeat(9, 1fr)';
            this.divEl.style.gridTemplateRows = 'repeat(3, 1fr)';
            this.divEl.style.gridColumn = `${this.columnPosition} / span 3`;
            this.divEl.style.gridRow = `${this.rowPosition} / span 1`;
            buildPipe(pipeOneEl, 2, 2, this);
            buildPipe(pipeTwoEl, 5, 2, this);
            buildPipe(pipeThreeEl, 8, 2, this);
        } else if (this.size === 2 && this.orientation === 'b') {
            this.divEl.style.gridTemplateColumns = 'repeat(6, 1fr)';
            this.divEl.style.gridTemplateRows = 'repeat(3, 1fr)';
            this.divEl.style.gridColumn = `${this.columnPosition} / span 2`;
            this.divEl.style.gridRow = `${this.rowPosition} / span 1`;
            buildPipe(pipeOneEl, 2, 2, this);
            buildPipe(pipeTwoEl, 5, 2, this);
        };

        this.divEl.style.width = 'auto';
        this.divEl.style.height = 'auto';

        bottomGridEl.appendChild(this.divEl);

        this.divEl.style.visibility = this.onBoard;
    };
};