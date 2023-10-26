import React from 'react';
import AddOnPopup  from './AddOnPopup';

const MenuCart = ({ myData }) => {

    

    return (
        <>

            <section className="grid grid-cols-3 gap-16 justify-center">
                {myData.map((currEle) => {   // i used this map for DRY (Don't Reapet Yourself)
                    //Destructuring. we use DRY. Now we have not neet to write currEle.id in line n0 16 and no need to write currEle.name etc
                    const { id, name, type, rating, img_url: image, description, price } = currEle;
                    return (
                        <>
                            <AddOnPopup myData1={currEle}/>
                            <div className="mt-5 grid grid-cols-1 justify-center" key={id}>
                                <div className="bg-white p-7 relative shadow-md z-10">
                                    <div className="inline-block">
                                        <span className="inline-block mt-4 border border-gray-300 rounded-full inline-block h-6 w-6 text-center leading-6 text-xs subtle">{id}</span>
                                        {/* <span className="block text-xs uppercase tracking-wider mt-4 subtle">{rating}</span> */}
                                        <h2 className="font-serif text-5xl font-light leading-60 mt-2 capitalize">{name}</h2>
                                        <span className="font-light leading-6 mt-2 subtle">
                                            {description}
                                        </span>
                                        <div className="before:cursor-pointer before:text-xs before:font-semibold before:tracking-wider before:mt-1 before:mb-5 before:relative before:text-right before:uppercase after:block after:bg-gray-300 after:h-0.5 after:w-3/4 after:absolute after:top-3">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="max-w-full h-auto" />
                                    <div className='flex'>
                                    <div className='justify-start gap-5 mt-4'>
                                        <span className="block text-xs uppercase tracking-wider mt-4 subtle">{rating}</span>
                                        <span className="block text-xs uppercase tracking-wider mt-4 subtle">{price}</span>
                                        <span className="block text-xs uppercase tracking-wider mt-4 subtle">{type}</span>  
                                    </div>
                                    <div className='justify-end'>
                                       <span className="float-right mt-1 border border-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-300 hover:text-black subtle">Add now</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCart
