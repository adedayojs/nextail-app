import { CoverageToStatusPipe } from './coverage-to-status.pipe';

describe('CoverageToStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new CoverageToStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
