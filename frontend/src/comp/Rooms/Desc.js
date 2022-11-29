import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function Desc({ desc }) {
    return (
        <>
            <div className="panel">
                <div className="anchor" id="desc"></div>
                <h4>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Description
                </h4>
                <div className="text-justify break-words">
                    {desc}
                </div>
            </div>
        </>
    )
}
