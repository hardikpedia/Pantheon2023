"use client"
import { useState } from 'react';
import Image from 'next/image';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Loader from './Loader';
import { useStateContext } from '@/context';

export default function EnterOtp({ id }) {
    const { user, userinfo, setUser, setUserInfo } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState('')



    const handleFormFieldChange = (fieldName, e) => {
        setOtp(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        console.log(otp);
        
    };


    return (
        <div className="bg-primary bg-black rounded-md pt-10 pb-20 ">
            <div className='text-5xl flex justify-center items-center text-white mb-10'>Enter OTP</div>
            <div className='mx-auto bg-primary bg-[#01040f]  rounded-lg px-10  '>
                <div className=" flex justify-center items-center flex-col   ">
                    {isLoading && <Loader />}

                    <form onSubmit={onSubmitHandler} className="w-full  mt-[10px] flex flex-col gap-[15px]">


                        <FormField
                            placeholder="Enter OTP you recieved on your e-mail"
                            inputType="text"
                            value={otp}
                            handleChange={(e) => handleFormFieldChange('teamId', e)}
                        />

                        <div className="flex justify-center items-center mt-[30px]">
                            <CustomButton
                                btnType="submit"
                                title="Submit OTP"
                                handleClick={onSubmitHandler}
                                styles=""
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* <ToastContainer /> */}
        </div>

    );
}