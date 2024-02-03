import {Link} from 'react-router-dom'

import './index.css'

const Home=()=> (
    <div className="home-container">
        <div className="home-sub1-container">
            <h1>Boooks</h1>
            <p>Welcome to Boooks, your ultimate destination for discovering captivating books and sharing your creative poetry with the world. At Boooks, we strive to cultivate a community where book lovers and aspiring poets alike can connect, explore, and express themselves freely.</p> 
        </div>
        
        <div className="home-sub-container">
            <h1>Discover a World of Books</h1>
            <p>Dive into our extensive collection of books spanning various genres, from timeless classics to contemporary bestsellers. Whether you're seeking thrilling mysteries, heartwarming romances, thought-provoking literature, or insightful non-fiction, we have something for every reader's taste. With our curated selection, you'll embark on literary journeys that inspire, entertain, and enrich your imagination.</p>
            <Link className="route-link" to='/books'><p>Click Here</p></Link>
        </div>

        <div className="home-sub-container">
            <h1>Submit Your Own Poems</h1>
            <p>Ready to share your poetic musings with the world? Submit your original poems to BookVerse and let your words resonate with readers across the globe. Whether it's a reflection of personal experiences, observations of the world around you, or a glimpse into the depths of your imagination, your poetry has the power to inspire and move others.</p>
            <Link className="route-link" to='/submit'><p>Click Here</p></Link>
        </div>
        
    </div>
)

export default Home