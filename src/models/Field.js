import { Cell } from './Cell';

export class Field {
  constructor(mines = 40) {
    this.mines = mines;
    this.cells = [];
    this.lost = false;
  }

  initCells() {
    for (let i = 0; i < 16; i++) {
      const row = [];
      for (let j = 0; j < 16; j++) {
        row.push(new Cell(j, i));
      }
      this.cells.push(row);
    }
  }

  addMines(y, x) {
    for (let i = 0; i < 40; i++) {
      let randY;
      let randX;
      // Exclude y, x
      do {
        randY = Math.floor(Math.random() * 16);
        randX = Math.floor(Math.random() * 16);
      } while (randY === y && randX === x);
      this.cells[y][x].mine = true;
    }
  }

  checkPos(y, x) {
    if (this.cells[y][x].mine) {
      this.cells[y][x].status = 'open';
      this.lost = true;
    }
    //	Work in progress
  }

  markPos(y, x) {
    this.cells[y][x].marked === 2
      ? (this.cells[y][x].marked = 0)
      : this.cells[y][x].marked++;
  }

  startGame(y, x) {
    this.addMines(y, x);
    //	Work in progress
  }
}
