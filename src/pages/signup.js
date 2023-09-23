import { useState } from 'react';
import { useRouter } from 'next/router';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useStateContext } from '@/context';
import Loader from '@/components/Loader';

export default function Signup() {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const { user, userinfo, setUser, setUserInfo } = useStateContext();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        password: ''
    });
    const [pass, setPass] = useState("password")



    const { name, email, phone, college, password } = form;

    const handlePass = (event) => {
        if (pass === "password") setPass("text")
        else setPass("password")
    }

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch('api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                phone: form.phone,
                college: form.college,
                password: form.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setIsLoading(false);
        const id = data['ID'];
        setUser(true);
        setUserInfo({
            name: form.name,
            pantheonid: id,
            email: form.email,
            team: "null"
        });
        setForm({
            name: '',
            email: '',
            phone: '',
            college: '',
            password: ''
        });
        router.push('/profile');
    };

    const handleClik = () => { 
        router.push('/login');
    }

    return (
        <div className="bg-primary bg-black pt-10 pb-20">
            <div className='text-5xl font-bold flex justify-center items-center text-white mb-3'>SIGNUP</div>
            <div className='mx-auto bg-primary bg-[#01040f]  rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]  '>
                <div className=" flex justify-center items-center flex-col  sm:p-10 p-6 ">
                    {isLoading && <Loader />}

                    <form onSubmit={onSubmitHandler} className="w-full md:lg-[80%] lg:w-[75%] mt-[10px] flex flex-col gap-[15px]">


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


                        <FormField
                            labelName="Phone*"
                            placeholder="Enter your phone number"
                            inputType="text"
                            value={form.phone}
                            handleChange={(e) => handleFormFieldChange('phone', e)}
                        />

                        <FormField
                            labelName="College*"
                            placeholder="Enter your college name"
                            inputType="text"
                            value={form.college}
                            handleChange={(e) => handleFormFieldChange('college', e)}
                        />
                        <div className='  '>
                            <FormField
                                labelName="Password*"
                                placeholder="Enter new password"
                                inputType={pass}
                                value={form.password}
                                handleChange={(e) => handleFormFieldChange('password', e)}
                            />
                            {pass !== "password" ? <div className='absolute -mt-8 right-[16%] sm:right-[18%] md:right-[28%] lg:right-[32%] text-white scale-[1.4]' onClick={handlePass}><AiFillEye /></div> : <div className='absolute -mt-8 right-[16%] sm:right-[18%] md:right-[28%] lg:right-[32%] text-white scale-[1.4]' onClick={handlePass}><AiFillEyeInvisible /></div>}
                        </div>

                        <div className='font-poppins font-normal text-white/50 text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px]' > Already have an account? <span onClick={handleClik} className='underline cursor-pointer text-blue-800 ml-2' > login? </span>  </div>

                        <div className="flex justify-center items-center mt-[30px]">
                            <CustomButton
                                btnType="submit"
                                title="Sign Up"
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