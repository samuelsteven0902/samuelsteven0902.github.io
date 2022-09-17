import { IonIcon } from '@ionic/react';
import { checkmarkCircleSharp } from 'ionicons/icons';
import dp from '../asset/dp.jpeg'

const profile = {
    fullname: 'Samuel Steven Prisma Hasiyono',
    bio: 'Hey! I\'m Samuel, I like to code. 👋',
  
    socialMedia: [
        // { name: 'Buy me a coffee ☕️', url: 'https://www.buymeacoffee.com/marwanzaky' },
        { name: 'Visit my portfolio 📝', url: 'https://samuelsteven0902.github.io/portofolio/' },
        { name: 'my Linkin 🔗', url: 'https://www.linkedin.com/in/samuelsph/' },
        { name: 'Visit my github 😺', url: 'https://github.com/samuelsteven0902' },
        { name: 'Follow my Social Media 💬', url: 'https://www.instagram.com/samuelsteven_ph/' }
    ]
}

const colors = [
    // "#F4F1DE",
    "#E07A5F",
    "#3D405B",
    "#81B29A",
    "#F2CC8F"
];

function Button(props) {
    const style = {
        backgroundColor: colors[props.index]
    }

    return (
        <a href={props.url} target='_blank' className="button" style={style}>
            {props.name}
        </a>
    )
}

function Profile() {
    return (
        <section className="profile">
            <div className='m-auto w-full sm:w-[300px]'>
                <div className="mb-5">
                    <div className="profile-picture"><img src={dp} alt={profile.name}></img></div>
                    <h1 className="profile-fullname">
                        {profile.fullname}
                        {/* <IonIcon className='profile-fullname-check_mark' src={checkmarkCircleSharp} /> */}
                    </h1>
                </div>

                <h1 className="profile-about">About</h1>
                <div className="profile-bio">{profile.bio}</div>

                <div className="social_media flex flex-col">
                    {profile.socialMedia.map((el, i) => <Button name={el.name} url={el.url} index={i} />)}
                </div>
            </div>
        </section>
    );
}

export default Profile;
