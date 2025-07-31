import React from 'react'

function Button({
    title,
    id,
    rightIcon,
    leftIcon,
    containerClassName = 'bg-blue-100',


}) {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClassName}`}


        >
            {leftIcon}
            <span className='relative inline-lex overflow-hidden font-general text-xs uppercase'
            >
                <div>{title}</div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button