import { Autocomplete, TextField } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { Navbar } from '../../components/Auth/Navbar'
import dragImages from './../../public/img/dragImages.svg'

const signup: NextPage = () => {



    const handleSubmit = async (e: any) => {
        setFormData({ ...formData, activeButton: false })
        e.preventDefault()
        console.log(formData)
    }


    interface State {
        shortForm: string;
        type: string;
        programme: string;
        province: string;
        district: string;
        sector: string;
        cell: string;
        village: string;
        headTeacher: string;
        moto: string;
        logoImageStr: string;
        schoolName: string;
    }

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [prop]: event.target.value });
        };



    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [formData, setFormData] = useState({
        shortForm: '',
        type: '',
        programme: '',
        province: "",
        district: "",
        sector: "",
        cell: "",
        village: "",
        headTeacher: '',
        moto: '',
        logoImageStr: '',
        schoolName: '',
        activeButton: false
    })

    const schoolTypes = ['Government Aided', 'Private', 'Fully Government']

    const [step, setStep] = useState(1)

    const previewFile = () => {
        const file = document.querySelector('#logoImage') as HTMLInputElement
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setFormData({ ...formData, logoImageStr: reader.result as string })
        })
        if (file.files) {
            reader.readAsDataURL(file.files[0])
        }
    }

    return (
        <div className='w-screen h-screen bg-ek-blue/5 flex flex-col items-center justify-start'>
            <Navbar page={'signup'} />
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet" />
            </Head>
            <div className='w-full h-full flex items-center justify-center'>
                <div className="steps flex mr-8 flex-col items-center justify-center">
                    <div className={`h-16 w-1 my-1 rounded-[3px] ${step === 1 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                    <div className={`h-16 w-1 my-1 rounded-[3px] ${step === 2 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                    <div className={`h-16 w-1 my-1 rounded-[3px] ${step === 3 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                </div>
                <div className='w-[600px] h-fit p-8 rounded border-2 border-ek-blue flex flex-col items-start justify-start'>
                    {
                        step === 1 ?
                            <span className='text-2xl my-4 text-ek-blue questrialtext'>Basic info</span>
                            :
                            step === 2 ?
                                <span className='text-2xl my-4 text-ek-blue questrialtext'>Whereabouts</span>
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
                                        value={formData.schoolName}
                                        className=' my-4 w-full text-lg' label='School Name'
                                        onChange={handleChange('schoolName')}
                                        focused={true}
                                        required={true}
                                    />

                                    <TextField
                                        InputProps={{
                                            style: { color: 'black' },
                                        }}
                                        value={formData.shortForm}
                                        className=' my-4 w-full text-lg' label='Short Form'
                                        onChange={handleChange('shortForm')}
                                        focused={true}
                                        required={true}
                                    />

                                    <Autocomplete
                                        // isOptionEqualToValue
                                        disablePortal
                                        id="combo-box-demo"
                                        options={schoolTypes}
                                        autoHighlight={true}
                                        sx={{ width: '100%' }}
                                        className='w-full my-4 '
                                        ListboxProps={{ color: 'red' }}
                                        renderInput={(params) => <TextField value={formData.type} onChange={handleChange('type')} required={true} autoFocus={true} {...params} label="Type" />}
                                    />

                                    <div className='w-full flex items-center justify-center my-8'>
                                        <span className='text-lg text-ek-blue-50 font-questrial'>Programme</span>
                                        <div className='w-10/12 flex items-center justify-around'>
                                            <div className='flex items-center justify-center'>
                                                <input type="radio" className='mr-2' name="programme" onChange={handleChange('programme')} id="" />
                                                <span className='text-lg text-black font-questrial'>REB</span>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <input type="radio" className='mr-2' name="programme" onChange={handleChange('programme')} id="" />
                                                <span className='text-lg text-black font-questrial'>WDA</span>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <input type="radio" className='mr-2' name="programme" onChange={handleChange('programme')} id="" />
                                                <span className='text-lg text-black font-questrial'>Cambridge</span>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <input type="radio" className='mr-2' name="programme" onChange={handleChange('programme')} id="" />
                                                <span className='text-lg text-black font-questrial'>Other</span>
                                            </div>
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
                                            value={formData.province}
                                            className=' my-4 w-full text-lg' label='Province'
                                            onChange={handleChange('province')}
                                            focused={true}
                                            required={true}
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.district}
                                            className=' my-4 w-full text-lg' label='District'
                                            onChange={handleChange('district')}
                                            focused={true}
                                            required={true}
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.sector}
                                            className=' my-4 w-full text-lg' label='Sector'
                                            onChange={handleChange('sector')}
                                            focused={true}
                                            required={true}
                                        />


                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.cell}
                                            className=' my-4 w-full text-lg' label='Cell'
                                            onChange={handleChange('cell')}
                                            focused={true}
                                            required={true}
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.village}
                                            className=' my-4 w-full text-lg' label='Village'
                                            onChange={handleChange('village')}
                                            focused={true}
                                            required={true}
                                        />

                                    </div>
                                    :
                                    <div className='w-full flex flex-col'>
                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.headTeacher}
                                            className=' my-4 w-full text-lg' label='Head Teacher'
                                            onChange={handleChange('headTeacher')}
                                            focused={true}
                                            required={true}
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
                                        />
                                        <div className='relative w-full my-4 text-lg rounded flex items-center justify-center border-2 border-[#1976d2] h-72'>
                                            <span className='absolute -top-[15px] left-2 bg-ek-blue/5 text-[13px] text-[#1976d2] h-[15px] text-center w-12 roboto'>Logo *</span>
                                            {formData.logoImageStr ?
                                                <div className='w-full flex items-center justify-around h-full'>
                                                    <div className='flex items-center justify-center flex-col'>
                                                        <button className={`bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded my-2 text-lg submitButton`} onClick={() => { setFormData({ ...formData, logoImageStr: '' }) }}>REMOVE</button>
                                                        <label htmlFor='logoImage' className={`text-center flex items-center justify-center bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded my-2 text-lg submitButton`}>CHANGE</label>
                                                    </div>
                                                    <div className='w-1/2 h-4/5 flex items-center justify-center rounded'><Image objectFit='cover' width={400} height={250} className='w-full h-full' src={formData.logoImageStr}></Image></div>
                                                </div>
                                                :
                                                <label htmlFor="logoImage" className='w-full h-full flex flex-col items-center justify-center'>
                                                    <Image width={200} height={100} src={dragImages}></Image>
                                                    <span className='text-lg text-ek-blue-50 font-questrial'>Drop file here</span>
                                                </label>
                                            }
                                            <input onChange={previewFile} type="file" className='logo hidden' name="logo" id="logoImage" />
                                        </div>
                                    </div>

                        }
                        <div className='flex items-end justify-end mt-8'>
                            <button className={` mx-2 ${step === 1 ? 'cursor-not-allowed text-ek-blue-75/50 ' : ' text-ek-blue-75  cursor-pointer'} w-32 h-12 rounded text-lg`} onClick={() => { setStep(step - 1) }}>BACK</button>

                            {
                                step === 3 ?
                                    <button className={`bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`} type='submit'>FINISH</button>
                                    :
                                    <button className={`bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`} onClick={() => { setStep(step + 1) }}>NEXT</button>
                            }
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default signup
