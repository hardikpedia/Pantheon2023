import { useState } from 'react';
import { useRouter } from 'next/router';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useStateContext } from '@/context';
import Loader from '@/components/Loader';
import StarsCanvas from '@/components/Stars';

export default function LoginIn() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [msg, setMsg] = useState("password")
    const { email, message } = form;

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setForm({
            name: '',
            email: '',
            message: ''
        });
        router.push('/');
    };

    const handleClik = () => {
        router.push('/signup');
    }

    return (
        <div className="bg-primary bg-black pt-20 pb-20 relative z-0">
            <div className='mx-auto bg-primary bg-pink-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.09] rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]  '>
                <div className=" flex justify-center items-center flex-col  sm:p-10 p-6 ">
                    

                    <form onSubmit={onSubmitHandler} className="w-full md:lg-[80%] lg:w-[75%] mt-[10px] flex flex-col gap-[15px]">
                    <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">CONTACT US</h1>

                        <FormField
                            labelName="Name*"
                            placeholder="Enter your name"
                            inputType="text"
                            value={form.name}
                            handleChange={(e) => handleFormFieldChange('name', e)}
                        />
                        <FormField
                            labelName="Email*"
                            placeholder="Enter your email id"
                            inputType="email"
                            value={form.email}
                            handleChange={(e) => handleFormFieldChange('email', e)}
                        />

                        <div className=' '>
                            <FormField
                                labelName="Message*"
                                placeholder="Enter your message"
                                inputType="text"
                                value={form.password}
                                handleChange={(e) => handleFormFieldChange('message', e)}
                                isTextArea={true}
                            />
                            
                        </div>
                        <div className='font-poppins font-normal text-white/50 text-[15px] md:text-[16px] leading-[25px] flex md:text-start text-center md:leading-[30.8px]' > or write us at <span className='underline cursor-pointer text-blue-800 ml-2' > pantheon@bitmesra.ac.in </span>  </div>
                        <div className="flex justify-center items-center mt-[30px]">
                            <CustomButton
                                btnType="submit"
                                title="Send"
                                handleClick={onSubmitHandler}
                                styles=""
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* <ToastContainer /> */}
            <StarsCanvas />
        </div>

    );
}