import imageOne from "../src/assets/image-one.jpg";
import imageTwo from "../src/assets/image-two.jpg";
import imageThree from "../src/assets/image-three.jpg";

import joinGroup from "../src/assets/joinagroup.svg";
import ticket from "../src/assets/ticket.svg";
import startGroup from "../src/assets/start-group.svg";
import {ImageCollectionIDataParams} from "./types.ts";

import upcomingOne from "../src/assets/upcomming-one.png";
import upcomingTwo from "../src/assets/upcomming-two.jpg";
import upcomingThree from "../src/assets/upcomming-three.jpg";
import upcomingFour from "../src/assets/upcomming-four.jpg";

import popularImage from "../src/assets/popular-image.jpg";

import storyOne from "./assets/story-one.jpg";
import storyTwo from "./assets/story-two.jpg";
import storyThree from "./assets/story-three.jpg";

export const ImageCollectionData: ImageCollectionIDataParams[] = [
    {
        id: 1,
        text: "Make new friends",
        image: imageOne
    },
    {
        id: 2,
        text: "Explore the outdoors",
        image: imageTwo
    },
    {
        id: 3,
        text: "Connect over tech",
        image: imageThree
    }
];

export interface IBadge {
    id: number;
    text: string;
}

export const badges: IBadge[] = [
    {
        id: 1,
        text: "Boost your career"
    },
    {
        id: 2,
        text: "Find your zen"
    },
    {
        id: 3,
        text: "Get moving"
    },
    {
        id: 4,
        text: "Share language + culture"
    },
    {
        id: 5,
        text: "Learn to code"
    },
    {
        id: 6,
        text: "Read with friends"
    },
    {
        id: 7,
        text: "Write together"
    },
    {
        id: 8,
        text: "Join hackerthon"
    },
    {
        id: 9,
        text: "Grow plants"
    },
    {
        id: 10,
        text: "Till the soil"
    },
];

export interface IFormAction {
    id: number;
    text: string;
}

export const formActions: IFormAction[] = [
    {
        id: 1,
        text: "Starting soon!"
    },
    {
        id: 2,
        text: "Today"
    },
    {
        id: 3,
        text: "Tomorrow"
    },
    {
        id: 4,
        text: "This week"
    },
    {
        id: 5,
        text: "Online"
    },
    {
        id: 6,
        text: "In person"
    },
    {
        id: 7,
        text: "Trending near you"
    },
];

export interface IHowItWorks {
    id: number;
    title: string;
    text: string;
    image: string;
}

export const HowItWorks: IHowItWorks[] = [
    {
        id: 1,
        title: "Join Group",
        text: "Do what you love, meet others who love it, find your community.The rest is history!",
        image: joinGroup
    },
    {
        id: 2,
        title: "Find an Event",
        text: "Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.",
        image: ticket
    },
    {
        id: 3,
        title: "Start a Group",
        text: "You don't have to be an expert to gather people together and explore shared interests.",
        image: startGroup
    }
];

export interface IUpcomingMeets {
    id: number;
    date: string;
    title: string;
    description: string;
    banner: string;
    count: string;
    sticker: string;
}

export const upcomingMeets: IUpcomingMeets[] = [
    {
        id: 1,
        date: new Date().toISOString(),
        title: "Upcoming online events",
        description: "Remote-Working Group.",
        banner: upcomingOne,
        count: "134",
        sticker: "Online event"
    },
    {
        id: 2,
        date: new Date().toISOString(),
        title: "Upcoming in person events",
        description: "Remote-Working Group.",
        banner: upcomingTwo,
        count: "24",
        sticker: "Offline event"
    },
    {
        id: 3,
        date: new Date().toISOString(),
        title: "Upcoming online events",
        description: "Remote-Working Group.",
        banner: upcomingThree,
        count: "200",
        sticker: "Online event"
    },
    {
        id: 4,
        date: new Date().toISOString(),
        title: "Upcoming in person events",
        description: "Remote-Working Group.",
        banner: upcomingFour,
        count: "525",
        sticker: "In person event"
    }
];

export interface IPopularGroups {
    id: number;
    date: string;
    title: string;
    description: string;
    banner: string;
}

export const popularGroups: IPopularGroups[] = [
    {
        id: 1,
        date: new Date().toISOString(),
        title: "London Socials for Singles",
        banner: upcomingOne,
        description: "Singles Mingles over Volleyball and Picnics @ Kensington Gardens.",
    },
    {
        id: 2,
        date: new Date().toISOString(),
        banner: popularImage,
        title: "Aurora Southland Parker Woman's Social Group",
        description: "Volunteer committee needed from our Group for 911 event TBA on September.",
    },
    {
        id: 3,
        date: new Date().toISOString(),
        title: "Upcoming online events",
        banner: upcomingThree,
        description: "<info> From Concert: US Navy Commodores Jazz Ensembles at Belmont Bay Marina.",
    },
];

export interface IStoriesProps {
    id: number;
    title: string;
    description: string;
    banner: string;
}

export const stories: IStoriesProps[] = [
    {
        id: 1,
        title: "Three Ways To Make Coworker Friendships While Working From Home",
        banner: storyOne,
        description: "Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.",
    },
    {
        id: 2,
        banner: storyTwo,
        title: "  Five Ways to Feel More Connected",
        description: "Since Meetup began nearly 20 years ago, we’ve fostered connections between more than 50 million people in 190 countries worldwide. Here are five simple strategies to help you feel more connected and improve your wellbeing.",
    },
    {
        id: 3,
        title: "How To Live Your Best Social Life",
        banner: storyThree,
        description: "Social interaction is a key part of any healthy lifestyle. Discover all different kinds of events that’ll help you maintain a fun and fulfilling social life.",
    },
];