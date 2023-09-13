"use client"
import { useState } from 'react';
import Image from 'next/image';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


export default function TeamRegister() {
    const [form, setForm] = useState({
        teamName: '',
        teamId: '',
    });



    const { teamName, teamId} = form;

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(form);
        setForm({
            teamName: '',
            teamId: '',
        });
    };

    return (
        <div className="bg-primary bg-black pt-10 pb-20">
            <div className='text-5xl flex justify-center items-center text-white mb-10'>Create Team</div>
            <div className='mx-auto bg-primary bg-[#01040f]  rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]  '>
                <div className=" flex justify-center items-center flex-col  sm:p-10 p-6 ">
                    {/* {isLoading && <Loader />} */}

                    <form onSubmit={onSubmitHandler} className="w-full md:lg-[80%] lg:w-[75%] mt-[10px] flex flex-col gap-[15px]">


                        <FormField
                            labelName="Team Name*"
                            placeholder="Enter Name Of your New Team"
                            inputType="text"
                            value={form.teamName}
                            handleChange={(e) => handleFormFieldChange('teamName', e)}
                        />

                        <div className="flex justify-center items-center mt-[30px]">
                            <CustomButton
                                btnType="submit"
                                title="Create Team"
                                handleClick={onSubmitHandler}
                                styles="bg-[#1dc071]"
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* <ToastContainer /> */}
        </div>

    );
}