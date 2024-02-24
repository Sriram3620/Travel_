export default function AboutProfile(props)
{
    return(
        <div className="about-profile-con">
            <img className="about-profile-img" src={props.profile}/>
            <div className="about-profile-founders">
                <h1 className="about-profile-name">{props.Name}</h1>
                <p className="about-founder">{props.Position}</p>
                <div>
                <a href={props.Link}><i class="fab fa-linkedin linkedIn-icon"></i></a>
               <a href={props.insta}><i class="fab fa-instagram insta-icon"></i></a>
                <a href={props.tweet}><i class="fab fa-twitter twitter-icon"></i></a>
                </div>
            </div>
           </div>
    )
}