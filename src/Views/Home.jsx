import { GoRepo } from 'react-icons/go';
import { MdInfo } from 'react-icons/md';

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
                setTitle(data ? "Online 🟢" : "Ofline 🔴")
            });
            ChangeText()
    }, []);
    function ChangeText() {
        if (User) {
            if (User.spotify) {
                setTitle(`${User?.spotify.song} Dinliyor`)
            } else {
                setTitle(`${User?.activities.filter(t => t.name != "Spotify")[0].name}`)
            }
        } else {
            setTitle(`Aktif Değil`)
        }
    }
    function ClickEvent() {
        State ? setBoolen(false) : setBoolen(true)
        if (State) {
            refim.current.style.backgroundImage = `url(${User.spotify ? User.spotify.album_art_url : `https://cdn.discordapp.com/app-assets/${User.activities[0].application_id}/${User.activities[0].assets.large_image}.png?size=2048`})`
            ChangeText()
        } else {
            refim.current.style.backgroundImage = `linear-gradient(to right, #576076, #455a7d)`
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
            url: "/repo",
            icon: <GoRepo fontSize={24} />
        },
        {
            url: "/about",
            icon: <MdInfo fontSize={24} />
        },
        {
            url: "/repo",
            icon: <GoRepo fontSize={24} />
        },
        {
            url: "/about",
            icon: <MdInfo fontSize={24} />
        },
        {
            url: "/repo",
            icon: <GoRepo fontSize={24} />
        },
        {
            url: "/about",
            icon: <MdInfo fontSize={24} />
        },
        {
            url: "/repo",
            icon: <GoRepo fontSize={24} />
        },
    ]
    return (
        <div className="flex justify-center items-center flex-col">
            <div ref={refim} onClick={t => ClickEvent()} className="cursor-pointer  bg-center bg-cover bg-repeat flex justify-center items-center mt-10 w-[230px] rounded-lg h-20 bg-gradient-to-r from-[#576076] to-[#455a7d]  ">
                <div>
                    <span className='select-none'>{title}</span>
                </div>
            </div>
            <div className="flex flex-wrap mt-2 w-[240px] ">
                {
                    array.map((i, k) => {
                        return (
                            <div key={k} className="w-[64px] h-[63px] bg-[#455a7d] flex justify-center items-center rounded-lg m-2">
                                <a href={i.url}>{i.icon}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}