import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const GiftTable = () => {

    return (
        <section className='gift-table'>
            <div className="elements-container">
                <div className="title-container">
                    <img src="/assets/GiftTable/title.png" alt="" className="title-image" />
                </div>
                <div className='description-container'>
                    <img src="/assets/GiftTable/description.png" alt="" />
                </div>
                <div className='decor-container'>
                    <img src="/assets/GiftTable/option1.png" alt="" className="img-decor" />
                    <img src="/assets/GiftTable/option2.png" alt="" className="img-decor" />
                </div>
            </div>
            <img src="/assets/GiftTable/decor.png" alt="" />
        </section>
    )
}

export default GiftTable