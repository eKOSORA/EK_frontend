import { toast } from "react-toastify";
import { FileData } from "../../utils/interfaces";
import * as XLSX from 'xlsx'
import _ from "lodash";


export const previewUploadedFile = async (fileData: FileData, setFileData: Function, setLoadingPercentage: Function, file: File) => {

    const needed = ['First Name', 'Last Name', 'Code/ID', 'Year/Grade', 'Class', 'Parent Email(s)', 'Parent Tel(s)']
    setFileData({ ...fileData, loading: true })
    var name = file.name;
    const reader = new FileReader();
    reader.addEventListener('load', (e: any) => { // e = on_file_select event
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        /* Get first worksheet */
        const sheetCount = wb.SheetNames.length;
        setFileData({ ...fileData, sheets: sheetCount })
        if (sheetCount > 1) {
            for (let i = 0; i < sheetCount; i++) {
                const wsname = wb.SheetNames[i];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws, {});
                if (!data[0]) {
                    setFileData({ ...fileData, errorState: true, errorMessage: "No data found in the excel file" })
                    toast.error(`No data found in the sheet called ${wsname} excel file`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored"
                    })
                    //console.log("No data found");
                    return
                }
                const columns = Object.keys(data[0])
                //console.log(_.difference(columns, needed).length)
                //console.log(_.difference(columns, needed))

                if (_.difference(columns, needed).length !== 0) {
                    setFileData({ ...fileData, errorState: true, errorMessage: "The excel file has columns in wrong format" })
                    toast.error(`Columns are not in the right order. Check on how ${_.difference(columns, needed)[0]} should be`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored"
                    })
                    //console.log("Columns are not in the right order");
                    return
                }
                const percentage = ((i + 1) / sheetCount) * 100;
                setLoadingPercentage(Math.round(percentage))
                fileData.students.push(data)
                //console.log(data);
                //console.log(Math.round(percentage))
            }
            setFileData({ ...fileData, isFileUploaded: true, })
        }
        else {
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws, {});
            if (!data[0]) {
                setFileData({ ...fileData, errorState: true, errorMessage: "No data found in the excel file" })
                toast.error("No data found in the excel file", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored"
                })
                //console.log("No data found");
                return
            }
            const columns = Object.keys(data[0])

            if (_.difference(columns, needed).length !== 0) {
                setFileData({ ...fileData, errorState: true, errorMessage: "The excel file has columns in wrong format" })
                toast.error("Columns are not in the right order", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored"
                })
                //console.log("Columns are not in the right order");
                return
            }
            setFileData({ ...fileData, loading: false, students: data, fileName: name, timeUploaded: new Date().toLocaleString(), isFileUploaded: true })
            //console.log(data);
        }
    })
    reader.readAsBinaryString(file);
}
