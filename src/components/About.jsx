import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

function About() {

    const clipRef = useRef(null)
    const maskRef = useRef(null)

    useGSAP(() => {
        if (!maskRef.current) return; // Prevent error if ref is not set

        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: clipRef.current,
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        });

        clipAnimation.fromTo(maskRef.current,
            {
                // Add a 'to' state if needed
                width: '50vw',
                height: '50vh',
                borderRadius: '2rem',
                duration: 1
            },
            {
                width: '100vw',
                height: '100vh',
                borderRadius: 0,
            },
        );
    }, [])

    return (
        <div
            id='about'
            className='min-h-screen w-screen'
        >
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px'>Welcome to Zentry</h2>
                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest sh<b>a</b>red <b>A</b>dventure"
                    containerClass="mt-5 !text-black text-center"
                />
                <div className='about-subtext'
                >
                    <p>The game of Games begins-your life, now an epic MMORPG</p>
                    <p>Zentry unites every player from countless games and platforms</p>
                </div>
            </div>
            <div
                ref={clipRef}
                className='h-dvh w-screen' id='clip'>
                <div ref={maskRef} className='mask-clip-path about-image'
                >
                    <img src="img/about.webp" alt="Background"
                        className='absolute left-0 top-0 size-full object-cover'
                    />

                </div>

            </div>
        </div>
    )
}

export default About