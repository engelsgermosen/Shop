import { Main } from "./Main";
import { SideBar } from "./SideBar";

export const Container = () => {
  return (
    <div className="flex flex-1 w-full bg-white/60 pb-8">
      <SideBar />
      <Main />
    </div>
  );
};
