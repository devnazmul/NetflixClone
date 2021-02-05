import React from 'react'
import './Banner.css'


export default function Banner() {
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://gamecardsdirect.com/content/item/nieuwsafb_banner/322/netflix.jpg")`,
            backgroundPosition: "center center",
        }}>
            
            <div className='banner_contant'>
                <h1 className='banner_title'>Movie Name</h1>
                
                <div className='banner_btn_container'>
                    <button className='banner_btn'>Play</button>
                    <button className='banner_btn'>My List</button>
                </div>

                <p className='banner_discription'>
                    this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.this is bannner deis.
                </p>
                
            </div>
        </header>
    )
}
