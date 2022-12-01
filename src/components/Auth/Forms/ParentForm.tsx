
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { NextComponentType } from 'next'
import React, { useState } from 'react'
import { useRegisterParent } from '../../../hooks/parent';

const ParentForm: NextComponentType = () => {

  const [submitLoader, setSubmitLoader] = useState(false)

  const HandleSubmit = async (e: any) => {
    e.preventDefault()
    setSubmitLoader(true)
    setFormData({ ...formData, activeButton: false })
    //console.log(formData)
    const data = useRegisterParent({ formData })
    //console.log(data)

  }

  interface State {
    emailorcode: string;
    password: string;
    school: string;
    accountType: string;
    showPassword: boolean;
    activeButton: boolean;
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
    accountType: 'parent',
    emailorcode: '',
    password: '',
    school: '',
    showPassword: false,
    activeButton: true
  })



  return (
    <div className=' h-4/5  w-4/5 rounded-lg mmsm:border-2 flex items-center justify-start flex-col border-ek-blue px-3 py-4'>
      <h1 className='heading-text text-4xl w-full text-center text-ek-blue my-4 '>LOGIN</h1>
      <form onSubmit={HandleSubmit} className='flex w-11/12 msm:w-10/12 mt-12 items-center justify-start flex-col'>
        <TextField
          InputProps={{
            style: { color: 'black' },
          }}
          onChange={handleChange('emailorcode')}
          required={true}
          className='bg-ek-blue/10 my-4 w-full text-lg' label='PhoneNumber / Email'
          focused={true} />

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

        <button type={submitLoader ? 'button' : 'submit'} className={`heading-text w-11/12 mt-12 h-12 btn rounded text-2xl text-white cursor-pointer bg-ek-blue`}>{
          submitLoader
            ?
            <CircularProgress className='m-auto' size={30} color='inherit' />
            :
            'GET IN'
        }</button>      </form>
    </div>
  )
}

export default ParentForm
