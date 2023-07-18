import UserComp from "./UserComp";

const About = ()=> {
    return (
        <>
            <div className="about-main">
                <h1>About</h1>
                <h2>Welcome to Namaste React</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam, quidem quod facere architecto iste cum? Debitis velit a consequuntur officia. Dignissimos illum pariatur voluptatem? Consequuntur.</p>
            </div>
            <div className="about-users">
                <UserComp/>
            </div>
        </>
    );
}

export default About;