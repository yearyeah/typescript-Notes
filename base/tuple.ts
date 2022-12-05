export default function MainTuple() {
  console.log('> Tuple:');
  let tom: [string, number];
  tom = ['Tom', 25];
  tom.push('male');
  tom.push(true);
  console.log(tom);

  let list: [string, number, ...any] = ['0', 1, 2, 3];
  console.log(list.length);
}
