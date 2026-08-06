"use client";
import { useState, useEffect }from 'react';


const StickyBar = () => {
    const [visible, setVisible] = useState(true);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible || !isClient) return null;

    return (
        <>
            <div className="stickyBar">

                <div className="tagline">
                    <strong>Attention:</strong> Tzar Digital Marketing Agency does not provide part-time job offers or channel subscription tasks through WhatsApp, Telegram, or any other chat platforms. Please be cautious of fraudulent solicitations.
                </div>
                <a href="/services" className="button-header">
                    Know More
                </a>
                <span className="closeBtn" onClick={handleClose} style={{color: "#003108"}}>
                    &times;
                </span>

            </div>
        </>
    );
};

export default StickyBar;
