interface User {
  id: number;
  name: string;
  age: number;
  sex?: string; //可选
  readonly hobbies: string[]; // 只读 可push
  readonly skills: readonly string[]; //只读 不可push
}

//定义对象的类型

export default function interfaceMain() {
  console.log('---------- interface star ----------');

  //【h1】 类接口
  const user1: User = {
    id: 1,
    name: 'tom',
    age: 20,
    //  sex: '男', 可不写
    hobbies: ['爬山', '打羽毛球'],
    skills: ['前端开发'],
  };

  // user1.hobbies = ['爬山', '打羽毛球'],
  // error:Cannot assign to 'hobbies' because it is a read-only property.
  user1.hobbies.push('游泳');
  // let arr: readonly number[] = [123];
  // arr.push(456); //Property 'push' does not exist on type 'readonly number[]'.

  //user1.skills.push('后端开发');

  console.log(user1);

  //【h2】附
  //readonly 修饰的属性能确保自身不能修改属性，但是当你把这个属性交给其它并没有这种保证的使用者（允许出于类型兼容性的原因），他们能改变
  //浅析TypeScript中const和readonly的区别、枚举和常量枚举的区别以及关于typescript中枚举的相关知识 https://www.cnblogs.com/goloving/p/15412110.html
  const foo: {
    readonly bar: number;
  } = {
    bar: 123,
  };
  function iMutateFoo(foo: { bar: number }) {
    foo.bar = 456;
  }
  iMutateFoo(foo);
  console.log(foo.bar); // 456

  //【h1】函数类型

  /*
接口可以描述函数类型(参数的类型与返回的类型)
*/

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  const mySearch: SearchFunc = function (source: string, sub: string): boolean {
    return source.search(sub) > -1;
  };

  console.log(mySearch('abcd', 'bc'));

  //【h1】类类型 类继承多个接口
  interface Alarm {
    alert(): any;
  }

  interface Light {
    lightOn(): void;
    lightOff(): void;
  }

  class Car implements Alarm, Light {
    alert() {
      console.log('Car alert');
    }
    lightOn() {
      console.log('Car light on');
    }
    lightOff() {
      console.log('Car light off');
    }
  }

  let car = new Car();
  car.alert();
  car.lightOn();
  car.lightOff();

  //【h1】 接口继承接口
  interface LightableAlarm extends Alarm, Light {}
  class Car2 implements LightableAlarm {
    alert() {
      console.log('Car alert');
    }
    lightOn() {
      console.log('Car light on');
    }
    lightOff() {
      console.log('Car light off');
    }
  }

  let car2 = new Car();
  car2.alert();
  car2.lightOn();
  car2.lightOff();
}
