import React from 'react';
import '../../styles.css';

const hashtags = [
    { text: '#연박_탐험', imageUrl: 'https://via.placeholder.com/65x28' },
    { text: '#아름다운_절', imageUrl: 'https://via.placeholder.com/74x24' },
    { text: '#꼭대기엔_평지', imageUrl: 'https://via.placeholder.com/83x28' },
];

const Hashtag_3 = () => {
    return (
        <div style={{ width: 360, padding: '0 40px', position: 'absolute', top: 630, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {hashtags.map((hashtag, index) => (
                <button
                    key={index}
                    style={{ 
                        padding: '7.26px', 
                        borderRadius: '8.06px', 
                        backgroundImage: `url(${hashtag.imageUrl})`, 
                        backgroundSize: 'cover', 
                        border: 'none', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                    }}
                >
                    <span style={{ 
                        textAlign: 'center', 
                        color: '#486166', 
                        fontSize: '9.90px', 
                        fontFamily: 'Amiko', 
                        fontWeight: '700', 
                        wordWrap: 'break-word' 
                    }}>
                        {hashtag.text}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default Hashtag_3;
