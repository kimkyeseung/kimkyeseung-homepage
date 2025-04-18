import HeroCard from "./HeroCard";
import { Me } from "./Me";

export function Main() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex justify-center items-center">
        <HeroCard />
      </div>
      <Me />
    </div>
  );
}
