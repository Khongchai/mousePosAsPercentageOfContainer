export default function returnMousePositionAsPercentageOfContainer(
  //clientX or ClientY
  mouseClient: number,
  //getBoundingClientRect().x or getBoundingClientRect().y
  containerBoundingRect: number,
  //clientWidth or ClientHeight
  containerSize: number
) {
  /*
    Remove the toFixed and the percentage if you just want the value as a number
  */
  const percentage =
    (
      inverseLerp(
        containerBoundingRect,
        containerBoundingRect + containerSize,
        mouseClient
      ) * 100
    ).toFixed(2) + "%";
}

function inverseLerp(x: number, y: number, v: number) {
  return (v - x) / (y - x);
}
