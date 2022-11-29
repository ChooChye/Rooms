import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function Rental({ rent }) {
    return (
        <>
            <div className="panel">
                <div id="rental"></div>
                <h4>
                    <FontAwesomeIcon icon={faDollarSign} />
                    Rental
                </h4>
                <table className="table table-auto w-full rental">
                    <tbody>
                        <tr>
                            <th className="text-start">Monthly Rental</th>
                            <td>:</td>
                            <td>RM {rent.price}</td>
                        </tr>
                        <tr>
                            <th className="text-start">Deposit</th>
                            <td>:</td>
                            <td>{rent.deposit} Months</td>
                        </tr>
                        <tr>
                            <th className="text-start">Utility Desposit</th>
                            <td>:</td>
                            <td>
                                {rent.utility_deposit == 0.5
                                    ? 'Half'
                                    : rent.utility_deposit}{' '}
                                Month
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>
                                <hr className="border-t-2 mb-4" />
                            </th>
                        </tr>
                        <tr>
                            <th className="text-start" colSpan={3}>
                                Total :
                            </th>
                        </tr>
                        <tr>
                            <td className="text-start">
                                {rent.price} + ({rent.price} * {rent.deposit}) +
                                (400 * {rent.utility_deposit})
                            </td>
                            <td>=</td>
                            <td className="text-start" colSpan={3}>
                                <span className="text-teal-500 font-black text-lg">
                                    RM
                                    {rent.price +
                                        rent.price * 2 +
                                        rent.price * 0.5}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
