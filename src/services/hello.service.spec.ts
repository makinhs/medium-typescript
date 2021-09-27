import helloService from './hello.service';

describe('We will test HelloService', () => {
  it('getHello function should return Hello World', () => {
    expect(helloService.getHello()).toBe('Hello World');
  })
})