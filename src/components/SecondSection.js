import styled, { keyframes } from "styled-components";
import homeScreenOne from '../img/home_screen_1.png';
import homeScreenTwo from '../img/home_screen_2.png';
import iPhoneClayShadow from '../img/iPhone15_Clay_Shadow_03.png';
import { useEffect, useRef, useState } from "react";

export default function SecondSection() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxTranslateX, setMaxTranslateX] = useState(0);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isFirstImageVisible, setIsFirstImageVisible] = useState(false);
    const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const imageSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            setScrollPosition(currentScrollPosition);

            if (currentScrollPosition > 640) {
                setIsContentVisible(true);
            }
        };

        if (imageSectionRef.current) {
            const imageSectionWidth = imageSectionRef.current.offsetWidth;
            setMaxTranslateX(imageSectionWidth);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isContentVisible) {
            const firstImageTimer = setTimeout(() => {
                setIsFirstImageVisible(true);
            }, 500); // Content가 보인 후 500ms 후에 첫 번째 ImageBox가 나타납니다.

            const secondImageTimer = setTimeout(() => {
                setIsSecondImageVisible(true);
            }, 1000); // 첫 번째 ImageBox가 보인 후 500ms 후에 두 번째 ImageBox가 나타납니다.

            const textTimer = setTimeout(() => {
                setIsTextVisible(true);
            }, 1500); // 두 번째 ImageBox가 보인 후 500ms 후에 텍스트가 나타납니다.

            return () => {
                clearTimeout(firstImageTimer);
                clearTimeout(secondImageTimer);
                clearTimeout(textTimer);
            };
        }
    }, [isContentVisible]);

    const startScroll = 1240;
    const endScroll = 1430;

    const scrollProgress = Math.min(Math.max((scrollPosition - startScroll) / (endScroll - startScroll), 0), 1);
    const pxTranslate = scrollProgress * -maxTranslateX;
    const vwTranslate = scrollProgress * 100;

    const transformValue = `translate3d(calc(${pxTranslate}px + ${vwTranslate}vw), 0px, 0px)`;

    return (
        <section className="relative w-full overflow-hidden">
            <div className="w-full h-full py-24">
                <div className="w-11/12 h-full mx-auto text-left" style={{ maxWidth: 'calc(100% - 48px)' }}>
                    <div className="relative h-full">
                        <Content isVisible={isContentVisible}>
                            <Category>홈 · 소비</Category>
                            <Title>
                                내 돈 관리,<br />
                                지출부터 일정까지<br />
                                똑똑하게
                            </Title>
                        </Content>
                        <ImageSection style={{ transform: transformValue }} ref={imageSectionRef}>
                            <ImageBox isVisible={isFirstImageVisible}>
                                <ContentImage src={homeScreenOne} />
                                <FrameImage src={iPhoneClayShadow} />
                            </ImageBox>
                            <ImageBox isVisible={isSecondImageVisible} style={{ marginLeft: '-100px' }}>
                                <ContentImage src={homeScreenTwo} />
                                <FrameImage src={iPhoneClayShadow} />
                            </ImageBox>
                        </ImageSection>
                        <TextSection isVisible={isTextVisible}>
                            토스에 계좌와 카드를 연결해 보세요.<br />
                            계좌 잔액, 대출·투자 내역은 기본,<br />
                            일자별 소비와 수입까지 한 번에 볼 수 있어요.
                        </TextSection>
                    </div>
                </div>
            </div>
        </section>
    );
}

const refloat = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0px, 50px, 0px);
    }
    100% {
        opacity: 1;
        transform: translate3d(0px, 0px, 0px);
    }
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transform: translate3d(0px, 50px, 0px);
    animation: ${({ isVisible }) => (isVisible ? refloat : 'none')} 0.5s ease-in-out forwards;
`;

const Category = styled.h1`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    color: #3182F6;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.4;
    color: #191F28;
`;

const ImageSection = styled.div`
    width: max-content;
    height: 587px;
    margin-left: -24px;
    overflow-x: visible;
    overflow-y: hidden;
    scrollbar-width: none;

    display: flex;

    position: relative;
    transition: transform 0.3s ease-out;
`;

const ImageBox = styled.div`
    position: static;
    flex-shrink: 0;
    width: 100%;
    max-width: 375px;
    height: auto;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transform: translate3d(0px, 50px, 0px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    animation: ${({ isVisible }) => (isVisible ? refloat : 'none')} 0.5s ease-in-out forwards;
`;

const ContentImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 57%;
    height: auto;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 22px;
`;

const FrameImage = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
`;

const TextSection = styled.p`
    font-size: 17px;
    font-weight: 600;

    position: relative;
    z-index: 1;

    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transform: translate3d(0px, 50px, 0px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    animation: ${({ isVisible }) => (isVisible ? refloat : 'none')} 0.5s ease-in-out forwards;
`;
