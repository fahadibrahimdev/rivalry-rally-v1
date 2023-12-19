import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'The Never Ending Game Season Where competitions are designed by the fans for the fans.',
    text: 'RivalryRally brings informal competitions to your phone screens. You can organize challenges, stream competitions, engage via message boards and place bets. The app is a community platform of fans, organizers, participants, judges, and referees.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'Create Events ',
            description: 'Sign up as event organizers and make their own challenges.',
            icon: 'small-calendar'
        },
        {
            title: 'Spectate',
            description: 'Join as an observer to stream your most anticipated games and support your favourite players. ',
            icon: 'binoculars'
        },
        {
            title: 'Participate ',
            description: 'Participate in competitions in exchange for rewards and popularity. ',
            icon: 'spectators'
        },
        {
            title: 'Wager',
            description: 'Place bets on your favoured games, against other users. ',
            icon: 'gambler'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'RivalryRally is giving the power to the people by offering the freedom to create and stream informal competitions and events whenever they prefer, with users who can sign up as players, making it more inclusive. The app offers content production, streaming as well as a social community where you can engage with likeminded individuals.',
        'Organizers can earn income via designing competitions, rules, and managing entire events. This depends on the volume of observers streaming their events who can opt to be a part of the event via pay per view. ',
    ],
}

export const benefitsContent = {
    heading: 'More Than Just an App',
    text: 'RivalryRally is the first app of its kind that brings everything under one umbrella. The platform works as an interactive space as well as a place for content aborbtion, and source of making money via event creation, and placing bets. ',
    benefits: [
        {
            title: 'Online Streaming',
            description: 'Users can stream competitions directly from the app anytime they like anywhere they are.',
            icon: 'play-video'
        },
        {
            title: 'Pay Per View',
            description: 'Organisers can take advantage of the pay per view feature when setting up exclusive events.',
            icon: 'dollar-eye'
        },
        {
            title: 'Search Events ',
            description: 'RivalryRally users can filter their searches and browse for event and announcements they are particularly interested in. ',
            icon: 'search'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is RivalryRally Compatible with Android or iOS?',
            answer: 'RivalryRally is available on both Android and iOS devices. ',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'Please get in touch with one of our representatives using the feedback and support information provided below.',

        },
        {
            question: 'How do I sign up?',
            answer: 'Click on the pre-registration button and input your details.',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Don’t Miss Out on your Favourite Competitions',
    text: 'Sign up to download RivalryRally as soon as it comes out.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`,
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
