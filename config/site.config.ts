export type GridItemLayout = "1x2" | "2x1" | "2X2" | "2x4";
export type GridItemType = "social" | "music" | "project"
export type EquipmentsItem = {
    title: string;
    link: string;
}

export const siteConfig = {
    creator: "Raka Fadilah",
    title: "Frontend Developer",
    bio: "Building Website and creating Application",
    location: "Berau, Indonesia",
    locationLink: "https://www.google.com/maps/place/Berau+Regency,+East+Kalimantan/@0.9281352,116.4266221,6.38z/data=!4m6!3m5!1s0x320db9032df93133:0x2cea5b974756a685!8m2!3d2.2791966!4d118.0908588!16s%2Fm%2F03gzm4g?entry=ttu",
    email: "fadilahsyafaat2427@gmail.com"
} as const;