import React from 'react'
import { Link } from 'react-router-dom'
import View from "../../components/View"

const HomeViewContainer = () => {
return (
    <View title="Welcome to Delivery Manager">
    <div className="flex  justify-center h-screen">
        <div className="flex-1">
        <section className="flex items-center justify-center">
            <Link to="/add">
            <section className="rounded-lg bg-gray-50 border p-16 hover:bg-gray-100">
                <h3 className="text-2xl sm:text-4xl font-semibold text-center">
                Add Deliveries
                </h3>
            </section>
            </Link>
        </section>
        </div>
    </div>
    </View>
)
}

export default HomeViewContainer