import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Image from 'next/image';
import { CreateSchoolFormDataState } from '../../../pages/interfaces/school';

type Props = {
    setCropMode: Function,
    imageSrc: string;
    setFormData: Function,
    formData: CreateSchoolFormDataState;
}

const CropModal = (props: Props) => {

    const [cropData, setCropData] = useState(props.formData.logoImageStr);
    const [cropper, setCropper] = useState<any>();

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
            props.setFormData({ ...props.formData, logoImageStr: cropper.getCroppedCanvas().toDataURL() });
        }
        props.setCropMode(false)
    };

    return (
        <div className="absolute w-full h-full top-0 left-0 bg-black/70 flex items-center justify-center z-[2]">
            <div className='absolute z-[3] h-full w-full' onClick={props.setCropMode(false)}></div>
            {/*
            <div className='z-[4] bg-white rounded-lg h-fit w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 flex items-center justify-start flex-col p-8'>
                <div className='flex items-end justify-end w-full'>
                    <AiOutlineClose color='black' size={25} className='cursor-pointer ' onClick={props.setCropMode(false)} />
                </div>
                <div className='my-3 w-full flex items-center justify-around'>
                    <button className='text-white font-questrial px-4 py-2 bg-ek-blue-75 rounded-lg cursor-pointer' onClick={getCropData}>
                        Crop Image
                    </button>
                    <label htmlFor='logoImage' className='px-4 py-2 rounded bg-ek-blue-75 text-white font-questrial'>CHANGE</label>
                </div>
                <div className='w-full'>
                    <div className='w-full'>
                        <Cropper
                            style={{ height: 300, width: "100%" }}
                            zoomTo={0.5}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={props.formData.logoImageStr}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false}
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                            guides={true}
                        />
                    </div>
                    <div className='w-full flex items-center justify-start md:flex-row flex-col'>
                        <div className="md:w-1/2 w-full flex flex-col items-center justify-start">
                            <h1 className='heading-text text-ek-blue text-xl'>Preview</h1>
                            <div
                                className="overflow-hidden img-preview"
                                style={{ width: "100%", float: "left", height: "300px" }}
                            />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-center justify-start">
                            <h1 className='heading-text text-ek-blue text-xl'>Cropped Image</h1>
                            <div className="w-1/2 h-full">
                                <Image width={200} height={300} style={{ width: "100%" }} src={cropData} alt="cropped" />
                            </div>
                        </div>
                    </div>
                    <br style={{ clear: "both" }} />
                </div>
            </div> */}
        </div>
    )
}

export default CropModal
