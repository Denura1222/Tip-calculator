const CalLayout =({children})=>{
    return(

        <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg flex flex-col">
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    );
}


export default CalLayout;