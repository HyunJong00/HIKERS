import React from 'react';
import '../../styles.css';

const hashtags = [
    { text: '#꽃놀이', imageUrl: 'https://via.placeholder.com/50x28' },
    { text: '#방문객_많음', imageUrl: 'https://via.placeholder.com/74x28' },
    { text: '#인기구조물', imageUrl: 'https://via.placeholder.com/68x28' },
    { text: '#주변맛집', imageUrl: 'https://via.placeholder.com/59x28' },
];

const Hashtag_2 = () => {
    return (
        <div style={{ width: 360, padding: '0 40px', position: 'absolute', top: 587, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

export default Hashtag_2;
