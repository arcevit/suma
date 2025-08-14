import { H1 } from "../shared-components";

export const HomePage = () => {
  return (
    <div>
      <H1 text={"Dashboard"} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Quis adipiscing
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Quis tellus eget adipiscing convallis sit
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
      </div>
    </div>
  );
};
