export function ProgressBar() {
  return (
    <div className="flex">
      <div className={`bg-amber-600 w-[30%] h-4 rounded-l rounded-ful`}></div>
      <div className="relative flex items-center justify-center">
        <div className="h-8 w-8 bg-amber-600 absolute rounded-full flex items-center justify-center">
          <div className="h-4 w-4 bg-white rounded-full"></div>
        </div>
      </div>
      <div className={`bg-teal-500  w-[70%] h-4`}></div>
    </div>
  );
}
