import { GoRepo } from 'react-icons/go';
import { MdInfo } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { BsSpotify } from 'react-icons/bs';
import { AiFillInstagram,AiFillGithub,AiFillYoutube,AiFillFolderOpen } from 'react-icons/ai';

import React, { useEffect, useState } from 'react'
export default function Home() {
    const [User, setData] = useState();
    const [State, setBoolen] = useState(true)
    const [title, setTitle] = useState();
    const refim = React.createRef()
    useEffect(() => {
        fetch(`https://api.lanyard.rest/v1/users/1000776223795970108`)
            .then(response => response.json()
            )
            .then(data => {
                setData(data.data);
                setTitle("Look Presence 🔎")
            });
    }, []);
    function ChangeText() {
        if (User) {
            if (User.spotify) {
                setTitle(`${User?.spotify.song} - ${User?.spotify.artist}`)
            } else {
                setTitle(`${User?.activities.filter(t => t.name != "Spotify")[0]?.name}`)
            }
        } else {
            setTitle(`offline 🔴`)
        }
    }
    function ClickEvent() {
        State ? setBoolen(false) : setBoolen(true)
        if (State) {
            refim.current.style.backgroundImage = `url(${User.spotify ? User.spotify.album_art_url : `https://cdn.discordapp.com/app-assets/${User.activities[0].application_id}/${User.activities[0].assets.large_image}.png?size=2048`})`
            setTitle(" ")
        } else {
            refim.current.style.backgroundImage = `linear-gradient(to right, #576076, #455a7d)`
            ChangeText()
        }
    }

    let array = [
        {
            url: "/repo",
            icon: <GoRepo fontSize={24} />
        },
        {
            url: "/about",
            icon: <MdInfo fontSize={24} />
        },
        {
            url: "https://www.instagram.com/thealoq/",
            icon: <AiFillInstagram fontSize={24} />
        },
        {
            url: "https://github.com/thealoq",
            icon: <AiFillGithub fontSize={24} />
        },
        {
            url: "https://www.youtube.com/channel/UCdRdD1r4IB0xI9PcFoTkLBg",
            icon: <AiFillYoutube fontSize={24} />
        },
        {
            url: "https://github.com/thealoq",
            icon: <AiFillGithub fontSize={24} />
        },
        {
            url: "https://github.com/Thealoq/NewReactPortfolio",
            icon: <AiFillFolderOpen fontSize={24} />
        },
        {
            url: "https://discord.gg/QMZTub8P",
            icon: <FaDiscord fontSize={24} />
        },
    
    ]
    const av = `https://cdn.discordapp.com/avatars/${User?.discord_user.id}/${User?.discord_user.avatar}.${User?.discord_user.avatar.startsWith("a_") ? "gif" : "png"}?size=2048`
    return (
        <div className="flex justify-center items-center flex-col">
            <div ref={refim} onClick={t => ClickEvent()} className="cursor-pointer hover:opacity-75  bg-center bg-cover bg-repeat flex justify-center items-center mt-8 w-[230px] rounded-lg h-20 bg-gradient-to-r from-[#576076] to-[#455a7d]  ">
                <div className='flex justify-center items-center'>
                    <div className='w-full p-5'>
                        <span className='break-all  select-none'>{title ?  title : ChangeText()}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-2 w-[240px] ">
                {
                    array.map((x, i) => {
                        if(i == 3) {
                            return(
                                <div key={i} style={{  
                                    backgroundImage: "url(" + av + ")",
                                  }} className="flex justify-center items-center w-[144px] hover:opacity-75  rounded-lg h-[144px] m-2 bg-[#455a7d]  bg-center bg-cover bg-repeat" ></div>
                            )
                        }
                        if(i == 4) {
                            return(
                                <div key={i} className="w-[64px] h-[144px] bg-[#455a7d] hover:opacity-75 flex justify-center items-center rounded-lg m-2">
                                <a href={x.url}>{x.icon}</a>
                                </div>
                            )
                        }
                        return (
                            <div key={i} className="w-[64px] h-[64px] bg-[#455a7d] hover:opacity-75 flex justify-center items-center rounded-lg m-2">
                                <a href={x.url}>{x.icon}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}