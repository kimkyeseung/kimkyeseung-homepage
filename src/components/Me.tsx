import classNames from "classnames";
import { Info } from "./Info";

export function Me() {
  return (
    <div className="p-8 space-y-4">
      <div className="space-y-3">
        <h2 className="primary text-3xl">안녕하세요.</h2>
        <h1 className="primary text-6xl font-bold">김계승입니다.</h1>
      </div>
      <p
        className={classNames(
          "border-2 dark:border-white border-gray-950 rounded-4xl",
          "text-3xl inline-block px-4 py-2 mt-4"
        )}
      >
        Freelancer Web Developer
      </p>
      <Info />
    </div>
  );
}
