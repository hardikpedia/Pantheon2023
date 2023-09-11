import { useState } from 'react';

export default function Signup() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        password: ''
    });

    const { name, email, phone, college, password } = data;

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setData({
            name: '',
            email: '',
            phone: '',
            college: '',
            password: ''
        });
    };

    return (
        <div className="bg-black h-screen">
            <div className="bg-white bg-opacity-20 text-white p-5 m-auto w-fit">
                <form onSubmit={onSubmitHandler}>
                    <div className='flex flex-row p-2 m-2 w-15 justify-between'>
                        <label>NAME</label>
                        <input type='text' name='name' value={name} onChange={onChangeHandler} className="border-black border-2" />
                    </div>
                    <div className='flex flex-row p-2 m-2 w-15 justify-between'>
                        <label>EMAIL ID</label>
                        <input type='email' name='email' value={email} onChange={onChangeHandler} className="border-black border-2"/>
                    </div>
                    <div className='flex flex-row p-2 m-2 w-15 justify-between'>
                        <label>PHONE NUMBER</label>
                        <input type='text' name='phone' value={phone} onChange={onChangeHandler} className="border-black border-2"/>
                    </div>
                    <div className='flex flex-row p-2 m-2 w-15 justify-between'>
                        <label>COLLEGE</label>
                        <input type='text' name='college' value={college} onChange={onChangeHandler} className="border-black border-2"/>
                    </div>
                    <div className='flex flex-row p-2 m-2 w-15 justify-between'>
                        <label>PASSWORD</label>
                        <input type='password' name='password' value={password} onChange={onChangeHandler} className="border-black border-2"/>
                    </div>
                    <button type='submit' className='border-black border-2 bg-gray-400'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}