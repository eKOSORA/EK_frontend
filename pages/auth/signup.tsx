import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Auth/Navbar'
import dragImages from './../../public/img/dragImages.svg'
import { VscClose } from 'react-icons/vsc'
import { AiFillEdit } from 'react-icons/ai'
import { useSchools } from '../../Context/SchoolContext'
import CropModal from '../../components/Dashboard/Images/CropModal'
import { CreateSchoolFormDataState } from '../interfaces/school'
import Dropzone from 'react-dropzone'
import { BiCrop } from 'react-icons/bi'

const Signup: NextPage = () => {
    const { registerSchool }: any = useSchools()
    const handleSubmit = async (e: any) => {
        setSubmitLoader(true)
        setFormData({ ...formData, activeButton: false })
        e.preventDefault()
        console.log(formData)
        const data = await registerSchool({ formData })
        console.log(data)
        setSubmitLoader(false)
    }


    const handleChange =
        (prop: keyof CreateSchoolFormDataState) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [prop]: event.target.value });
        };



    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [submitLoader, setSubmitLoader] = useState(false)
    const [formData, setFormData] = useState({
        initials: '',
        type: '',
        programme: '',
        address: {
            province: "",
            district: "",
            sector: "",
            cell: "",
            village: "",
        },
        head: '',
        moto: '',
        logoImageStr: '',
        name: '',
        activeButton: false
    })

    const schoolTypes = ['Government Aided', 'Private', 'Fully Government']

    const [cropMode, setCropMode] = useState(false)
    const [step, setStep] = useState(1)

    useEffect(() => {
        window.addEventListener('keydown', checkKeyPress)
    })



    function checkKeyPress(key: any) {

        if (key.keyCode === 39) {
            step === 3 ? setStep(3) : setStep(step + 1)
        }
        else if (key.keyCode === 37) {
            step === 1 ? setStep(1) : setStep(step - 1)
        }
    }


    const previewFile = () => {
        const file = document.querySelector('#logoImage') as HTMLInputElement
        const reader = new FileReader()
        reader.addEventListener('loadend', () => {
            setFormData({ ...formData, logoImageStr: reader.result as string })
        })
        if (file.files) {
            reader.readAsDataURL(file.files[0])
        }
    }
    const onDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles)
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            console.log(reader.result)
            setFormData({...formData, logoImageStr: reader.result as string })
        })
        reader.readAsDataURL(acceptedFiles[0])
    }
    const handleGetLocation = () => {
        const longitude = navigator.geolocation.getCurrentPosition((position) => position.coords.longitude)
        const latitude = navigator.geolocation.getCurrentPosition((position) => position.coords.latitude)

        console.log(`Latitude: ${latitude}`)
        console.log(`Longitude: ${longitude}`)
    }

    return (
        <div className='w-screen h-screen bg-ek-blue/5 flex flex-col items-center justify-start'>
            {
                cropMode ?

                    <CropModal formData={formData} imageSrc={formData.logoImageStr} setCropMode={setCropMode} setFormData={setFormData} />
                    :
                    null
            }
            <Navbar page={'signup'} />
            <Head>
                <title>Signup | eKOSORA</title>
            </Head>
            <div className='w-full h-full flex flex-col sm10:flex-row items-center justify-center'>
                <div className="steps flex sm10:mr-8 sm10:flex-col items-center justify-center">
                    <div className={`h-16 w-1 my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 1 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                    <div className={`h-16 w-1 my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 2 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                    <div className={`h-16 w-1 my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 3 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                </div>
                <div className='w-11/12 my-0 mmsm:w-4/5 smm20:w-[600px] h-fit p-2 mmsm:p-8 rounded mmsm:border-2 border-ek-blue flex flex-col items-start justify-start'>
                    {
                        step === 1 ?
                            <span className='text-2xl my-4 text-ek-blue questrialtext'>Basic info</span>
                            :
                            step === 2 ?
                                <div className='flex items-center w-full justify-between'>
                                    <span className='text-2xl my-4 text-ek-blue questrialtext'>Whereabouts</span>
                                    <span onClick={handleGetLocation} className='underline text-ek-blue-75 cursor-pointer font-questrial'>Locate me</span>
                                </div>
                                :
                                <span className='text-2xl my-4 text-ek-blue questrialtext'>More about the school</span>

                    }
                    <form className='w-full' onSubmit={handleSubmit}>
                        {
                            step === 1 ?
                                <div className='w-full flex flex-col'>
                                    <TextField
                                        InputProps={{
                                            style: { color: 'black' },
                                        }}
                                        value={formData.name}
                                        className=' my-4 w-full text-lg' label='School Name'
                                        onChange={handleChange('name')}
                                        focused={true}
                                        required={true}
                                        autoComplete='off'
                                    />

                                    <TextField
                                        autoComplete='off'
                                        InputProps={{
                                            style: { color: 'black' },
                                        }}
                                        value={formData.initials}
                                        className=' my-4 w-full text-lg' label='Short Form'
                                        onChange={handleChange('initials')}
                                        focused={true}
                                        required={true}
                                    />

                                    <Autocomplete
                                        // isOptionEqualToValue
                                        id="combo-box-demo"
                                        options={schoolTypes}
                                        autoHighlight={true}
                                        sx={{}}
                                        onChange={(event, value) => { console.log(value); setFormData({ ...formData, type: value?.replace(' ', '-').toLowerCase() as string }) }}
                                        className='rounded border-ek-blue outlie outline-0 w-full my-4 '
                                        renderInput={(params) => <TextField className='' value={formData.type} required={true} autoFocus={true} {...params} label="Type" />}
                                    />

                                    <div className='w-full flex items-start sm10:items-center justify-center my-8'>
                                        <span className='text-lg text-ek-blue-50 font-questrial'>Programme</span>
                                        <div className='w-10/12 flex flex-col sm10:ml-0 ml-4 sm10:flex-row items-start sm10:items-center justify-around'>
                                            {/* <div className='w-11/12 sm10:w-1/2 flex items-center justify-around'> */}
                                            <div className='flex items-center justify-center'>
                                                <input checked={formData.programme === 'REB'} type="radio" className='mr-2' name="programme" onChange={(e) => { setFormData({ ...formData, programme: e.target.value }) }} value={'REB'} id="" />
                                                <span className='text-lg text-black font-questrial'>REB</span>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <input checked={formData.programme === 'WDA'} type="radio" className='mr-2' name="programme" onChange={(e) => { setFormData({ ...formData, programme: e.target.value }) }} value={'WDA'} id="" />
                                                <span className='text-lg text-black font-questrial'>WDA</span>
                                            </div>
                                            {/* </div> */}
                                            {/* <div className='w-11/12 sm10:w-1/2 flex items-center justify-around'> */}
                                            <div className='flex items-center justify-center'>
                                                <input checked={formData.programme === 'Cambridge'} type="radio" className='mr-2' name="programme" onChange={(e) => { setFormData({ ...formData, programme: e.target.value }) }} value={'Cambridge'} id="" />
                                                <span className='text-lg text-black font-questrial'>Cambridge</span>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <input checked={formData.programme === 'Other'} type="radio" className='mr-2' name="programme" onChange={(e) => { setFormData({ ...formData, programme: e.target.value }) }} value={'Other'} id="" />
                                                <span className='text-lg text-black font-questrial'>Other</span>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                :
                                step === 2 ?
                                    <div className='w-full flex flex-col'>
                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.address.province}
                                            className=' my-4 w-full text-lg' label='Province'
                                            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, province: e.target.value } })}
                                            focused={true}
                                            required={true}
                                            autoComplete='off'
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.address.district}
                                            className=' my-4 w-full text-lg' label='District'
                                            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, district: e.target.value } })}
                                            focused={true}
                                            required={true}
                                            autoComplete='off'
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.address.sector}
                                            className=' my-4 w-full text-lg' label='Sector'
                                            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, sector: e.target.value } })}
                                            focused={true}
                                            required={true}
                                            autoComplete='off'
                                        />


                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.address.cell}
                                            className=' my-4 w-full text-lg' label='Cell'
                                            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, cell: e.target.value } })}
                                            focused={true}
                                            required={true}
                                            autoComplete='off'
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.address.village}
                                            className=' my-4 w-full text-lg' label='Village'
                                            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, village: e.target.value } })}
                                            focused={true}
                                            required={true}
                                            autoComplete='off'
                                        />

                                    </div>
                                    :
                                    <div className='w-full flex flex-col'>
                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.head}
                                            className=' my-4 w-full text-lg' label='Head Teacher'
                                            onChange={handleChange('head')}
                                            focused={true}
                                            required={true}
                                            autoComplete='off'
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.moto}
                                            className=' my-4 w-full text-lg' label='Moto'
                                            onChange={handleChange('moto')}
                                            focused={true}
                                            required={true}
                                            autoComplete='off'
                                        />
                                        <div className='relative w-full my-4 text-lg rounded flex items-center justify-center border-2 border-[#1976d2] h-72'>
                                            <span className='absolute -top-[15px] left-2  border-b-2 border-b-white text-[13px] text-[#1976d2] h-[15px] text-center w-12 roboto z-10'>Logo *</span>
                                            {formData.logoImageStr ?
                                                <div className='relative w-full flex items-center justify-around h-full'>
                                                    <div className='absolute top-2 right-2 flex items-center justify-center flex-row z-10'>
                                                        <button className={`p-2 bg-ek-blue-75 flex text-white mx-2 cursor-pointer items-center justify-center  rounded my-2 text-lg submitButton`} onClick={() => setCropMode(!cropMode)} type="button" title={"Crop Image"}><BiCrop /></button>
                                                        <label htmlFor='logoImage' className={`text-center flex items-center justify-center p-2 bg-ek-blue-75 text-white mx-2 cursor-pointer  rounded my-2 text-lg submitButton`} title={"Change Image"}><AiFillEdit /></label>
                                                        <button className={`p-2 bg-ek-blue-75 flex text-white mx-2 cursor-pointer items-center justify-center  rounded my-2 text-lg submitButton`} type="button" onClick={() => { setFormData({ ...formData, logoImageStr: '' }) }} title={"Remove Image"}><VscClose /></button>
                                                    </div>
                                                    <div className='w-full h-full flex items-center justify-center rounded'><Image alt={"Logo image string"} objectFit='cover' layout='fill' className='w-full h-full' src={formData.logoImageStr}></Image></div>
                                                </div>
                                                :

                                                <Dropzone
                                                    accept={{ 'image/*': [] }}
                                                    onDrop={onDrop}
                                                >
                                                    {({ getRootProps, getInputProps }) => (
                                                        <div {...getRootProps({ className: 'dropzone' })} className="w-full h-full">

                                                            <label htmlFor="logoImage" className='w-full h-full flex flex-col items-center justify-center'>
                                                                <Image alt='Drag images image' width={200} height={100} src={dragImages}></Image>
                                                                <span className='text-lg text-ek-blue-50 font-questrial'>Drop file here</span>
                                                            </label>
                                                            <input {...getInputProps()} onChange={previewFile} type="file" className='logo hidden' name="logo" id="logoImage" />
                                                        </div>
                                                    )}
                                                </Dropzone>
                                            }
                                        </div>
                                    </div>

                        }
                        <div className='flex items-end justify-end mt-8'>
                            <button className={` mx-2 ${step === 1 ? 'cursor-not-allowed text-ek-blue-75/50 ' : ' text-ek-blue-75  cursor-pointer'} w-32 h-12 rounded text-lg`} type='button' onClick={() => { setStep(step - 1) }}>BACK</button>

                            {
                                step === 3 ?
                                    submitLoader
                                        ?
                                        <button className={`m-auto bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`} type='submit'><CircularProgress color='inherit' size={25} /></button>

                                        :
                                        <button className={`bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`} type='submit'>FINISH</button>
                                    :
                                    <button className={`bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`} type='button' onClick={() => { setStep(step + 1) }}>NEXT</button>
                            }
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Signup
