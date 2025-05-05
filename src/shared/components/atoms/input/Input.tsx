import { ChangeEvent, useState } from 'react';
import s from './Input.module.css';

type InputProps = {
    label?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number' | 'password' | 'email';
};

export const Input = ({ label, value, onChange, type = 'text' }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={s.inputContainer}>
            {label && (
                <label className={`${s.label} ${isFocused || value ? s.filled : ''}`}>
                    {label}
                </label>
            )}
            <input
                className={s.input}
                value={value}
                onChange={onChange}
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
};