import React, { useState } from 'react'
import Stack from '../helper/Stack';

export default function ListofBlogs(){
    const allBlogs = [
        {
            'title': 'Appose | The Creation',
            'subtitle': '',
            'date': 'April 16, 2024',
            'images': Object.keys(import.meta.glob('Appose ScreenShots/*.{png}', {eager: true, query: 'url', import: 'default'})),
            'text': `\n
            As I look through Twitter, I typically see immensely polarized opinions. I don't know if it's a recent development in society or if it's just part of growing up, but people hyper-focus too much on one side of an argument. It has gotten so bad that any opposing argument is immediately deemed untrue without question. This issue is a direct consequence of numerous factors, but notably because of how social media—and its algorithms—feed information. I don't fault companies entirely, as it is the most effective way of gaining clicks, but it also does a lot of harm.\n 
            My solution is simple: show people what the other side is saying. It's not forcing anyone to ONLY see one perspective, but rather ALL perspectives. Particularly, posts/opinions that have a lot of influence and traction should be challenged. People should be exposed to varying opinions and given the opportunity to decide for themselves.\n
            For the back-end, I utilized Flask and PostgreSQL to handle my database and API endpoints. This being my first large project, I stuck to using only Flask to handle user profiles, posts, likes, comments, database relationships, and rendering the front-end.\n
            The main function of the application is to feed a short text paragraph into a sentiment analysis API (MeaningCloud) where the topic discussed and the post's sentiment on said topic is extracted. This sentiment is simplified to positive, negative, or neutral and saved in a database along with the rest of the data. Data received from the API is cached as a JSON object so that later development can still access it without needing to make more calls.\n
            Users can interact with the posts in the typical manner, but rather than simply 'liking,' I wanted users to scale how much they agree or disagree with it. Data on how much people strongly agreed/disagreed is saved and is accessible only AFTER a user has input their own range. By doing so, there is a broader understanding of the public's sentiment on that particular opinion.\n
            Lastly, as stated earlier, after reaching a threshold of interactions (likes & comments), the post and its sentiment are automatically matched with other posts that share the same topic. Then, if the post holds an opposing sentiment from another, both are displayed side-by-side for users to view.\n
            For now, the application will remain as a Flask app rendered by Jinja2. It will stand as simply one of many solutions to combat confirmation bias. I hope that one day, something like this will become the norm. As you may know, it is something that Ground News has already begun doing to combat mainstream media bias, so it is not such a far-fetched idea.`,
        },
        {
            'title': 'Kitchen Finds | Its Finding',
            'subtitle': '',
            'date': 'June 22, 2024',
            'images': Object.keys(import.meta.glob('./KitchenFindsPics/*.png')),
            'text': `\n
            You see, I love cooking and anything kitchen-related: washing dishes, organizing cupboards, buying groceries, baking, and, yes, cooking. You remember how in the Pixar film Ratatouille, Remy explained how adding the cheese and mushroom together made a delicious blend of flavors and how he could cook with just his nose? That's how much I enjoy cooking. Now, I don't want to be a chef, but with a lot of things I do, I like to find a blend of the things I'm most passionate about. \n
            So for my back-end, I used Node.js, Express, and PostgreSQL to handle my database and API endpoints. My database consisted of a User and Recipes table. I want users to be able to save recipes to their own accounts and, admittedly, practice user authentication. The recipes were from the Spoonacular API, which contained a multitude of endpoints that allowed for ingredient list-based searches. Because requests are limited to 100 calls per day (free version), I opted to have the retrieved recipes that a user saved cached in my database. This way, I avoided caching large amounts of data for every searched recipe. \n            
            Kitchen Finds was inspired by a moment when I forgot to buy groceries and couldn't figure out what to make with what I had. I knew plenty of people out there shared my problem, and they probably wished for the same thing. The key feature is an empty array of ingredients (strings) that you add ingredients into through an input. This input would also then give you other suggested ingredients based on the recently added item just in case. My approach was to point out that you can input multiple ingredients at once—hopefully the ones that haven't expired in your fridge—and return a list of viable recipes. A lot of recipe sites encourage only one ingredient search at a time or cuisine search, which is partly why I took this approach.\n             
            There are plans in the future to store kitchen items in a database for each user so that recipes based on what they have can be quickly suggested. But until those updates are made, I hope this recipe app is easy enough for anyone to use.`,
        },
        {
            'title': 'From Cells to Software',
            'subtitle': 'My journey to Software Engineering',
            'date': 'August 02, 2024',
            'images': [],
            'text': `\n
            The dream was always to help others. It started with a pursuit in research, then medical school, and then nursing. Healthcare played to my strengths of compassion, resilience, and love for the sciences. After graduating, however, the pandemic hit. This brought time to reflect on my family, relationships, and—most especially—myself. At that time, I had started working at a diagnostics lab to begin my post-grad life and enter the workforce. There, I learned a lot about handling sensitive data, working in a start-up culture, and getting to know a variety of people.\n
            Each year, I gained new skills and was given more responsibilities. Eventually, one of the skills involved adding some basic functions to Google Sheets. It was the depth of research on how to implement certain functions, seeing things work, and knowing that others benefited from it that really made me reconsider my path. I then spoke to some friends about their careers in software engineering, and they all enjoyed what they did. So, I thought about it more, especially regarding why I was considering the switch. I landed on a few key points: 1. I love solving problems that are puzzle-like in nature. 2. Being able to apply changes/fixes and see if they work in real-time is my preferred way of finding solutions. 3. Software engineering can be applied to a variety of fields—some creative, some technical, and maybe a little bit of both. Now that I've completed my software engineering program, I'm working on my personal site and enjoying every line of code. I've created apps that I once thought, 'maybe somebody should do it like this.' Every step of learning has made me wonder what else there is to learn, and I hope to meet people to learn from along the way.\n
            So why am I writing this? Well, at the time I am writing this, I have not found a job yet. As we all know, the industry is in a difficult position. For anyone looking to get into tech, I'd want them to know the risks involved. I've met people with varying levels of experience who share the same struggle. But that’s what anything worthwhile is: struggle. People always want others to know that their success is through struggle and hard work. A lot of times it's true, but sometimes we all know it's not. But the thing about succeeding through hardships is that sigh of relief and knowing you made it.\n
            I am writing this because I started kinda sorta knowing what I was going to do, and then I found what I wanted to do. The pandemic hit, and life changed. We start our career and we change our career. We get to where we aim for and find that the steps get steeper. But I would never look back and regret how far I've come. At the end of the day, I'd rather climb these steps than keep staring at them from below, wondering what could be at the top.
            `,
        },
    ]

    return allBlogs
}