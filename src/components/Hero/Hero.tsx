import React, { useEffect, useState } from 'react'
import { Button } from '../Button';
import s from './Hero.module.css';

interface IClient{
   url:string;
   alt:string;
}
const clients:IClient[] = [
   {
      url:'./images/client-databiz.svg',
      alt: 'Databiz'
   },
   {
      url:'./images/client-audiophile.svg',
      alt: 'Audiophile'
   },
   {
      url:'./images/client-meet.svg',
      alt: 'Meet'
   },
   {
      url:'./images/client-maker.svg',
      alt: 'Maker'
   }
];

const Hero = () => {
   const [heroImage, setHeroImage]= useState('./images/image-hero-desktop.png');
   if(window.screen.width<=998){
      if(heroImage === './images/image-hero-desktop.png') setHeroImage('./images/image-hero-mobile.png');
   }

   useEffect(()=>{
      function resize(){
         if(window.screen.width<=998){
            if(heroImage === './images/image-hero-desktop.png') setHeroImage('./images/image-hero-mobile.png');
         }else{
            if(heroImage === './images/image-hero-mobile.png') setHeroImage('./images/image-hero-desktop.png');               
         }
      }
      window.addEventListener('resize', resize);
      return ()=>{window.removeEventListener('resize',resize)}
   },[heroImage]);

  return (
    <main className={s.hero}>
      <div className={s.heroContent}>
         <div className={s.contentText}>
            <h1 className={s.title}>Make remote work</h1>
            <div className={s.textBlock}>
               <h4 className={s.text}>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</h4>
            </div>
            <Button fill={true}>Learn more</Button>
         </div>
         <div className={s.clients}>
            {clients.map(client=>(<div key={client.alt+client.url}><img src={client.url} alt={client.alt}/></div>))}
         </div>
      </div>
      <div className={s.heroImagesContainer}><img className={s.heroImages} src={heroImage} alt='man eith laptop'></img></div>
    </main>
  )
}

export default Hero