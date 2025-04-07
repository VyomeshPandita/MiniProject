import "../css/About.css"

function About() {
    return (
        <div className="about-page">
            <div className="about-content">
                <h1>About Rotten Potatoes</h1>
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>Rotten Potatoes is your ultimate destination for discovering, tracking, and rating movies. We believe in making movie discovery simple and enjoyable.</p>
                </div>
                
                <div className="about-section">
                    <h2>Features</h2>
                    <ul>
                        <li>Browse through a vast collection of movies</li>
                        <li>Create your personal watchlist</li>
                        <li>Rate and review movies</li>
                        <li>Save your favorite movies</li>
                        <li>Search for any movie you want to watch</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>About the Developer</h2>
                    <p>Rotten Potatoes was created by Vyomesh Pandita, a passionate developer who loves both movies and coding. This project was built using React and modern web technologies to provide a seamless movie browsing experience.</p>
                </div>
            </div>
        </div>
    )
}

export default About 