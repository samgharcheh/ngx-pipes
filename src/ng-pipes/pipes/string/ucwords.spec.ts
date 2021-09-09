import { UcWordsPipe } from './ucwords';

describe('UcFirstPipe Tests', () => {
  let pipe: UcWordsPipe;

  beforeEach(() => {
    pipe = new UcWordsPipe();
  });

  it('Should return value if not a string', () => {
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform(false)).toEqual(false);
  });

  it('Should capitalize all words in a string', () => {
    const result = pipe.transform('foo bar baz');
    expect(result).toEqual('Foo Bar Baz');
  });

  it('Should test mixed strings capitalize behaviour', () => {
    const result = pipe.transform('foo bar baz $a $b $c some string to test');
    expect(result).toEqual('Foo Bar Baz $a $b $c Some String To Test');
  });

  it('Should test special names', () => {
    expect(pipe.transform('JEAN-LUC PICARD')).toEqual('Jean-Luc Picard');
    expect(pipe.transform(`shaquille o'neal`)).toEqual(`Shaquille O'Neal`);
  });
});
