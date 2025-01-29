// Receiver of properties
export default function ExampleProps(props) {
  return (
    <div>
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Street: {props.address.street}</p>
      <p>Zip: {props.address.zip}</p>
    </div>
  );
}
