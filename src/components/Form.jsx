import React from 'react';

const Form = ({ input, setInput, handleFormSubmit }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <form action="" className='text-white space-x-5 space-y-3 mt-6' onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder='Enter Your todos Here..'
                value={input} required
                onChange={onInputChange}
                className='ring-1 ring-orange-300 outline-none md:min-w-80 p-2 bg-black focus:ring-1 focus:ring-pink-300 rounded-md'
            />
            <button
                className='min-w-32 p-2 rounded-md text-black cursor-pointer bg-gradient-to-r from-orange-300 to-pink-300 font-semibold'
                type='submit'
            >
                {input ? 'Edit Task' : 'Add Task'}
            </button>
        </form>
    )
}

export default Form;
