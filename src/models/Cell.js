/* 'open' | 'closed' | 'marked' | 'question' | 'questionOpen' | 'mine' | 'mineBlown' | 'mineFalse' | 'number-x' */

export class Cell {
  constructor(
    // field: Field,
    x,
    y,
    status = 'closed',
    mine = false,
    marked = 0,
    count = 0
  ) {
    // this.field = field;
    this.x = x;
    this.y = y;
    this.status = status;
    this.mine = mine;
    this.marked = marked; // 0 no mark 1 for mark, 2 for question
    this.count = count;
    this.id = Math.random();
  }

  isClickable() {
    return this.status === 'closed' && this.marked !== 1;
  }

  setOpen() {
    this.clickable = false;
    this.status = this.mine ? 'mineBlown' : 'open';
  }

  setStatus(status) {
    this.status = status;
  }

  switchMarked() {
    this.marked === 2 ? this.marked++ : (this.marked = 0);
  }
}
