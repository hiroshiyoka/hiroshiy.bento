export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "music" | "project"
export type EquipmentsItem = {
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
        color: "#ff0000",
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
        color: "#5865f2",
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
        buttonTitle: "Connect",
        buttonLink: "https://linkedin.com/in/raka-fadilah",
        buttonSecondaryText: "40",
        color: "#070707",
    }
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