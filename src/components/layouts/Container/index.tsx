import React from "react"

import { IContainerProps } from "@/types/layoutsComponents"
import styles from './Container.module.scss'

export const Container:React.FC<IContainerProps> = ({children}) => {
    return(
        <div className={`${styles.container_styles} mt-10`}>
            {children}
        </div>
    )
}