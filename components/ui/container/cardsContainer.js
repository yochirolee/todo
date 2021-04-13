export default function CardsContainer(props) {
  return (
    <div className="mt-4 h-3/4 overflow-y-auto ">
      <div className='flex flex-row justify-end px-20'>
        <button className="mt-2 bg-yellow-500 rounded-full px-3 ">New Task</button>
      </div>
      {props.children}
    </div>
  );
}
