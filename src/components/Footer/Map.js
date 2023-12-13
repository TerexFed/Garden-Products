import React from 'react';

export default function Map() {
    return (
        <div style={{ maxWidth: '100%', margin: '10px' }}>
            <iframe
                width='100%'
                height="350"
                frameBorder="0"
                title='map'
                src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Ithub%20college,%20%D0%94%D1%83%D0%B1%D0%B8%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.,%2096,%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20115093+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
        </div>
    );
}
