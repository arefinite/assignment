import {BrandStyle} from "../assets/styles/BrandStyle.js";

const Header = () => {
    return (
        <BrandStyle>
            <div>
                <h1><span style={{color: 'blueviolet'}}> Blog </span><span style={{color: 'purple'}}>App</span></h1>
            </div>
            <div>
                <img
                    src='https://styles.redditmedia.com/t5_83esbh/styles/profileIcon_ka8miyt6kjpa1.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=7f670afe332a93afb215f2340e0bc5ab86f4ea2b'
                    alt=""/>
            </div>
        </BrandStyle>
    );
};

export default Header;