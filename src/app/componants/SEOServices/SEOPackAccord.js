'use client';
import React, { useState } from "react";

const SEOPackAccord = ({ faqs = [] }) => {
    const [faqActive, setFaqsActive] = useState(1);

    return (
        <>
            <div className="accrodion-grp faq-one-accrodion">
                {faqs.map(({ id, title, text, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10,
                    text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, text21, text22, text23, text24, text25,

                    icon, icon1, icon2, icon3,
                    icon11, icon12, icon13, icon14,
                    icon21, icon22, icon23, icon24,
                    icon31, icon32, icon33, icon34,
                    icon41, icon42, icon43, icon44,
                    icon51, icon52, icon53, icon54,
                    icon61, icon62, icon63, icon64,
                    icon71, icon72, icon73, icon74,
                    icon81, icon82, icon83, icon84,
                    icon91, icon92, icon93, icon94,
                    icon101, icon102, icon103, icon104,
                    icon111, icon112, icon113, icon114,
                    icon121, icon122, icon123, icon124,
                    icon131, icon132, icon133, icon134,
                    icon141, icon142, icon143, icon144,
                    icon151, icon152, icon153, icon154,
                    icon161, icon162, icon163, icon164,
                    icon171, icon172, icon173, icon174,
                    icon181, icon182, icon183, icon184,
                    icon191, icon192, icon193, icon194,
                    icon201, icon202, icon203, icon204,
                    icon211, icon212, icon213, icon214,
                    icon221, icon222, icon223, icon224,
                    icon231, icon232, icon233, icon234,
                    icon241, icon242, icon243, icon244,
                    icon251, icon252, icon253, icon254,

                }) => (
                    <div
                        key={id}
                        className={`accrodion ${faqActive === id ? " active" : ""
                            }`}
                    >
                        <div onClick={() => setFaqsActive(id)} className="accrodion-title-seo">
                            <h4>{title}</h4>
                        </div>
                        <div
                            className={` ${faqActive === id ? "slideInUp d-block" : "slideInDown d-none"
                                }`}
                        >
                            <div className="inner">
                                <table id="seo-packages">
                                    <tbody>
                                        <tr>
                                            <td>{text}</td>
                                            <td>{icon}</td>
                                            <td>{icon1}</td>
                                            <td>{icon2}</td>
                                            <td>{icon3}</td>
                                        </tr>
                                        <tr>
                                            <td>{text1}</td>
                                            <td>{icon11}</td>
                                            <td>{icon12}</td>
                                            <td>{icon13}</td>
                                            <td>{icon14}</td>
                                        </tr>
                                        <tr>
                                            <td>{text2}</td>
                                            <td>{icon21}</td>
                                            <td>{icon22}</td>
                                            <td>{icon23}</td>
                                            <td>{icon24}</td>
                                        </tr>
                                        <tr>
                                            <td>{text3}</td>
                                            <td>{icon31}</td>
                                            <td>{icon32}</td>
                                            <td>{icon33}</td>
                                            <td>{icon34}</td>
                                        </tr>
                                        <tr>
                                            <td>{text4}</td>
                                            <td>{icon41}</td>
                                            <td>{icon42}</td>
                                            <td>{icon43}</td>
                                            <td>{icon44}</td>
                                        </tr>
                                        <tr>
                                            <td>{text5}</td>
                                            <td>{icon51}</td>
                                            <td>{icon52}</td>
                                            <td>{icon53}</td>
                                            <td>{icon54}</td>
                                        </tr>
                                        <tr>
                                            <td>{text6}</td>
                                            <td>{icon61}</td>
                                            <td>{icon62}</td>
                                            <td>{icon63}</td>
                                            <td>{icon64}</td>
                                        </tr>
                                        <tr>
                                            <td>{text7}</td>
                                            <td>{icon71}</td>
                                            <td>{icon72}</td>
                                            <td>{icon73}</td>
                                            <td>{icon74}</td>
                                        </tr>
                                        <tr>
                                            <td>{text8}</td>
                                            <td>{icon81}</td>
                                            <td>{icon82}</td>
                                            <td>{icon83}</td>
                                            <td>{icon84}</td>
                                        </tr>
                                        <tr>
                                            <td>{text9}</td>
                                            <td>{icon91}</td>
                                            <td>{icon92}</td>
                                            <td>{icon93}</td>
                                            <td>{icon94}</td>
                                        </tr>
                                        <tr>
                                            <td>{text10}</td>
                                            <td>{icon101}</td>
                                            <td>{icon102}</td>
                                            <td>{icon103}</td>
                                            <td>{icon104}</td>
                                        </tr>

                                        <tr>
                                            <td>{text11}</td>
                                            <td>{icon111}</td>
                                            <td>{icon112}</td>
                                            <td>{icon113}</td>
                                            <td>{icon114}</td>
                                        </tr>
                                        <tr>
                                            <td>{text12}</td>
                                            <td>{icon121}</td>
                                            <td>{icon122}</td>
                                            <td>{icon123}</td>
                                            <td>{icon124}</td>
                                        </tr>
                                        <tr>
                                            <td>{text13}</td>
                                            <td>{icon131}</td>
                                            <td>{icon132}</td>
                                            <td>{icon133}</td>
                                            <td>{icon134}</td>
                                        </tr>
                                        <tr>
                                            <td>{text14}</td>
                                            <td>{icon141}</td>
                                            <td>{icon142}</td>
                                            <td>{icon143}</td>
                                            <td>{icon144}</td>
                                        </tr>
                                        <tr>
                                            <td>{text15}</td>
                                            <td>{icon151}</td>
                                            <td>{icon152}</td>
                                            <td>{icon153}</td>
                                            <td>{icon154}</td>
                                        </tr>
                                        <tr>
                                            <td>{text16}</td>
                                            <td>{icon161}</td>
                                            <td>{icon162}</td>
                                            <td>{icon163}</td>
                                            <td>{icon164}</td>
                                        </tr>
                                        <tr>
                                            <td>{text17}</td>
                                            <td>{icon171}</td>
                                            <td>{icon172}</td>
                                            <td>{icon173}</td>
                                            <td>{icon174}</td>
                                        </tr>
                                        <tr>
                                            <td>{text18}</td>
                                            <td>{icon181}</td>
                                            <td>{icon182}</td>
                                            <td>{icon183}</td>
                                            <td>{icon184}</td>
                                        </tr>
                                        <tr>
                                            <td>{text19}</td>
                                            <td>{icon191}</td>
                                            <td>{icon192}</td>
                                            <td>{icon193}</td>
                                            <td>{icon194}</td>
                                        </tr>
                                        <tr>
                                            <td>{text20}</td>
                                            <td>{icon201}</td>
                                            <td>{icon202}</td>
                                            <td>{icon203}</td>
                                            <td>{icon204}</td>
                                        </tr>
                                        <tr>
                                            <td>{text21}</td>
                                            <td>{icon211}</td>
                                            <td>{icon212}</td>
                                            <td>{icon213}</td>
                                            <td>{icon214}</td>
                                        </tr>
                                        <tr>
                                            <td>{text22}</td>
                                            <td>{icon221}</td>
                                            <td>{icon222}</td>
                                            <td>{icon223}</td>
                                            <td>{icon224}</td>
                                        </tr>
                                        <tr>
                                            <td>{text23}</td>
                                            <td>{icon231}</td>
                                            <td>{icon232}</td>
                                            <td>{icon233}</td>
                                            <td>{icon234}</td>
                                        </tr>
                                        <tr>
                                            <td>{text24}</td>
                                            <td>{icon241}</td>
                                            <td>{icon242}</td>
                                            <td>{icon243}</td>
                                            <td>{icon244}</td>
                                        </tr>

                                        <tr>
                                            <td>{text25}</td>
                                            <td>{icon251}</td>
                                            <td>{icon252}</td>
                                            <td>{icon253}</td>
                                            <td>{icon254}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SEOPackAccord;
