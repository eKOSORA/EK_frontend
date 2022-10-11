import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../../components/Dashboard/Navbar'
import Sidebar from '../../../components/Dashboard/Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import { userTeacher } from '../../../utils/faker'
import { BiCog, BiInfoCircle } from 'react-icons/bi'
import uploadExcel from '../../../public/img/uploadExcel.svg'
import Image from 'next/image'
import * as XLSX from 'xlsx';
import StudentUploadTablePreview from '../../../components/Dashboard/UploadingViews/StudentUploadTablePreview'
import { FileData } from '../../../utils/interfaces'
import { totalmem } from 'os'
import { useDropzone } from 'react-dropzone'
import { useRecoilState } from 'recoil'
import { sidebarState } from '../../../components/states/sidebar'

const Upload = () => {

    const [sideBarActive, setSideBarActive] = useRecoilState(sidebarState)
    const [step, setStep] = useState(1)
    const [fileData, setFileData] = useState<FileData>({
        students: [],
        fileName: '',
        timeUploaded: '',
        isFileUploaded: false,
        errorState: false,
        errorMessage: "",
        loading: false,
        sheets:0
    })
    useEffect(() => {
        window.addEventListener('keydown', checkKeyPress)
    }, [])

    function checkKeyPress(key: any) {

        if (key.keyCode === 39) {
            setStep(2)
        }
        else if (key.keyCode === 37) {
            setStep(1)
        }
    }
    useEffect(() => {
    }, [])


    const previewFile = async () => {
        var inputElement = document.querySelector('#excelFileToUpload') as HTMLInputElement;



        const needed = ['First Name', 'Last Name', 'Code/ID', 'Year/Grade', 'Class', 'Parent Email(s)', 'Parent Tel(s)']

        if (inputElement.files) {
            if (inputElement.files[0].type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                toast.error("Only excel files are uploaded ('.xlsx', '.csv')!!", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored"
                })
                setFileData({ ...fileData, loading: false })
                return
            }

            setFileData({ ...fileData, loading: true })
            var name = inputElement.files[0].name;
            const reader = new FileReader();
            reader.addEventListener('load', (e: any) => { // e = on_file_select event
                /* Parse data */
                const bstr = e.target.result;
                const wb = XLSX.read(bstr, { type: 'binary' });
                /* Get first worksheet */
                const sheetCount = wb.SheetNames.length;
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

                        fileData.students.push(data)
                        //console.log(data);
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
                    if (columns !== needed) {
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
            reader.readAsBinaryString(inputElement.files[0]);
        }
    }

    return (
        <div className='animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen'>

            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
            <Head>
                <title> Students | Teacher Dashboard | eKOSORA</title>

            </Head>
            <Navbar page='Add students' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
            <div className='w-full flex h-full items-start justify-start'>
                {
                    sideBarActive
                        ?
                        <Sidebar page="admin" user={userTeacher} active='students' />
                        :
                        null
                }
                <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-center pt-[60px] h-screen p-10`}>

                    <div className='my-auto h-3/5 w-8/12 flex flex-col sm:flex-row items-center justify-center'>
                        {
                            fileData.isFileUploaded
                                ?
                                null
                                :
                                <div className="steps flex sm10:mr-8 sm10:flex-col items-center justify-center">
                                    <div onClick={() => { setStep(1) }} className={`h-16 w-1 cursor-pointer  my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 1 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                                    <div onClick={() => { setStep(2) }} className={`h-16 w-1 cursor-pointer  my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step !== 1 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                                </div>}
                        {
                            step === 1 ?
                                <div className={`relative ${sideBarActive ? 'w-full' : 'w-11/12'} rounded h-full flex flex-col bg-ek-blue/10  items-start justify-center`}>
                                    <div className='flex items-center justify-start my-4 w-full'>
                                        <BiInfoCircle size={45} color="#4CA7CE" className='mx-8' />
                                        <span className='text-ek-blue text-3xl font-questrial'>Instructions</span>
                                    </div>
                                    <div className='w-full flex items-start px-28 flex-col justify-start '>
                                        <span className='text-xl text-black font-questrial'>There are some simple changes that you&apos;ll have to make on your excel file to make it easier for our system to use.</span>
                                        <span className='flex items-start my-4 justify-start'>
                                            <input onChange={() => { }} className='mr-4 ' type="checkbox" name="" checked id="" />
                                            <span className='text-xl w-11/12'>The first row should be in the following format. And the columns must be arranged accordingly.</span>
                                        </span>
                                    </div>
                                    <div className='mx-auto hidden mxl:scale-90 xl:scale-100 my-8 bg-white mxl:flex flex-row items-center justify-center w-fit rounded h-fit'>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>First Name</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Last Name</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Code/ID</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Year/Grade</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Class</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Parent Email(s)</div>
                                        <div className='text-base text-black px-4 py-1 border-r-ek-blue-50/70 mx-0 '>Parent Tel(s)</div>
                                    </div>
                                    <div className='flex mxl:hidden w-full items-center justify-center'>
                                        <ul className='text-lg font-questrial list-disc w-1/2'>
                                            <li className='w-full'>First Name</li>
                                            <li className='w-full'>Last Name</li>
                                            <li className='w-full'>Code/ID</li>
                                            <li className='w-full'>Year/Grade</li>
                                            <li className='w-full'>Class</li>
                                            <li className='w-full'>Parent Email(s)</li>
                                            <li className='w-full'>Parent Tel(s)</li>
                                        </ul>
                                    </div>
                                    <button className='px-6 mt-8 absolute right-12 bottom-6 rounded text-white font-normal py-2 bg-ek-blue-75 cursor-pointer' onClick={() => { setStep(2) }}>GOT IT</button>
                                </div>
                                :
                                fileData.loading ?
                                    <div className={`${sideBarActive ? 'w-full' : 'w-11/12'} rounded h-full flex flex-col bg-ek-blue/10  items-center justify-center`}>
                                        <div className='flex flex-col items-center justify-center'>
                                            <BiCog size={45} color="#4CA7CE" className='rotating my-4 mx-8' />
                                            <span>Processing...</span>
                                        </div>
                                    </div>
                                    :
                                    fileData.isFileUploaded
                                        ?
                                        <StudentUploadTablePreview fileData={fileData} />
                                        :
                                        <div className='droparea w-11/12 rounded h-full flex flex-col bg-ek-blue/10  items-center justify-center'>
                                            <div className='flex flex-col items-center justify-center'>
                                                <input accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' type="file" id='excelFileToUpload' className='hidden' onChange={previewFile} name='excelFileToUpload' />
                                                <label className='w-full flex-col flex items-center justify-center' htmlFor="excelFileToUpload" id='excelFileToUploadLabel'>
                                                    <Image alt={'Upload Excel File Image'} width={200} height={100} src={uploadExcel}></Image>
                                                    <p>Drop file here</p>
                                                </label>
                                            </div>
                                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
