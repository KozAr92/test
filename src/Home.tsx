import backgroundImage from "/images/profil.jpg"

export const Home = () => {
    return <div className={"background"} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Home page</h1>
    </div>
}