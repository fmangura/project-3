import React, { useState } from 'react'
import Stack from '../helper/Stack';

export default function ListofProjects(){
    const allProjects = [
        {
            'name': 'Appose',
            'img': '../../public/Appose.svg',
            'demolink': 'https://posse.onrender.com/',
            'gitlink': 'https://github.com/fmangura/Appose',
            'summary': 'A blog post webapp that analyses a users sentiment towards their discussed topics and allows other users to interact through a poll range of how much they agree with the post. It then provides users with analytics on that post and how the average user feels about that post. Users can also see how might other users interact with other posts.',
            'bloglink': '/blog/0',
            'stack': <Stack codeStack={['python','sql','flask','postgres']} />
        },
        {
            'name': 'Kitchen Finds',
            'img': '../../public/KitchenFindsPics/KitchenFindsLogo.svg',
            'demolink': 'https://kitchenfinds.onrender.com/',
            'gitlink': 'https://github.com/fmangura/KitchenFinds',
            'summary': 'A find by ingredients recipe app provided by Spoonful API. Simply add ingredients or pick from suggested list from your query and a list of recipes are presented to you! Choose from what you like to see the instructions or add to your list of ingredients!',
            'bloglink': '/blog/1',
            'stack': <Stack codeStack={['html','javascript','css','sql','react','node','postgres']} />
        }
    ]

    return allProjects
}