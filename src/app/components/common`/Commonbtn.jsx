import React from "react";

const Commonbtn = (event) => {
  return (
    <>
      <a
        href={event.reflink}
        data-aos={event.aos}
        className="font-outfit font-semibold text-sm sm:text-base leading-[150%] LinearBlue text-white p-[14px_24px] rounded"
      >
        {event.common}
      </a>
    </>
  );
};

export default Commonbtn;
