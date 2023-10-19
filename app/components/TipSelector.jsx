import React, { useState } from 'react'

const TipSelector = ({ setTip }) => {


    const [customSelected, setCustomSelected] = useState(false)
    const [customTip, setCustomTip] = useState(0)
    const [activeTip, setActiveTip] = useState(null);

    setTip(Number(customTip))

    

    const haddleCustomClick = () => {

        setActiveTip(null);

        setCustomSelected(true)

        // setTip(customTip/100)
       

    }



    const tips = [
        {
            tip: 5, isCustom: false
        },
        {
            tip: 20, isCustom: false
        },
        {
            tip: 15, isCustom: false
        },
        {
            tip: 20, isCustom: false
        },
        {
            tip: 30, isCustom: false
        },
        {
            tip: 0, isCustom: true

        }
    ]

    const haddleClick = (index) => {

        if (activeTip === index) {
            setActiveTip(null);
            return;
          }
      
          setActiveTip(index);

        setTip(tips[index].tip / 100)



    }



    return (

        <div className='grid grid-cols-3 gap-3 w-full'>

            {tips.map((tip, index) => (
                <div key={index}>

                    {tip.isCustom ? (
                        <>

                            {customSelected ? (
                                <input
                                    type="number"
                                    name="tip"
                                    id="tip"
                                    className="block h-full w-full rounded-md border-0 px-2 py-1.5 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    placeholder="0.00"
                                    aria-describedby="tip-amount"
                                    value={customTip}
                                    onChange={(e)=>setCustomTip(e.target.value)}
                                // onBlur={handleCustomTipBlur}
                                />
                            ) : (

                                <button type='button' className='bg-sky-500/100 rounded-lg w-[100px] h-[30px]' onClick={haddleCustomClick} >
                                    custom
                                </button>


                            )}
                        </>


                    )

                        : (
                            <button type='button' className='bg-sky-500/100 rounded-lg w-[100px] h-[30px]' onClick={() => haddleClick(index)} >
                                {tip.tip}%
                            </button>
                        )}

                </div>



            ))}


        </div>

    )
}

export default TipSelector;