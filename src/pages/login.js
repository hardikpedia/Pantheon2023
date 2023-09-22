import { useState } from 'react';
import { useRouter } from 'next/router';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useStateContext } from '@/context';
import Loader from '@/components/Loader';


export default function LoginIn() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { user, userinfo, setUser, setUserInfo } = useStateContext();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [pass, setPass] = useState("password")



    const { email, password } = form;

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
        const response = await fetch('api/users/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: form.email,
                password: form.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        setIsLoading(false);
        setUser(true);
        setUserInfo({
            name: res['name'],
            pantheonid: res['ID'],
            email: form.email
        });
        setForm({
            email: '',
            password: ''
        });
        router.push('/register');
    };

    return (
        <div className="bg-primary h-screen bg-black pt-40 pb-20">
            <div className='text-5xl flex justify-center items-center text-white mb-10'>Login</div>
            <div className='mx-auto bg-primary bg-[#01040f]  rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]  '>
                <div className=" flex justify-center items-center flex-col  sm:p-10 p-6 ">
                    {isLoading && <Loader />}

                    <form onSubmit={onSubmitHandler} className="w-full md:lg-[80%] lg:w-[75%] mt-[10px] flex flex-col gap-[15px]">

                        <FormField
                            labelName="Email*"
                            placeholder="Enter your email id"
                            inputType="email"
                            value={form.email}
                            handleChange={(e) => handleFormFieldChange('email', e)}
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