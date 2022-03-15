import './service.css'

const Service = () =>{
    

    return(
        <section className='services section' id='service'>
            <span className='section-subtitle'>My Services</span>
            <h2 className='section-title'>What I Offer</h2>
            <div className='services-container container grid'>
                <div className='services-card'>
                    <h3 className='services-title'>Product Designer</h3>
                    <span className='services-button' > modalSee more
                    <div  className='services-icon'>   
                        <box-icon name='right-arrow-alt'></box-icon>
                    </div>
                    </span>
                    <div className='services-modal'>
                        <div className='services-modal-content'>
                        <div className='services-modal-close'>
                                <box-icon name='x'></box-icon>
                            </div>
                            <h3 className='services-modal-title'>Product Designer</h3>
                            <p className='services-modal-description'>
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>
                            <ul className='services-modal'>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I develop the user interface</p>
                                </li>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>Web page development</p>
                                </li>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I create ux element interaction</p>
                                </li>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I position your company brand</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='services-card'>
                    <h3 className='services-title'>UX Designer</h3>
                    <span className='services-button'>See more
                    <div  className='services-icon'>   
                        <box-icon name='right-arrow-alt'></box-icon>
                    </div>
                    </span>
                    <div className='services-modal'>
                        <div className='services-modal-content'>
                        <div className='services-modal-close'>
                                <box-icon name='x'></box-icon>
                            </div>
                            <h3 className='services-modal-title'>UX Designer</h3>
                            <p className='services-modal-description'>
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>
                            <ul className='services-modal'>
                                <li className='services-modal-item'>
                                    <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I develop the user interface</p>
                                </li>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>Web page development</p>
                                </li>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I create ux element interaction</p>
                                </li>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                </div>
                                <p className='services-modal-info'>I position your company brand</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='services-card'>
                    <h3 className='services-title'>Web Developer</h3>
                    <span className='services-button'>See more
                    <div  className='services-icon'>   
                        <box-icon name='right-arrow-alt'></box-icon>
                    </div>
                    </span>
                    <div className='services-modal'>
                        <div className='services-modal-content'>
                            <div className='services-modal-close'>
                                <box-icon name='x'></box-icon>
                            </div>
                            <h3 className='services-modal-title'>Web Developer</h3>
                            <p className='services-modal-description'>
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>
                            <ul className='services-modal'>
                                <li className='services-modal-item'>
                               <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I develop the user interface</p>
                                </li>
                                <li className='services-modal-item'>
                               <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>Web page development</p>
                                </li>
                                <li className='services-modal-item'>
                               <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I create ux element interaction</p>
                                </li>
                                <li className='services-modal-item'>
                                <div className='services-modal-icon'>
                                        <box-icon name='check-double' ></box-icon>
                                    </div>
                                <p className='services-modal-info'>I position your company brand</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    )
}

export default Service