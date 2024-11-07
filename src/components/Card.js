// src/components/Card.js
import React, { useState } from 'react';
import axiosInstance from '../axios/AxiosInstance';
import '../styles/card.css'; // Import the CSS file

const Card = ({ data }) => {
    const { _id, category, title, message, tags, upvotes, downvotes } = data;

    // Initialize the votes state with the net votes
    const [votes, setVotes] = useState(upvotes - downvotes);

    const handleDownVote = async () => {
        try {
            await axiosInstance.post(`/posts/${_id}/downvote`); // Adjust the endpoint as needed
            setVotes(prevVotes => prevVotes - 1);
        } catch (err) {
            console.error('Error downvoting:', err);
            // Optionally, display an error message to the user
        }
    };

    const handleUpVote = async () => {
        try {
            await axiosInstance.post(`/posts/${_id}/upvote`); // Adjust the endpoint as needed
            setVotes(prevVotes => prevVotes + 1);
        } catch (err) {
            console.error('Error upvoting:', err);
            // Optionally, display an error message to the user
        }
    };

    return (
        <div className="card">
            <p className="category">{category}</p>
            <h4 className="title">{title}</h4>
            <p className="message">{message}</p>
            <div className="tags">
                {tags && tags.length > 0 ? (
                    tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))
                ) : (
                    <p>No tags available</p>
                )}
            </div>
            <div className="vote-container">
                <img
                    src="/images/upvote.png"
                    alt="Upvote"
                    className="vote-icon"
                    onClick={handleUpVote}
                />
                <p className="vote-count">{votes}</p>
                <img
                    src="/images/downvote.png"
                    alt="Downvote"
                    className="vote-icon"
                    onClick={handleDownVote}
                />
            </div>
            <div className="comment-section">
                <img src="/images/comment.png" alt="Comment" className="comment-icon" />
            </div>
        </div>
    );
};

export default Card;
