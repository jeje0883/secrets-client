import '../styles/submit.css'

export default function Submit() {
    return (
        <>
            <h4 className="create-post-header">Create Post</h4>
            <form className="create-post-form">
                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category">
                        <option value="tech">Tech</option>
                        <option value="politics">Politics</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" placeholder="Title" name="title" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" placeholder="Message" name="message" required />
                </div>
                <div>
                    <label htmlFor="tag">Tags:</label>
                    <input id="tag" type="text" placeholder="Add at least 1 tag" name="tag" required />
                </div>
                <div>
                    <button type="submit">Post</button>
                </div>
            </form>
        </>
    );
    
    
}