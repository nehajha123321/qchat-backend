import Logo from "../../ui/project-logo";
import CDNImageLoader from "./cdn-image-loader";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex shrink-0 items-end rounded-lg bg-blue-500 p-4">
        <h1 className="text-white text-xl font-bold md:text-4xl md:font-extrabold md:tracking-tight p-4">
          MMI - CDN Demo
        </h1>
      </div>
      <div className="grow bg-blue-100 mt-4 rounded-lg">
        <CDNImageLoader />
      </div>
    </main>
  );
}
