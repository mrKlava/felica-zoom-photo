import React from 'react'
import { useTranslation } from 'react-i18next';

import './langBar.css'

function LangBar(props) {
    const { i18n } = useTranslation();

    return (
        <div className="langbar">
            <ul>
                <li onClick={() => i18n.changeLanguage(props.data.en.short)}> {props.data.en.short}</li>
                <li onClick={() => i18n.changeLanguage(props.data.fr.short)}>{props.data.fr.short}</li>
            </ul>

            

        </div>
    )
}

export default LangBar

