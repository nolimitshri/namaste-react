import { Component } from "react"
import { GITHUB_USER_API } from "../utils/constants";

class UserComp extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        };
    }

    async componentDidMount(){
        const data = await fetch(GITHUB_USER_API);

        const json = await data.json();

        this.setState({
            userInfo: json
        });

        // console.log(json);
    }

    render(){
        const {name, location, login, avatar_url} = this.state.userInfo;
        return (
                <div className="user-card">
                    <img src={avatar_url} alt="avatar" className="avatar"/>
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Handle: {login}</h4>
                </div>
              )
    }

} 

export default UserComp