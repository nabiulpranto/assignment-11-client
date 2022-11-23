import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-server-lovat.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.error(err))
    },);
    console.log(review);


    return (
        <div>
            <h2>Your Total Review is: {review.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(rev => <tr><td>{rev.name}</td> <td>{rev.message}</td></tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllReview;