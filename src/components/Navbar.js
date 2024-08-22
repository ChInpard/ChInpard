import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/Toss_Logo_Primary.png";
import menu from "../img/icon/menu.svg";
import x from "../img/icon/x.svg"
import { Button } from "../styled/common.js";


const Navbar = React.forwardRef((props, ref) => {
    const [isNavOpen, setIsNavOpent] = useState(false);
    const [navHeight, setNavHeight] = useState('60px');
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleButton = () => {
        setIsNavOpent(!isNavOpen);
    };

    useEffect(() => {
        if (isNavOpen) {
            setNavHeight('453px');
        } else {
            setNavHeight('60px');
        }
    }, [isNavOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <Nav ref={ref} height={navHeight} isNavOpen={isNavOpen} isScrolled={isScrolled}>
            <InnerContainer>
                <div className="w-76 h-20">
                    <img src={logo} />
                </div>
                <div className="flex justify-center items-center gap-6">
                    <Button className="w-76 h-30 text-xs font-semibold text-gray1 bg-primary rounded-2xl">
                        앱 다운로드
                    </Button>
                    <Button 
                        onClick={toggleButton}
                        className="w-20 h-20">
                        {<img src={`${isNavOpen ? x : menu}`} />}
                    </Button>
                </div>
            </InnerContainer>
            <MenuList isNavOpen={isNavOpen}>
                <Li>
                    <A href="https://toss.im/team">회사 소개</A>
                </Li>
                <Li>
                    <A href="https://toss.im/notice">공지사항</A>
                </Li>
                <Li>
                    <A href="https://support.toss.im/">고객센터</A>
                </Li>
                <Li>
                    <A href="https://support.toss.im/faq">자주 묻는 질문</A>
                </Li>
                <Li>
                    <A href="https://toss.im/tosscert">토스인증서</A>
                </Li>
                <Li>
                    <A href="https://toss.im/career">채용</A>
                </Li>
                <Li>
                    <A href="/" style={{color : '#333D4B', width : 'auto'}}>KOR</A>
                    <span className="text-gray3 py-4" >|</span>
                    <A href="/en" style={{color : '#B0B8C1',  width : 'auto'}}>ENG</A>
                </Li>
            </MenuList>
        </Nav>
    );
});

export default Navbar;


const Nav = styled.nav`
    width: 100%;
    height: ${ ({height}) => height };
    background-color: #FFFFFF;
    border-bottom: 1px solid transparent;
    border-bottom-color: ${({ isNavOpen, isScrolled }) => isNavOpen ? 'transparent' : (isScrolled ? 'rgba(0, 27, 55, 0.1)' : 'transparent')};
    
    position: fixed;
    left: 0;
    z-index: 50;
    overflow: hidden;
    
    transition: all 0.3s ease;
`;

const InnerContainer = styled.div`
    width: 92%;
    max-width: calc(100% - 48px);
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MenuList = styled.ul`
    flex-direction: column;
    align-items: center;
    display: ${({ isNavOpen }) => (isNavOpen ? 'flex' : setTimeout(()=>{'none'},50))};
`;

const Li = styled.li`
    width: 100%;
    height: 100%;
    padding: 0;
    color: #425968;
    white-space: nowrap;
    display: flex;
`;

const A = styled.a`
    width: 100%;
    background-color: transparent;
    padding: 18px 20px;
    font-size: 15px;
    Line-height: 20px;
    color: #4E5968;
    text-align: left;
    border-radius: 0px;
    border: 0;
    cursor: pointer;
`;
