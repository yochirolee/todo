export default function ProgressBar({ Percent,color }) {
  if (!Percent || Percent < 1) return <></>;
  return (
    <div className="relative pt-1">
      <div className={`overflow-hidden h-1 mb-4 text-xs flex rounded bg-gray-200`}>
        <div
          style={{ width: Percent + "%" }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}
        ></div>
      </div>
    </div>
  );
}
