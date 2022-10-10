import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Autocomplete, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { NextComponentType } from 'next'
import React, { useState } from 'react'
import 'animate.css';
import { useAuth } from '../../../Context/AuthContext'

const EducatorForm: NextComponentType = () => {

  const {login}:any = useAuth()

  const handleSubmit = async (e: any) => {
    setSubmitLoader(true)
    e.preventDefault()
    //console.log(formData)
    const data = login({formData})

  }

  const [submitLoader, setSubmitLoader] = useState(false)

  interface State {
    type:string
    emailorcode: string;
    school: string;
    password: string;
    showPassword: boolean;
  }

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    accountType:'educator',
    emailorcode: '',
    school: '',
    password: '',
    showPassword: false,
  })

  const schools = [
    'Rwanda Coding Academy',
    'Kigali Christian School',
    'Nyabihu TVET School',
    'Kigali Parents School',
  ];

  return (
    <div className=' duration-1000 h-4/5  w-4/5 rounded-lg mmsm:border-2 flex items-center justify-start flex-col border-ek-blue px-3 py-4'>
      <h1 className='heading-text text-4xl w-full text-center text-ek-blue my-4 '>LOGIN</h1>
      <form onSubmit={handleSubmit} className='flex w-10/12 mt-12 items-center justify-start flex-col'>

        <Autocomplete
          // isOptionEqualToValue
          disablePortal
          id="combo-box-demo"
          options={schools}
          sx={{ width: '100%' }}
          className='w-full my-4 bg-ek-blue/10'
          ListboxProps={{ color: 'red' }}
          renderInput={(params) => <TextField onChange={handleChange('school')} required={true} focused={true} autoFocus={true} {...params} label="School" />}
        />


        <TextField
          InputProps={{
            style: { color: 'black' },
          }}
          className='bg-ek-blue/10 my-4 w-full text-lg' label='Email'
          onChange={handleChange('emailorcode')}
          focused={true}
          required={true}
        />

        <FormControl sx={{ m: 1, width: '100%' }} focused={true} className='bg-ek-blue/10' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={formData.showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange('password')}
            required={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  className='text-ek-blue'
                >
                  {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <button className={`heading-text w-11/12 mt-12 h-12 btn rounded text-2xl text-white cursor-pointer bg-ek-blue`}>{
          submitLoader
            ?
            <CircularProgress className='m-auto' size={30} color='inherit' />
            :
            'GET IN'
        }</button>
      </form>
    </div>
  )
}

export default EducatorForm
