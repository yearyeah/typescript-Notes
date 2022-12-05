export default function MainUnionTypes() {
  console.log('> UnionTypes:');

  function myToString(x: number | string): string {
    return x.toString();
  }
  console.log(myToString(88888));
}
