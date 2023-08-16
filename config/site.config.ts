export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "music" | "project"
export type PlaylistItem = {
    title: string;
    link: string;
}

export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string;
    buttonSecondaryText?: string;
    stars?: number;
    images?: string;
    playlist?: PlaylistItem[];
}

const GridItems: GridItemInterface[] = [
    {
        layout: "2x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "hiroshiyoka",
        description:
            "",
        color: "#070707",
        buttonTitle: "Follow",
        buttonLink: "https://github.com/hiroshiyoka",
        buttonSecondaryText: "0",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Twitter",
        icon: "twitter",
        username: "@mosaicman_",
        color: "#1da1f2",
        buttonTitle: "Follow",
        buttonLink: "https://twitter.com/mosaicman_",
        buttonSecondaryText: "12",
    },
    {
        layout: "1x2",
        type: "social",
        title: "LinkedIn",
        icon: "linkedin",
        username: "Raka Fadilah Syafaat",
        color: "#070707",
        buttonTitle: "Connect",
        buttonLink: "https://linkedin.com/in/raka-fadilah",
        buttonSecondaryText: "40",
    },
    {
        layout: "2x4",
        type: "music",
        title: "Spotify Playlist",
        images: "/spotify-image.jpg",
        playlist: [
            {
                title: "dopamine",
                link: "https://open.spotify.com/playlist/48CZj6HS9YKADIHn39PR4C?si=553326b24ee245e0",
            },
            {
                title: "WIB",
                link: "https://open.spotify.com/playlist/4GGzjQX3mvbTdScQlCo1ig?si=02692d00a936489a",
            },
            {
                title: "don't ask",
                link: "https://open.spotify.com/playlist/3vHENPKkikygQUyFfAFw30?si=6e0c80f420ba452b",
            },
            {
                title: "dm",
                link: "https://open.spotify.com/playlist/5hSK72Co5w1pc7SmMrtjNp?si=99e924217ff6479e",
            },
            {
                title: "昇る太陽の国",
                link: "https://open.spotify.com/playlist/2eXE40MwtF6iqfHylMfpeP?si=1c35cba67b2a4a66",
            },
            {
                title: "more emotional",
                link: "https://open.spotify.com/playlist/7LmkifZ4YjFJ7XurEzI3xg?si=46d7a2124bd04032",
            },
        ],
    },
    {
        layout: "2x2",
        type: "social",
        title: "Instagram",
        icon: "instagram",
        username: "@mosaicman_",
        buttonTitle: "Follow",
        buttonLink: "https://instagram.com/mosaicman_",
        buttonSecondaryText: "111",
        color: "#ff0000",
    },
]

export const siteConfig = {
    creator: "Raka Fadilah",
    title: "Frontend Developer",
    bio: "Building Website and creating Mobile Apps",
    location: "Berau, Indonesia",
    locationLink: "https://www.google.com/maps/place/Berau+Regency,+East+Kalimantan/@0.9281352,116.4266221,6.38z/data=!4m6!3m5!1s0x320db9032df93133:0x2cea5b974756a685!8m2!3d2.2791966!4d118.0908588!16s%2Fm%2F03gzm4g?entry=ttu",
    email: "fadilahsyafaat2427@gmail.com",
    items: GridItems,
} as const;