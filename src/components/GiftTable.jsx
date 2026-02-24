import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'
import Modal from './common/Modal'

const GiftTable = () => {
    const [accountModalOpen, setAccountModalOpen] = React.useState(false)
    const animations = [
        useInViewAnimation({ order: 1, stepDelay: 0 }, true),
        useInViewAnimation({ order: 2, stepDelay: 300 }, true),
        useInViewAnimation({ order: 3, stepDelay: 300 }, true),
        useInViewAnimation({ order: 4, stepDelay: 300 }, true),
        useInViewAnimation({ order: 5, stepDelay: 300 }, true),
    ]

    return (
        <section className='gift-table'>
            <div className="elements-container">
                <div className="title-container">
                    <img ref={animations[0].ref} src="/assets/GiftTable/title.png" alt="" className={`opacity-0 ${animations[0].isVisible ? 'animate-appers' : ''} title-image`} />
                </div>
                <div className='description-container'>
                    <img ref={animations[1].ref} src="/assets/GiftTable/description.png" alt="" className={`opacity-0 ${animations[1].isVisible ? 'animate-appers' : ''} description-image`} />
                </div>
                <div className='decor-container'>
                    <img ref={animations[2].ref} src="/assets/GiftTable/option1.png" alt="" className={`opacity-0 ${animations[2].isVisible ? 'animate-appers' : ''} img-decor_1`} />
                    <img ref={animations[3].ref} src="/assets/GiftTable/option2.png" alt="" className={`opacity-0 ${animations[3].isVisible ? 'animate-appers' : ''} img-decor_2`} onClick={() => setAccountModalOpen(true)} />
                </div>
                <img ref={animations[4].ref} src="/assets/GiftTable/decor.png" alt="" className={`opacity-0 ${animations[4].isVisible ? 'animate-appers' : ''} decor-image`} />
                {accountModalOpen && <div className="account-modal">
                    <Modal>
                        <img src="/assets/GiftTable/account_details.png" alt="" className="account-image" onClick={() => setAccountModalOpen(false)} />
                    </Modal>
                </div>}
            </div>

        </section>
    )
}

export default GiftTable