import React from "react"
import { FaAngleUp } from "react-icons/fa"

import { IPageUpButtonProps } from "@/types/layoutsComponents"
import './PageUpButton.scss'

export const PageUpButton:React.FC<IPageUpButtonProps> = ({isVisible, handleClick }) => {
    return (
        <button className="pageUpButton"
            style={{
                right: isVisible?"15px":"-150px",
            }}
            onClick={handleClick}
        >
            <FaAngleUp/>
        </button>
    )
}