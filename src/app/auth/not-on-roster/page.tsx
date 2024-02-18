import React from "react";

export default function NotOnRoster() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[6rem] text-nyit-blue-900 text-center">
        Not on the roster!
      </div>
      <div className="text-center text-2xl">
        Did we get this wrong? <br />
        Email{" "}
        <a
          href="mailto:croeder@nyit.edu"
          className="font-semibold text-blue-600 hover:text-blue-800"
        >
          croeder@nyit.edu
        </a>{" "}
        & we'll figure it out.
      </div>
    </div>
  );
}
