import { TextInput } from 'flowbite-react';
import React, { useState } from 'react'

const FormContent = ({hideModal}) => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone, email);
        hideModal();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-white  rounded-lg flex flex-col gap-4 text-center p-4'>
                <h2 className='text-2   xl font-bold'>Contact Info</h2>
                <TextInput
                    id="phone"
                    placeholder="Phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel" />

                <TextInput
                    id="email"
                    placeholder="Email..."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email" />

                <button type="submit" className="focus:outline-none text-white bg-[#5C0632] hover:bg-[#60113a] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#] dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
            </form>
        </div>
    )
}

export default FormContent