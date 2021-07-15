


export default class Mouse {
  private mouse: HTMLDivElement
  constructor() {
    this.mouse = document.createElement('div');
    Object.assign(this.mouse.style, {
      width: "20px",
      height: "20px",
      opacity: ".4",
      borderRadius: "50%",
      position: "absolute",
      zIndex: "999998",
      background: "radial-gradient(red, transparent)",
    });
    document.body.appendChild(this.mouse);
  }

  move({x, y}: {x?: number, y?: number}) {
    Object.assign(this.mouse.style, {
      left: `${x || 0}px`,
      top: `${y || 0}px`
    })
  }

  remove() {
    if (this.mouse.parentElement) {
      document.body.removeChild(this.mouse);
    }
  }
}