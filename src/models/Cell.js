/* 'open' | 'closed' | 'marked' | 'question' | 'questionOpen' | 'mine' | 'mineBlown' | 'mineFalse' | 'number-x' */

export class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.open = false;
    this.mine = false;
    this.marked = 0;
    // 0 | 1 | 2
    this.count = null;
    // null | number
    this.special = null;
    // null | 'mineBlown' | 'mineFalse'
  }
}
