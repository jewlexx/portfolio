export default function ToyTooltip() {
  return (
    <span className="absolute top-0 left-0 text-xl hover:[&>span]:opacity-100">
      🤏
      <span className="absolute top-full left-1/2 z-1 w-32 rounded-sm bg-black p-1 text-center text-white transition-opacity duration-100 ease-in-out">
        Toy Project
      </span>
    </span>
  );
}
