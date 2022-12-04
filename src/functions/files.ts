import { toast } from "react-toastify";
import * as XLSX from "xlsx";
import _ from "lodash";
import { FileData } from './../types/interfaces'

export const previewUploadedFile = async (
  needed: string[],
  fileData: FileData,
  setFileData: Function,
  setLoadingPercentage: Function,
  loadingPercentage: number,
  file: File
) => {
  console.log(file);
  if (!file) return;
  setFileData({ ...fileData, loading: true });
  var name = file.name;
  const reader = new FileReader();
  reader.addEventListener("load", (e: any) => {
    // e = on_file_select event
    /* Parse data */
    const bstr = e.target.result;
    const wb = XLSX.read(bstr, { type: "binary" });
    /* Get first worksheet */
    const sheetCount = wb.SheetNames.length;
    setFileData({ ...fileData, sheets: sheetCount });
    if (sheetCount > 1) {
      const itemArray = [];
      for (let i = 0; i < sheetCount; i++) {
        const wsname = wb.SheetNames[i];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, {});
        if (!data[0]) {
          setFileData({
            ...fileData,
            errorState: true,
            errorMessage: "No data found in the excel file",
          });
          toast.error(
            `No data found in the sheet called ${wsname} excel file`,
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            }
          );
          console.log("No data found");
          return;
        }
        const columns = Object.keys(data[0]);
        

        if (_.difference(columns, needed).length !== 0) {
          setFileData({
            ...fileData,
            errorState: true,
            errorMessage: "The excel file has columns in wrong format",
          });
          toast.error(
            `Columns are not in the right order. Check on how ${_.difference(columns, needed)[0]
            } should be`,
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            }
          );
          return;
        }
        const percentage = ((i + 1) / sheetCount) * 100;
        setLoadingPercentage(Math.round(percentage));
        console.log(Math.round(percentage));
        loadingPercentage = Math.round(percentage);
        console.log(data);
        itemArray.push(...data);
      }
      setFileData({
        ...fileData,
        items: itemArray,
        isFileUploaded: true,
      });
    } else {
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, {});
      if (!data[0]) {
        setFileData({
          ...fileData,
          errorState: true,
          errorMessage: "No data found in the excel file",
        });
        toast.error("No data found in the excel file", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        console.log("No data found");
        return;
      }
      const columns = Object.keys(data[0]);

      if (_.difference(columns, needed).length !== 0) {
        setFileData({
          ...fileData,
          errorState: true,
          errorMessage: "The excel file has columns in wrong format",
        });
        toast.error("Columns are not in the right order", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        console.log(columns, needed);
        console.log("Columns are not in the right order");
        return;
      }
      setFileData({
        ...fileData,
        loading: false,
        items: data,
        fileName: name,
        timeUploaded: new Date().toLocaleString(),
        isFileUploaded: true,
      });
      console.log(data);
    }
  });
  reader.readAsBinaryString(file);
};

export const checkFileType = (inputID: string) => {
  const fileInput = document.querySelector(`#${inputID}`) as HTMLInputElement
  const filePath = fileInput.value
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.avif|\.gif)$/i;

  if (!allowedExtensions.exec(filePath)) {
    fileInput.value = '';
    return false;
  }
  else {
    return true
  }
}