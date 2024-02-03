import React, { Component } from 'react';
import './index.css';

class CreatePoem extends Component {
    state = {
        title: '',
        author: '',
        body: '',
        isBool: false,
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { title, author, body } = this.state;
        if (!title || !author || !body) {
            this.setState({ isBool: true });
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, author, body }),
            });

            if (!response.ok) {
                throw new Error('Error submitting poem');
            }

            this.setState({ title: '', author: '', body: '', isBool: false });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        const { isBool, title, author, body } = this.state;
        return (
            <div className="poem-container">
                <h1>Show your creativity!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="poem-sub-container">
                        <label htmlFor="title">Title</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Title of the poem"
                            id="title"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Author of the poem"
                            id="author"
                            name="author"
                            value={author}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Poem</label>
                        <br />
                        <textarea
                            placeholder="Write your poem"
                            id="body"
                            name="body"
                            value={body}
                            onChange={this.handleChange}
                            rows="20"
                            cols="50"
                        />
                    </div>
                    {isBool ? <p className="error">Please provide all the details of the poem</p> : <p>Submitted successfully!</p>}
                    <button type="submit" className="button">Submit the poem</button>
                    
                </form>
            </div>
        );
    }
}

export default CreatePoem;
