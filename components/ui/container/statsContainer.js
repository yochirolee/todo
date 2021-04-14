import StatsCard from "../cards/StatsCard";

export default function StatsContainer({ todoList }) {
  if (!todoList) return <></>;

  const Total = todoList.length;
  const Completed = todoList.filter((todo) => todo.complete).length;
  const Pending = todoList.filter((todo) => !todo.complete).length;

  const CompletePercent = (Completed * 100) / Total;
  const PendingPercent = (Pending * 100) / Total;

  return (
    <div className="px-2  grid grid-flow-col grid-cols-3 gap-8 mt-6 ">
      <StatsCard Text="Totals" Cant={Total} />{" "}
      <StatsCard Text="Completed" Cant={Completed} Percent={CompletePercent} />
      <StatsCard Text="Pending" Cant={Pending} Percent={PendingPercent} />
    </div>
  );
}
