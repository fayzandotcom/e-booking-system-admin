import { SanitizePipe } from './sanitize.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizePipe();
    expect(pipe).toBeTruthy();
  });
});
