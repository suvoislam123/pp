import React from 'react';
const Footer = () => {
    const date = new Date();

    return (
        <div className='w-100 bg-dark py-5 mt-5' >
            <p className='text-center text-white'>Copyright©️ Bd Tour Guid {date.getFullYear()}</p>
        </div>
    );
};

export default Footer;