export default function MainEnum() {
  console.log('> Enum:');
  enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let colorName: string = Color[2];

  console.log(colorName, Color.Green, Color[2]); // Green 2  Green
}
