import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function FilterBox() {
    return (
        <>
            <div className="shadow-lg border-2 p-4 ">
                <h4 className="mb-4">Filter Results</h4>
                <div>
                    <form className="form flex gap-2">
                        <input type="text" className="form-control" placeholder='e.g. Ampang'/>
                        <button className="btn-primary border-none">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
