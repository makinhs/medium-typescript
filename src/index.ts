import helloService from './services/hello.service';

(async () => {
  console.log(helloService.getHello());
})();
