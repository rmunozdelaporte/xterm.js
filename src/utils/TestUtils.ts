/**
 * @license MIT
 */

import { ITerminal, IBuffer, IBufferSet, IBrowser, ICharMeasure, ISelectionManager, ITerminalOptions, IListenerType, IInputHandlingTerminal, IViewport, ICircularList } from '../Interfaces';
import { LineData } from '../Types';

export class MockTerminal implements ITerminal {
  options: ITerminalOptions = {};
  element: HTMLElement;
  rowContainer: HTMLElement;
  selectionContainer: HTMLElement;
  selectionManager: ISelectionManager;
  charMeasure: ICharMeasure;
  textarea: HTMLTextAreaElement;
  rows: number;
  cols: number;
  browser: IBrowser;
  writeBuffer: string[];
  children: HTMLElement[];
  cursorHidden: boolean;
  cursorState: number;
  defAttr: number;
  scrollback: number;
  buffers: IBufferSet;
  buffer: IBuffer;
  handler(data: string): void {
    throw new Error('Method not implemented.');
  }
  on(event: string, callback: () => void): void {
    throw new Error('Method not implemented.');
  }
  off(type: string, listener: IListenerType): void {
    throw new Error('Method not implemented.');
  }
  scrollDisp(disp: number, suppressScrollEvent: boolean): void {
    throw new Error('Method not implemented.');
  }
  cancel(ev: Event, force?: boolean): void {
    throw new Error('Method not implemented.');
  }
  log(text: string): void {
    throw new Error('Method not implemented.');
  }
  emit(event: string, data: any): void {
    throw new Error('Method not implemented.');
  }
  reset(): void {
    throw new Error('Method not implemented.');
  }
  showCursor(): void {
    throw new Error('Method not implemented.');
  }
  blankLine(cur?: boolean, isWrapped?: boolean): LineData {
    const line: LineData = [];
    for (let i = 0; i < this.cols; i++) {
      line.push([0, ' ', 1]);
    }
    return line;
  }
}

export class MockInputHandlingTerminal implements IInputHandlingTerminal {
  element: HTMLElement;
  options: ITerminalOptions = {};
  cols: number;
  rows: number;
  charset: { [key: string]: string; };
  gcharset: number;
  glevel: number;
  charsets: { [key: string]: string; }[];
  applicationKeypad: boolean;
  applicationCursor: boolean;
  originMode: boolean;
  insertMode: boolean;
  wraparoundMode: boolean;
  defAttr: number;
  curAttr: number;
  prefix: string;
  savedCols: number;
  x10Mouse: boolean;
  vt200Mouse: boolean;
  normalMouse: boolean;
  mouseEvents: boolean;
  sendFocus: boolean;
  utfMouse: boolean;
  sgrMouse: boolean;
  urxvtMouse: boolean;
  cursorHidden: boolean;
  buffers: IBufferSet;
  buffer: IBuffer = new MockBuffer();
  viewport: IViewport;
  selectionManager: ISelectionManager;
  focus(): void {
    throw new Error('Method not implemented.');
  }
  convertEol: boolean;
  updateRange(y: number): void {
    throw new Error('Method not implemented.');
  }
  scroll(isWrapped?: boolean): void {
    throw new Error('Method not implemented.');
  }
  nextStop(x?: number): number {
    throw new Error('Method not implemented.');
  }
  setgLevel(g: number): void {
    throw new Error('Method not implemented.');
  }
  eraseAttr() {
    throw new Error('Method not implemented.');
  }
  eraseRight(x: number, y: number): void {
    throw new Error('Method not implemented.');
  }
  eraseLine(y: number): void {
    throw new Error('Method not implemented.');
  }
  eraseLeft(x: number, y: number): void {
    throw new Error('Method not implemented.');
  }
  blankLine(cur?: boolean, isWrapped?: boolean): [number, string, number][] {
    throw new Error('Method not implemented.');
  }
  prevStop(x?: number): number {
    throw new Error('Method not implemented.');
  }
  is(term: string): boolean {
    throw new Error('Method not implemented.');
  }
  send(data: string): void {
    throw new Error('Method not implemented.');
  }
  setgCharset(g: number, charset: { [key: string]: string; }): void {
    throw new Error('Method not implemented.');
  }
  resize(x: number, y: number): void {
    throw new Error('Method not implemented.');
  }
  log(text: string, data?: any): void {
    throw new Error('Method not implemented.');
  }
  reset(): void {
    throw new Error('Method not implemented.');
  }
  showCursor(): void {
    throw new Error('Method not implemented.');
  }
  refresh(start: number, end: number): void {
    throw new Error('Method not implemented.');
  }
  matchColor(r1: number, g1: number, b1: number) {
    throw new Error('Method not implemented.');
  }
  error(text: string, data?: any): void {
    throw new Error('Method not implemented.');
  }
  setOption(key: string, value: any): void {
    this.options[key] = value;
  }
  on(type: string, listener: IListenerType): void {
    throw new Error('Method not implemented.');
  }
  off(type: string, listener: IListenerType): void {
    throw new Error('Method not implemented.');
  }
  emit(type: string, data?: any): void {
    throw new Error('Method not implemented.');
  }
}

export class MockBuffer implements IBuffer {
  lines: ICircularList<[number, string, number][]>;
  ydisp: number;
  ybase: number;
  y: number;
  x: number;
  tabs: any;
  scrollBottom: number;
  scrollTop: number;
  savedY: number;
  savedX: number;
}
