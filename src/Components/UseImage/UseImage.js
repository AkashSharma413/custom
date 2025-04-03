import React from "react";

const UseImage = ({ src, alt, width, height, className }) => {
    const baseName = src.replace(/\.(jpg|jpeg|png)$/, ""); 

    return (
        <picture>
            <source srcSet={`${baseName}.avif`} type="image/avif" />
            <source srcSet={`${baseName}.webp`} type="image/webp" />
            <img src={src} alt={alt} width={width} height={height} loading="lazy" className={className} />
        </picture>
    );
};

export default UseImage;
