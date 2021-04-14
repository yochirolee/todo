import ProgressBar from "../Progress/progressBar";

export default function StatsCard({ Text, Cant, Percent }) {
  let icon = "";
  let color = "";
  switch (Text) {
    case "Completed":
      icon = "las la-check md:text-4xl text-green-400";
      color = "green";
      break;
    case "Pending":
      icon = "las la-hourglass md:text-4xl text-red-500";
      color = "red";
      break;
    case "Totals":
      icon = "las la-tasks md:text-4xl ";
      break;
  }

  return (
    <div className="bg-gray-600 md:px-6 rounded-lg">
      <div className="  items-center flex flex-row  justify-around  p-4">
        <div className="items-center flex flex-col ">
          <p className="text-xs md:text-base">{Text}</p>
          <p className="text-xs md:text-base ring-yellow-500 my-2 grid place-items-center rounded-full  ring-4 h-4 w-4 md:h-10 md:w-10">
            {Cant}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <i className={icon}></i>
          <ProgressBar Percent={Percent} color={color} />
        </div>
      </div>
    </div>
  );
}
