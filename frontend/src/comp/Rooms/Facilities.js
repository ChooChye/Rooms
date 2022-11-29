import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function Facilities() {
    return (
        <>
            <div className="panel">
                <div id="facilities"></div>
                <h4>
                    <FontAwesomeIcon icon={faBriefcase} />
                    Facilities
                </h4>
                <dl className="facilities">
                    {[...Array(5)].map((e, i) => (
                        <dd>Facility {i}</dd>
                    ))}
                </dl>
            </div>
        </>
    )
}
