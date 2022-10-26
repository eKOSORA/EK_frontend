import jsPDF from "jspdf";
import { HourObject } from "../utils/interfaces/timetables";

export const generateTimetable = (hours: HourObject[],timetableName:string) => {
  var generateData = function () {
    var result = [];
    var data = {
Days:"",
      "7:30-8:20": "DSA",
      "8:20-9:10": "DSA",
      "9:10-10:00": "JAVA",
      "10:00-10:20": "Break",
      "10:20-11:10": "JAVA",
      "11:10-12:00": "PHY",
      "12:00-13:30": "PHY",
      "13:30-14:20": "ADN",
      "14:20-15:10": "ADN",
      "15:10-16:00": "ENG",
    };
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    for (var i = 0; i < days.length; i += 1) {
      data.Days = days[i];
      result.push(Object.assign({}, data));
    }
    return result;
  };

  function createHeaders(keys: any) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        days: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 35,
        align: "left",
        padding: 0,
      });
    }
    return result;
  }
  const newHours = hours.map((_hour) => {
    return `${_hour.from}-${_hour.to}`;
  });
  var headers = createHeaders(["Days", ...newHours]);

  var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });

  doc.text(timetableName, 110, 40);
  doc.table(5, 50, generateData(), headers as any, { autoSize: false });
};
