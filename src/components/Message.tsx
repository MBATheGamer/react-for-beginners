let count = 0;

export default function Message() {
  console.log("Message called", count);

  count += 1;

  return <div>Message {count}</div>;
}
