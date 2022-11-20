import React from 'react'
import { motion } from 'framer-motion'

export default function Search() {
    return (
        <>
            <motion.div
                initial={{ x: -250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-white rounded-lg p-4 w-full 
            sm:w-[32rem]
            lg:w-[42rem]
            xl:w-[48rem]">
                <h2 className="text-torquise-500 font-bold text-2xl mb-4">
                    Find a place you have in mind
                </h2>
                <div>
                    <form className="flex gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                name="kword"
                                placeholder="e.g. Kuala Lumpur"
                                className="form-control"
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn-primary">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </>
    )
}
