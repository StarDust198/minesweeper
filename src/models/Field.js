import { Cell } from './Cell';

export class Field {
  constructor(mines = 40) {
    this.mines = mines;
    this.remainingMines = mines;
    this.cells = [];
    this.initField();
    this.gameStatus = 0; // 0 - initial | 1 - started | 2 - lost | 3 - won
    this.remainingClosed = 16 * 16;
  }

  initField() {
    for (let i = 0; i < 16; i++) {
      const row = [];
      for (let j = 0; j < 16; j++) {
        row.push(new Cell(j, i));
      }
      this.cells.push(row);
    }
  }

  getCopyField() {
    const newField = new Field(this.mines);
    newField.cells = this.cells;
    newField.gameStatus = this.gameStatus;
    newField.remainingMines = this.remainingMines;
    newField.remainingClosed = this.remainingClosed;
    return newField;
  }

  addMines(y, x) {
    for (let i = 0; i < this.mines; i++) {
      let randY;
      let randX;
      // Exclude y, x & already mined
      do {
        randY = Math.floor(Math.random() * 16);
        randX = Math.floor(Math.random() * 16);
      } while ((randY === y && randX === x) || this.cells[randY][randX].mine);
      // console.log(`Mine added, y: ${randY} x: ${randX}`);
      this.cells[randY][randX].mine = true;
      // this.mineCoords[randY][randX] = true;
    }
  }

  countMines(y, x) {
    let counter = 0;

    for (let i = y - 1; i <= y + 1; i++) {
      for (let j = x - 1; j <= x + 1; j++) {
        if ((i !== y || j !== x) && this.cells[i]?.[j]?.mine) {
          counter++;
        }
      }
    }

    return counter;
  }

  decrementClosed() {
    this.remainingClosed--;
    if (this.mines === this.remainingClosed) {
      this.gameStatus = 3;
    }
  }

  checkField() {
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        if (!this.cells[i][j].mine)
          this.cells[i][j].count = this.countMines(i, j);
      }
    }
  }

  openPos(y, x) {
    // console.log(`Checking pos: y: ${y}, x: ${x}`);
    if (this.gameStatus === 0) {
      this.startGame(y, x);
    } else if (this.gameStatus > 1) {
      return;
    }

    if (!this.cells[y][x].open) {
      this.cells[y][x].open = true;
      this.decrementClosed();
    }

    const baseCount = this.cells[y][x].count;

    if (this.cells[y][x].mine) {
      this.cells[y][x].special = 'mineBlown';
      this.gameLost();
      return;
    }

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let count = this.cells[y + i]?.[x + j]?.count;
        if (
          (i || j) &&
          this.cells[y + i]?.[x + j]?.open === false &&
          count !== null
        ) {
          if (count === 0) {
            this.openPos(y + i, x + j);
          } else if (baseCount === 0) {
            if (!this.cells[y + i][x + j].open) {
              this.cells[y + i][x + j].open = true;
              this.decrementClosed();
            }
          }
        }
      }
    }
  }

  markPos(y, x) {
    // console.log(`Marking pos: y: ${y}, x: ${x}`);
    if (this.gameStatus === 1) {
      switch (this.cells[y][x].marked) {
        case 0:
          if (this.remainingMines > 0) {
            this.cells[y][x].marked = 1;
            this.remainingMines--;
            // this.markedCoords[y][x] = true;
          } else {
            this.cells[y][x].marked = 2;
          }
          break;
        case 1:
          this.cells[y][x].marked = 2;
          this.remainingMines++;
          // this.markedCoords[y][x] = false;
          break;
        case 2:
          this.cells[y][x].marked = 0;
          break;
        default:
          throw new Error('Wrong cell marked state');
      }
    }
  }

  startGame(y, x) {
    // console.log(`Game started: y: ${y}, x: ${x}`);
    this.gameStatus = 1;
    this.addMines(y, x);
    this.checkField();
  }

  gameLost() {
    this.gameStatus = 2;
  }

  gameWon() {
    this.gameStatus = 3;
  }
}
