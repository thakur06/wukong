import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

export const About = () => {
    const videoRef = useRef(null);

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to('.about-image', {
            width: '100dvw',
            height: '100dvh',
            borderRadius: 0,
        });
    });

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const handleFocus = () => {
            video.play().catch((error) => {
                console.error('Video play failed:', error);
            });
        };

        const handleBlur = () => {
            video.pause();
        };

        // Play initially (if allowed by browser)
        handleFocus();

        // Add event listeners
        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

        // Cleanup
        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <div id="about" className="min-h-screen min-w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to AOT
                </h2>

                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="mt-5 !text-black text-center"
                />
                <div className="about-subtext">
                    <p>the game begins here the game begins here the game begins here </p>
                    <p>the game begins here the game begins here</p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="clip-[polygon(0_0,_100%_0,_90%_90%,_10%_100%)] about-image">
                    <video
                        ref={videoRef}
                        src="/videos/trailer.webm"
                        loop
                        muted
                        playsInline
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};