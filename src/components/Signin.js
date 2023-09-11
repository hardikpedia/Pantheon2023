import { useState } from 'react';

export default function signin() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = data;

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    };

    return (
        <div className=''>
            <form onSubmit={onSubmitHandler}>
                <div className=''>
                    <label>EMAIL</label>
                    <input type='email' name='email' value={email} className='border-black border-2' onChange={onChangeHandler} />
                </div>
                <div className=''>
                    <label>PASSWORD</label>
                    <input type='password' name='password' value={password} className='border-black border-2' onChange={onChangeHandler} />
                </div>
            </form>
        </div>
    );
}