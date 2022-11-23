import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddReview = () => {
    useTitle('My Review');
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-server-lovat.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.error(err))
    }, [user?.email]);
    console.log(review);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://assignment-11-server-lovat.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    const handleUpdate = (id) => {
        fetch(`https://assignment-11-server-lovat.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(rev => rev._id !== id);
                    const approving = review.find(rev => rev._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setReview(newOrders);
                }
            })
    }





    return (
        <div>
            <h2>Your Total Review is: {review.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                            <th>For Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(rev => <tr><td>{rev.name}</td> <td>{rev.message}</td> <td><button onClick={() => handleDelete(rev._id)} className='btn btn-ghost'>Delete</button></td> <td><button className='btn btn-ghost'><Link to={`/myreview/${rev._id}`}>Update</Link></button></td></tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AddReview;

