import {BannerStyled, BannerContato} from "./BannerStyled";
import React from "react";

interface CardProps {
    children: React.ReactNode
}

const CardComponent = ({ children }: CardProps) => {
    const firstChild = React.Children.toArray(children)[0] as React.ReactElement;

    if (firstChild && firstChild.type === 'h1') {
        return (
            <BannerStyled>
                {children}
            </BannerStyled>
        );
    } else {
        return (
            <BannerContato>
                {children}
            </BannerContato>
        )
    }
}

export default CardComponent;