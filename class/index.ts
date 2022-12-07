export default function classMain() {
  console.log('---------- class star ----------');
  //【构造函数】
  class Greeter {
    // 声明属性
    message: string;

    // 构造方法
    constructor(message: string) {
      this.message = message;
    }

    // 一般方法
    greet(): string {
      return 'Hello ' + this.message;
    }
  }

  // 创建类的实例
  const greeter = new Greeter('world');
  // 调用实例的方法
  console.log(greeter.greet());

  //【继承】
  class Animal {
    run(distance: number) {
      console.log(`Animal run ${distance}m`);
    }
  }

  class Dog extends Animal {
    cry() {
      console.log('wang! wang!');
    }
  }

  const dog = new Dog();
  dog.cry();
  dog.run(100); // 可以调用从父中继承得到的方法

  //【修饰符】
  /*
  访问修饰符: 用来描述类内部的属性/方法的可访问性
    public: 默认值, 公开的外部也可以访问
    private: 只能类内部可以访问
    protected: 类内部和子类可以访问
    static: 不会实例化到对象中
  */
  class Animal2 {
    public name: string;

    static typeNmae: string = '动物';
    readonly typeEnNmae: string = 'Animal';
    readonly typeNmaes: string[] = ['动物', 'Animal'];
    static staticName: string = '';
    readonly readonlyName: string = '';

    public constructor(name: string) {
      this.name = name;
      //this.staticName = name;
      //roperty 'staticName' does not exist on type 'Animal2'. Did you mean to access the static member 'Animal2.staticName' instead?(2576)
      this.readonlyName = name; //这里还是可以赋值的
    }

    public run(distance: number = 0) {
      console.log(`${this.name} run ${distance}m`);
    }
  }

  class Person2 extends Animal2 {
    private age: number = 18;
    protected sex: string = '男';

    run(distance: number = 5) {
      console.log('Person jumping...');
      super.run(distance);
    }
  }

  class Student extends Person2 {
    run(distance: number = 6) {
      console.log('Student jumping...');

      console.log(this.sex); // 子类能看到父类中受保护的成员
      // console.log(this.age) //  子类看不到父类中私有的成员

      super.run(distance);
    }
  }

  let person2 = new Person2('abc');
  console.log(person2.name); // 公开的可见
  // console.log(person2.sex) // 受保护的不可见
  // console.log(person2.age) //  私有的不可见

  //person2.typeEnNmae = 'animal';
  // error Cannot assign to 'typeEnNmae' because it is a read-only property.

  //突破写入
  person2.typeNmaes.push('?');

  //person2.typeNmae = '野生动物';
  //无法赋值 typeNmae 只在构造函数上  Property 'typeNmae' does not exist on type 'Person2'. Did you mean to access the static member 'Person2.typeNmae' instead?
  console.log(Person2.typeNmae);

  console.log(person2);

  //【存取器】
  class Person3 {
    firstName: string = 'A';
    lastName: string = 'B';
    get fullName() {
      return this.firstName + '-' + this.lastName;
    }
    set fullName(value) {
      const names = value.split('-');
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }

  const p = new Person3();
  console.log(p.fullName);

  p.firstName = 'C';
  p.lastName = 'D';
  console.log(p.fullName);

  p.fullName = 'E-F';
  console.log(p.firstName, p.lastName);

  //【参数属性】
  class Person4 {
    constructor(readonly name: string) {}
  }

  const person4 = new Person4('jack');
  console.log(person4.name, person4);

  //!?
  // let n: number = 1;
  // let b = {
  //   bb: 'bbb',
  // };
  // console.log(b!?.bb);
  // console.log(b?.bb);
  // console.log(b!.bb);

  // if (3 > 1) {
  //   b['cc'] = 'ccc';
  // }
  // console.log(b!?.cc);
  // console.log(b?.cc);
  // console.log(b!.cc);

  let list: string[];
  let list2: string[];
  list = null; //或者 undefind //当list等于null或undefind 没办法编译通过的
  //list2 = undefined!; //在赋值的内容后使用 ！可以使null和undefined类型可以赋值给其他类型并通过编译，表示该变量值可空
  console.log(list, list2);

  let j = JSON.parse('{}');
  let ja = j?.x;
  let jaa = j?.x?.x; //undefined
  let jb = j.x!;
  let jc = j.c;
  //let jcc = j.c.c; 直接报错
  console.log(ja, jaa, jb, jc);

  //【抽象类】
  // 抽象类并不能进行实例化
  // 他规范了继承他的子类必须拥有抽象属性与抽象方法
  // 他提供了抽象属性与抽象方法来让继承他的子类重写，来实现不同的处理方式
  // 他的保护属性与方法可以被每个子类继承来实现继承子类的公有部分，这部分方法属性处理的是相同的任务
  // 它类似于一个工厂，每个子类都可以去他那里继承公有的部分，但是也必须拥有它私有的部分，每个继承的子类都有相似的部分,又有他们独特的部分
  abstract class Parent {
    constructor(public name: string) {}
    public abstract getName(): void;
  }

  class Child extends Parent {
    constructor(name: string) {
      super(name);
      this.name = name;
    }
    // 实现抽象类中的函数
    public getName(): void {
      console.log(this.name);
    }
  }

  //let parent = new Parent('');
  //Cannot create an instance of an abstract class.

  const c = new Child('li');
  c.getName();
}
