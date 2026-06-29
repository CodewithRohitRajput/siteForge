import mongoose from 'mongoose'

const siteSchema = new mongoose.Schema({
    username: String,
    name: String,
    bio: String,
    profilePicture: {
        type: String,
        default : ""
    },
    theme: {
        type: String,
        default: "light"
    },
    socials:{
        github: String,
        linkedIn: String,
        twitter: String,
        website: String
    },
    projects: [
        {
            title : String,
            description: String,
            link: String
        }
    ]
},{
    timestamps: true
})

export default mongoose.model("Site", siteSchema)