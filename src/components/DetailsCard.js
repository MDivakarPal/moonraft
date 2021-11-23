import React, { useEffect, useState } from 'react'

import UserCard from './UserCard';
function DetailsCard() {
    const data = [
        {
            id: 1,
            name: " Ravi",
            emailId: "ravi@gmail.com",
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
            location: [
                "Bangalore"
            ],
            department: [
                "Development"
            ],
            age: 24,
            gender: "M",
            joiningDate: "24/9/2019"
        },
        {
            id: 2,
            name: " Ankita",
            emailId: " ankita@gmail.com ",
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
            location: [
                "Kolkata"
            ],
            department: [
                "Design "
            ],
            age: 24,
            gender: "F",
            joiningDate: "12/1/2015"
        },
        {
            id: 3,
            name: " Balaji ",
            emailId: " balaji@gmail.com",
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
            location: [
                " Kolkata"
            ],
            department: [
                "Design"
            ],
            age: 24,
            gender: "F",
            joiningDate: "1/12/2020"
        }
    ];
    return (
        <div>
            {data.map(({ id, name, email, gender, joiningDate, location, department, aboutMe })=><UserCard
                id={id}
                name={name}
                email={email}
                gender={gender}
                joiningDate={joiningDate}
                location={location}
                deptt={department}
                about={aboutMe}
            />)}
        </div>
    )
}


export default DetailsCard
