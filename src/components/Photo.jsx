import React from 'react'

const Photo = (props) => {
    return (
        <div>
            <div className="group relative">
                <img className="w-full "
                    src={props.url} />
                <div
                    className="absolute top-0 left-0 w-full h-0 flex justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                   <ion-icon name="chatbox-outline"></ion-icon>
                    <h1 className="text-medium text-blue-500 font-[poppins] ">{props.comment}</h1>
                    <ion-icon name="heart-outline"></ion-icon>
                    <h1 className="text-medium text-blue-500 font-[poppins] ">{props.love}</h1>
                </div>
            </div>
        </div>
    )
}


export default Photo
