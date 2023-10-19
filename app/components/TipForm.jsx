"use client"
import React, { useState, useEffect } from 'react'
import TipSelector from './TipSelector';
import DisplayLayout from './DisplayLayout';

const TipForm = () => {

    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    const [people, setPeople] = useState(0)



    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
    const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
    const [totalBill, setTotalBill] = useState(0);


    console.log("Tip",tip)

    useEffect(() => {

        const totalTip = bill * tip
        const TotBill = totalTip + Number(bill)
       

        setTotalAmountPerPerson(bill / people)
        setTipAmountPerPerson((bill * tip) / people)
        setTotalBill(TotBill)



    }, [bill, people, tip])

    

  



    return (
        <div className='flex flex-row gap-3'>
            <div>
            <form className='flex flex-col gap-3'>
                <label>Bill </label>
                <input value={bill} onChange={(e) => setBill(e.target.value)} className='border border-black rounded-lg p-2' placeholder="$ 0" />

                <label>select tip in % </label>


                <TipSelector setTip={setTip} />





                <input />
                <label>
                    Number of people
                </label>
                <input value={people} onChange={(e) => setPeople(e.target.value)} className='border border-black rounded-lg p-2' placeholder="$ 0" />

            </form>

            </div>
           
            <div><DisplayLayout setTipPerPerson={tipAmountPerPerson} SetTotalPerPerson={totalAmountPerPerson} SetTotalBill={totalBill} /></div>

        </div>

    )
}

export default TipForm;