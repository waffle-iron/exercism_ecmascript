class HelloWorld {
  constructor() {
    this.greeting = 'Hello';
  }

  hello(name = 'World') {
    return `${this.greeting}, ${name}!`;
  }
}

export default HelloWorld;
