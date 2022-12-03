import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
export default function Home() {
    const [User, setData] = useState();
    useEffect(() => {
        fetch('https://api.github.com/users/Thealoq/repos')
            .then(response => response.json()
            )
            .then(data => {
                setData(data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5));
            });
    }, []);
    return (
        <div>
            <div className="mt-10">
                {
                    User?.map((t, i) => {
                        return (
                            <div key={i} className='flex justify-between items-center px-5 bg-[#424f70] m-4 rounded-lg w-[260px] h-[35px]'>
                                <div className='flex items-center'>
                                    <div>
                                        <a href={`https://github.com/${t.owner.login}/${t.name}`}>
                                            <span>{t.name}</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <div>
                                        <p>{t.stargazers_count}</p>
                                    </div>
                                    <div>
                                        <AiFillStar color='yellow'/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}