import { useState } from "react";

interface SafeImageProps {
    src?: string | null,
    alt: string,
    className?: string,
    fallbackSrc?: string
}

const DEFAULT_PLACEHOLDER = ' https://placehold.in/600x800@2x.png'

export const SafeImage = ({src, alt, className="", fallbackSrc = DEFAULT_PLACEHOLDER}: SafeImageProps) => {
    const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);

    const handleError = () => {
        if(imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
    }

    return(
        <img 
        src={imgSrc}
        alt={alt}
        onError={(handleError)}
        className={`object-cover ${className}`}
        loading='lazy'
        />
    )
}