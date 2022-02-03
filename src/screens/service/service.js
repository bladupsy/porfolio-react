import './service.css'

const Service = () =>{
    return(
        <section className='services section'>
            <span className='section-subtitle'>My Services</span>
            <h2 className='section-title'>What I Offer</h2>
            <div className='services-container container grid'>
                <div className='services-card'>
                    <h3 className='services-title'>Product Designer</h3>
                    <span className='services-button'>See more
                    <box-icon name='right-arrow-alt' className='services-icon'></box-icon>
                    </span>
                    <div className='services-modal'>
                        <div className='services-modal-content'>
                            <h3 className='services-modal-title'>Product Designer</h3>
                            <p className='services-modal-description'>
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>
                            <ul className='services-modal'>
                                <li className='services-modal-item'>
                                <box-icon name='check-double' className='services-modal-icon'></box-icon>
                                <p className='services-modal-info'>I develop the user interface</p>
                                </li>
                                <li className='services-modal-item'>
                                <box-icon name='check-double' className='services-modal-icon'></box-icon>
                                <p className='services-modal-info'>Web page development</p>
                                </li>
                                <li className='services-modal-item'>
                                <box-icon name='check-double' className='services-modal-icon'></box-icon>
                                <p className='services-modal-info'>I create ux element interaction</p>
                                </li>
                                <li className='services-modal-item'>
                                <box-icon name='check-double' className='services-modal-icon'></box-icon>
                                <p className='services-modal-info'>I position your company brand</p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
                <div className='services-card'>
                    <h3 className='services-title'>UI/UX Designer</h3>
                    <span className='services-button'>See more
                    <box-icon name='right-arrow-alt' className='services-icon'></box-icon>
                    </span>
                </div>
                <div className='services-card'>
                    <h3 className='services-title'>Web Designer</h3>
                    <span className='services-button'>See more
                    <box-icon name='right-arrow-alt' className='services-icon'></box-icon>
                    </span>
                
                </div>
            </div>
        </section>
    )
}

export default Service