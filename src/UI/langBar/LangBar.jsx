import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import { MdOutlineLanguage } from 'react-icons/md'

import './langBar.css'

function LangBar(props) {

    let lng = props.data

    const { i18n } = useTranslation()

    const [isActive, setActive] = useState(false)

    const handleEnter = () => {
        setActive(true)
    }
    const handleLeve = () => {
        setActive(false)
    }
   

    return (
        <div className="langbar" onMouseEnter={handleEnter} onMouseLeave={handleLeve}>
            <div className="langbar-current">
                <MdOutlineLanguage />
            </div>
            <div className={!isActive ? 'langbar-langs' : 'langbar-langs active'}>
                <ul>
                    {
                        lng.map(function(lng) {
                            return <li onClick={() => i18n.changeLanguage(lng.short)} key={ lng.id }> {lng.short} </li>
                        })
                    }
                </ul>
            </div>


        </div>
    )
}

export default LangBar

