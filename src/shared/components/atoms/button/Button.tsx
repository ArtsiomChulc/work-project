import {ReactNode} from "react";
import s from './Button.module.css';

type ButtonProps = {
    type: "button" | "link";
    color?: 'primary' | 'secondary';
    text?: string;
    onClick?: () => void;
    size?: "small" | "medium" | "large";
    href?: string;
    className?: string;
    icon?: ReactNode;
}

export const Button = ({type, size, onClick, text, color = 'primary', icon, href, className}: ButtonProps) => {
    const sizeBtnClass = size ? s[`btn_${size}`] : '';
    const colorBtnClass = color ? s[`btn_${color}`] : '';

    const sizeLinkClass = size ? s[`link_${size}`] : '';
    const colorLinkClass = color ? s[`link_${color}`] : '';

    const handleLinkWrapperClick = () => {
        if (href) {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };

    if (type === "button") {
        return (
            <button onClick={onClick} className={`${className} ${s.btn} ${sizeBtnClass} ${colorBtnClass}`}>
                {text}
                {icon && <span>{icon}</span>}
            </button>
        );
    }

    if (type === "link") {
        if (icon) {
            return (
                <div className={s.link_wrapper} onClick={handleLinkWrapperClick}>
                    <a href={href} className={`${className} ${s.link} ${sizeLinkClass} ${colorLinkClass}`} target="_blank">
                        {text}
                    </a>
                    <span>{icon}</span>
                </div>
            )
        }
        return (
            <a href={href} className={`${className} ${s.link} ${sizeLinkClass} ${colorLinkClass}`} target="_blank">
                {text}
            </a>
        );
    }

    return null;
};