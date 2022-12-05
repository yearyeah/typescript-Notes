export default function MainAssertion() {
  console.log('> Assertion:');

  let num = 123456;
  if (num.length) {
    console.log('执行正常！');
  } else {
    console.log('不会报错中断！'); // 会执行到这里
  }

  function getLength(x: number | string) {
    // return x.length // error  只是书写提示错误

    if (x.length) {
      // error
      return x.length;
    } else {
      return x.toString().length;
    }
  }
  console.log(getLength(888)); //实际没有报错

  //
  function testFun(val: string | number) {
    if ((<string>val).length) {
      console.log('string');
      return (val as string).length;
    } else {
      console.log('!string');
      return val.toString().length;
    }
  }

  console.log('length:', testFun(123456));
  console.log('length:', testFun('123456'));
}
