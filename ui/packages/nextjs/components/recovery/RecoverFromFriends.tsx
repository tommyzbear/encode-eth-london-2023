import Link from "next/link";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function RecoverFromFriends() {
  return (
    <div className="hero min-h-full rounded-xl flex items-center justify-center">
      <div className="flex flex-col px-10 py-10 text-center items-center max-w-s rounded-3xl">
        <ArrowPathIcon className="h-8 w-8 fill-secondary" />
        <p>Would you like to proceed recovery from friends?</p>
        <Link href="/recovery/from_key" passHref className="link">
          <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
            Recovery from friends
          </button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default RecoverFromFriends;
