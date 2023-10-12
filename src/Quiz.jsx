// import React from 'react'
import "./index.css"

const Quiz = () => {
    return (
        <>


            <div className="mcqsdiv w-3/4  bg-slate-200 my-4 mx-auto flex-col justify-center gap-8 " >
                <div className="mcq_Statement xl:p-3 text-lg-3 xl:text-3xl mb-5 text-center ">This is my first Statement</div>

                <div className="mcqs_options w-5/6 m-auto xl:text-2xl ">
                    {/* <ul > */}
                    <li className="list-none"><span><input className="p-3 mr-3" type="checkbox" /></span>option</li>
                    <li className="list-none"><span><input className="p-3 mr-3" type="checkbox" /></span>option</li>
                    <li className="list-none"><span><input className="p-3 mr-3" type="checkbox" /></span>option</li>
                    <li className="list-none"><span><input className="p-3 mr-3" type="checkbox" /></span>option</li>
                    {/* </ul> */}
                </div>
            </div>
        </>
    )
}

export default Quiz