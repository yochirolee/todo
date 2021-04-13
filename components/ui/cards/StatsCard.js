import ProgressBar from "../Progress/progressBar";

export default function StatsCard({ Text, Cant, Percent }) {
  let icon = "";

  switch (Text) {
    case "Completed":
      icon = "las la-check text-4xl text-green-400";
      break;
    case "Pending":
      icon = "las la-hourglass text-4xl text-red-500";
      break;
    case "Totals":
      icon = "las la-tasks text-4xl ";
      break;
  }

  return (
    <div className="bg-gray-600 px-6 rounded-lg">
      <div className="  items-center flex flex-row justify-around  p-4">
        <div className="items-center flex flex-col">
          <p>{Text}</p>
          <p
            className={` ring-yellow-500 my-2 grid place-items-center rounded-full ${
              Percent ? "h-6 w-6 ring-2" : "ring-4 h-10 w-10"
            } `}
          >
            {Cant}
          </p>
        </div>
        <div>
          <i className={icon}></i>
        </div>
      </div>
      <ProgressBar Percent={Percent} />
    </div>
  );
}
