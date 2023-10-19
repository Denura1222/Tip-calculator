import React from 'react'


const DisplayLayout = (props) => {

    const { setTipPerPerson, SetTotalPerPerson, SetTotalBill } = props;
    
   

    
    return (
        <div className='rounded-lg p-5 ml-2 w-full h-full grid grid-cols-2 gap-10 bg-sky-500/100'>
            <div className='mr-5'><div><h1 className='font-semibold	text-white	'>Tip Amount</h1> </div> <h1 className='text-gray-50 text-opacity-50'>/ person</h1><div></div> </div>
            <div className='text-[20px]'>$ {setTipPerPerson.toFixed(2)}</div>
            <div className='mr-5'><div><h1 className='font-semibold	text-white	'>Total Amount</h1> </div> <h1 className='text-gray-50 text-opacity-50'>/ person</h1><div></div> </div>
            <div className='text-[20px]'>$ {SetTotalPerPerson.toFixed(2)}</div>
            <div className='mr-5'><h1 className='font-semibold	text-white	'>Total Bill</h1> </div>
            <div className='text-[25px]'>$ {SetTotalBill}</div>
            </div>
    )
}

export default DisplayLayout

