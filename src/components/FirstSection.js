import React, { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import bgImage from '../img/new_main.png';
import apple from '../img/apple.png';
import googlePlay from '../img/googleplay.png';
import chevronDown from '../img/icon/chevron_down.svg';


const FirstSection = forwardRef(({ scrollToSection }, ref) => {

    const appStoreLink = 'https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328';
    const googlePlayLink = 'https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328';


    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative">
                <div className="w-auto h-screen">
                    <img src={bgImage} className="w-full h-full object-cover" />
                </div>
                <BgGradient />
                <DownLink className="absolute">
                    <div className="mt-24 justify-start items-center">
                        <h1 className="text-33 font-bold mb-5">
                            금융의 모든 것<br/>
                            토스에서<br/>
                            쉽고 간편하게
                        </h1>
                        <div className="flex flex-row justify-center items-start gap-x-1">
                            <A href={appStoreLink} target="_blank">
                                <img className="inline-block w-24 h-24 mr-1.5" src={apple}/>
                                App Store
                            </A>
                            <A href={googlePlayLink} target="_blank">
                                <img className="inline-block w-24 h-24 mr-1.5" src={googlePlay}/>
                                Google Play
                            </A>
                        </div>
                    </div>
                    <div className="w-50 h-50 mb-7">
                        <ChevronButton onClick={scrollToSection}>
                            <img className="w-44 h-70" src={chevronDown} />
                        </ChevronButton>
                    </div>
                </DownLink>
            </div>

            <div className="py-24 text-22 font-semibold bg-gray1" ref={ref}>
                <p className="mb-7">
                    내 모든 금융 내역을 한눈에<br/>
                    조회하고 한 곳에서 관리하세요.<br/>
                    이제껏 경험 못 했던<br/>
                    쉽고 편리한 금융 서비스,<br/>
                    토스와 함께라면<br/>
                    당신의 일상이 새로워질 거예요.
                </p>
            </div>
        </section>
    );
});

export default FirstSection;


const appearance =  keyframes`
    0% { opacity: 0; }
    100% { opacity: 1;}
`;

const bounce = keyframes`
    0% {
        transform: translateY(-25px);
        opacity: 1;
    }
    25%{
        transform: translateY(0px);
        opacity: 1;
    }
    40% {
        transform: translateY(-15px);
        opacity: 1;
    }
    60% {
        transform: translateY(0px);
        opacity: 1;
    }
    90%, 100% {
        transform: translateY(-25px);
        opacity: 0;
    }
`;

const BgGradient = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 270px;
    background: linear-gradient(180deg, white 0%, white 59px, rgba(255, 255, 255, 0) 100%);
`;

const DownLink = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    animation: 1s ease-in-out 0s 1 normal forwards running ${appearance};
`;

const A = styled.a`
    background-color: rgba(0, 12, 30, 0.8);
    padding: 11px 16px 11px 14px;

    font-size: 17px;
    color: #FFFFFF;

    border-radius: 7px;
`;

const ChevronButton = styled.button`
    animation: ${bounce} 4s infinite;
`;