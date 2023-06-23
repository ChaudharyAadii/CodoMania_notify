import React from 'react';
import git from       '../Images/git.png';
import lkin from     '../Images/likn.png';
import insta from   '../Images/insta.png';
import lctn from '../Images/location.png';
import ttr from       '../Images/ttr.png';
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div class="footer">
                <div id="button"></div>
                <div id="container">
                    <div id="cont">
                        <div class="footer_center">
                            <div class="leftf">
                                <a id="a1" href="https://github.com/ChaudharyAadii/"><img width="35px" src={git} alt="git" /><span class="text">GitHub</span></a>
                                <a id="a2" href="https://www.linkedin.com/in/aditya-chaudhary-73a7b2226"><img width="35px" src={lkin} alt="linkedin" /><span class="text">LinkedIn</span></a>
                                <a id="a3" href="https://www.instagram.com/aadi.chaudhary._/"><img width="35px" src={insta} alt="insta" /><span class="text">Instagram</span></a>
                                <a id="a4" href="https://www.instagram.com/aadi.chaudhary._/"><img width="35px" src={ttr} alt="twitter" /><span class="text">Twitter</span></a>
                            </div>

                            <div className="rightf">
                                {/* <p>chaudharyaditya1232@gmail.com <br /></p> */}
                                {/* <p>7906259764</p> */}
                                <p><img src={lctn} alt="" width="25px" />&nbsp;&nbsp;Bareilly, U.P. <br /></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
