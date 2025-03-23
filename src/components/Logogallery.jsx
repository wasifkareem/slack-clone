import React from 'react'

const logos = [
    { id: 3, name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { id: 1, name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { id: 5, name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { id: 2, name: 'Facebook', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
    
    { id: 4, name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
   
    { id: 6, name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
];
const Logogallery = () => {
return (
    <div className='grid grid-cols-3 gap-8 md:flex md:flex-wrap md:justify-between my-10 lg:my-24 md:gap-3'>
        {logos.map((logo) => (
            <div className='flex justify-center' key={logo.id}>
                <img className=' h-7 md:h-10' src={logo.src} alt={logo.name} />
            </div>
        ))}
    </div>
);
}

export default Logogallery