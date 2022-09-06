import { Autocomplete, TextField } from '@mui/material'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { Navbar } from '../../components/Auth/Navbar'

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

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-start'>
            <Navbar page={'signup'} />
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
                                        className='bg-ek-blue/10 my-4 w-full text-lg' label='School Name'
                                        onChange={handleChange('schoolName')}
                                        focused={true}
                                        required={true}
                                    />

                                    <TextField
                                        InputProps={{
                                            style: { color: 'black' },
                                        }}
                                        value={formData.shortForm}
                                        className='bg-ek-blue/10 my-4 w-full text-lg' label='Short Form'
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
                                        className='w-full my-4 bg-ek-blue/10'
                                        ListboxProps={{ color: 'red' }}
                                        renderInput={(params) => <TextField value={formData.schoolName} onChange={handleChange('type')} required={true} autoFocus={true} {...params} label="School" />}
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
                                            className='bg-ek-blue/10 my-4 w-full text-lg' label='Province'
                                            onChange={handleChange('province')}
                                            focused={true}
                                            required={true}
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.district}
                                            className='bg-ek-blue/10 my-4 w-full text-lg' label='District'
                                            onChange={handleChange('district')}
                                            focused={true}
                                            required={true}
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.sector}
                                            className='bg-ek-blue/10 my-4 w-full text-lg' label='Sector'
                                            onChange={handleChange('sector')}
                                            focused={true}
                                            required={true}
                                        />


                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.cell}
                                            className='bg-ek-blue/10 my-4 w-full text-lg' label='Cell'
                                            onChange={handleChange('cell')}
                                            focused={true}
                                            required={true}
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.village}
                                            className='bg-ek-blue/10 my-4 w-full text-lg' label='Village'
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
                                            className='bg-ek-blue/10 my-4 w-full text-lg' label='Head Teacher'
                                            onChange={handleChange('headTeacher')}
                                            focused={true}
                                            required={true}
                                        />

                                        <TextField
                                            InputProps={{
                                                style: { color: 'black' },
                                            }}
                                            value={formData.moto}
                                            className='bg-ek-blue/10 my-4 w-full text-lg' label='Moto'
                                            onChange={handleChange('moto')}
                                            focused={true}
                                            required={true}
                                        />
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
