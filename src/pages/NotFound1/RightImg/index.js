import React from "react";

import { getImg } from "../../../utils/Helper";
import styles from './RightImg.module.scss';

export const RightImg = (props) => {
    return (
        <div className={styles.rightimage}>
            <img className="img-responsive" src={getImg('img/1.png')} alt="logo" />
        </div>
    )
}

