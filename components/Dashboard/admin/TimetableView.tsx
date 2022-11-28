import Image from "next/image";
import React from "react";
import { BiDownload, BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { TimeTableViewObject } from "../../../utils/interfaces/timetables";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  activeTimetable: TimeTableViewObject;
  setViewTimetable: Function;
  setEditTimetable: Function;
  confirmDeletion: Function;
  index: number;
}

const TimetableView: React.FC<Props> = ({
  index,
  confirmDeletion,
  activeTimetable,
  setViewTimetable,
  setEditTimetable,
}) => {
  const deleteTimetable = () => {
    confirmDeletion(index);
    setViewTimetable(false);
    setEditTimetable(false);
  };

  const downloadTimetable = () => {
    const input = document.getElementById("timetable") as HTMLElement;
    html2canvas(input, { logging: true, useCORS: true }).then((canvas) => {
      const imgWidth = 290;
      const imgHeight = 210;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("l", "mm", "a4");
      pdf.addImage(imgData, "PNG", 5, 5, imgWidth, imgHeight);
      pdf.save(`${activeTimetable.name}`);
    });
    // };
  };

  return (
    <div className="z-[4] w-screen h-screen flex items-center justify-center absolute bg-black/70">
      <div
        className="w-full z-[5] h-full absolute"
        onClick={() => setViewTimetable(false)}
      ></div>
      <div
        id="timetable"
        className="bg-white z-[6] h-4/5 w-2/3 rounded flex flex-col p-10"
      >
        <div className=" flex-col flex items-start justify-start mt-4 h-4/5 image-holder w-full">
          <span className="w-full text-ek-blue-50 text-3xl heading-text">
            {activeTimetable.name}
          </span>
          <span className="my-3 text-base text-ek-blue-50">
            {activeTimetable.lastEdited}
          </span>
          <div className="relative">
            <div className="absolute w-10/12 m-auto h-full">
              <Image
                layout="fill"
                src={activeTimetable.imageUrl}
                alt={`${activeTimetable.name}-image`}
              />
            </div>
          </div>
          <div className="absolute  right-4 bottom-auto flex flex-col  items-center justify-center w-24 h-fit ">
            <div
              title="Download"
              onClick={() => downloadTimetable()}
              className="my-1 bg-ek-blue-75 flex items-center justify-center cursor-pointer text-white h-10 w-10 rounded-full hover:rotate-12"
            >
              <BiDownload size={23} />
            </div>
            <div
              title="Edit"
              onClick={() => setEditTimetable(true)}
              className="my-1 bg-ek-blue-75 flex items-center justify-center cursor-pointer text-white h-10 w-10 rounded-full hover:rotate-12"
            >
              <BiEdit size={23} />
            </div>
            <div
              title="Delete"
              onClick={deleteTimetable}
              className="my-1 bg-delete-red flex items-center justify-center cursor-pointer text-white h-10 w-10 rounded-full hover:rotate-12"
            >
              <MdOutlineDelete size={23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableView;
