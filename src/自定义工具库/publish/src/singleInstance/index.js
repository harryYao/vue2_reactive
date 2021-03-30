class SingleInstance {
  test() {
    console.log('I\'m a single instance');
  }

  static getInstance() {
    if (!SingleInstance.instance) {
      SingleInstance.instance = new SingleInstance();
    }

    return SingleInstance.instance;
  }
}

export default SingleInstance
 

// const s1 = SingleInstance.getInstance();
// const s2 = SingleInstance.getInstance();

// console.log(s1 === s2);
