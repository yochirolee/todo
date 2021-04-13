export default function CardsContainer(props) {
  return (
    <div className="mt-4 h-3/4 overflow-y-auto ">
     
      {props.children}
    </div>
  );
}
