const Icons: {
  [key: string]: JSX.Element;
} = {
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="655.359"
      height="655.359"
      fill-rule="evenodd"
      clip-rule="evenodd"
      image-rendering="optimizeQuality"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      viewBox="0 0 6.827 6.827"
      id="twitter"
    >
      <rect
        width="6.827"
        height="6.827"
        fill="#0a93e2"
        rx="1.456"
        ry="1.456"
      ></rect>
      <path
        fill="#fff"
        d="M5.49 2.378a1.64 1.64 0 0 1-.471.129c.17-.102.3-.263.36-.454a1.65 1.65 0 0 1-.52.199.82.82 0 0 0-1.42.561A.82.82 0 0 0 3.46 3a2.33 2.33 0 0 1-1.691-.857.82.82 0 0 0 .254 1.096.816.816 0 0 1-.372-.103v.01c0 .398.283.73.658.805a.817.817 0 0 1-.37.014.822.822 0 0 0 .766.57 1.646 1.646 0 0 1-1.215.34c.363.233.794.368 1.258.368 1.51 0 2.335-1.25 2.335-2.335 0-.035 0-.07-.002-.106.16-.115.3-.26.41-.424z"
      ></path>
    </svg>
  ),
  github: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:github">
        <path
          id="Vector"
          d="M8.36417 20.1805C8.36417 20.282 8.24831 20.3633 8.10222 20.3633C7.93598 20.3785 7.82012 20.2973 7.82012 20.1805C7.82012 20.0789 7.93598 19.9977 8.08207 19.9977C8.23319 19.9824 8.36417 20.0637 8.36417 20.1805ZM6.7975 19.952C6.76223 20.0535 6.86298 20.1703 7.01411 20.2008C7.14509 20.2516 7.29621 20.2008 7.32644 20.0992C7.35666 19.9977 7.26095 19.8809 7.10982 19.8352C6.97885 19.7996 6.83276 19.8504 6.7975 19.952ZM9.02409 19.8656C8.878 19.9012 8.77725 19.9977 8.79236 20.1145C8.80747 20.216 8.93845 20.282 9.08958 20.2465C9.23566 20.2109 9.33641 20.1145 9.3213 20.0129C9.30619 19.9164 9.17018 19.8504 9.02409 19.8656ZM12.3388 0.40625C5.35172 0.40625 0.00689697 5.75352 0.00689697 12.7969C0.00689697 18.4285 3.5231 23.2477 8.54552 24.9438C9.19033 25.0605 9.41702 24.6594 9.41702 24.3293C9.41702 24.0145 9.4019 22.2777 9.4019 21.2113C9.4019 21.2113 5.87563 21.973 5.13511 19.698C5.13511 19.698 4.56083 18.2203 3.73467 17.8395C3.73467 17.8395 2.58108 17.0422 3.81527 17.0574C3.81527 17.0574 5.06962 17.159 5.75976 18.3676C6.86298 20.3277 8.71176 19.7641 9.43213 19.4289C9.54799 18.6164 9.87543 18.0527 10.2381 17.7176C7.42215 17.4027 4.58098 16.9914 4.58098 12.1062C4.58098 10.7098 4.96383 10.009 5.76984 9.11523C5.63886 8.78516 5.21067 7.42422 5.90082 5.66719C6.95366 5.33711 9.37672 7.03828 9.37672 7.03828C10.3842 6.75391 11.4673 6.60664 12.5403 6.60664C13.6133 6.60664 14.6964 6.75391 15.7039 7.03828C15.7039 7.03828 18.1269 5.33203 19.1798 5.66719C19.8699 7.4293 19.4417 8.78516 19.3107 9.11523C20.1167 10.0141 20.6104 10.7148 20.6104 12.1062C20.6104 17.0066 17.6433 17.3977 14.8273 17.7176C15.2908 18.1187 15.6837 18.8805 15.6837 20.0738C15.6837 21.7852 15.6686 23.9027 15.6686 24.3191C15.6686 24.6492 15.9003 25.0504 16.5401 24.9336C21.5776 23.2477 24.9931 18.4285 24.9931 12.7969C24.9931 5.75352 19.3259 0.40625 12.3388 0.40625ZM4.90338 17.9207C4.83789 17.9715 4.85301 18.0883 4.93865 18.1848C5.01925 18.266 5.13511 18.3016 5.2006 18.2355C5.26609 18.1848 5.25097 18.068 5.16533 17.9715C5.08473 17.8902 4.96887 17.8547 4.90338 17.9207ZM4.35933 17.5094C4.32407 17.5754 4.37444 17.6566 4.47519 17.7074C4.55579 17.7582 4.65654 17.743 4.69181 17.6719C4.72707 17.6059 4.67669 17.5246 4.57594 17.4738C4.47519 17.4434 4.39459 17.4586 4.35933 17.5094ZM5.99149 19.3172C5.91089 19.3832 5.94112 19.5355 6.05698 19.632C6.17284 19.7488 6.31893 19.7641 6.38442 19.6828C6.44991 19.6168 6.41968 19.4645 6.31893 19.368C6.2081 19.2512 6.05698 19.2359 5.99149 19.3172ZM5.41721 18.5707C5.33661 18.6215 5.33661 18.7535 5.41721 18.8703C5.49781 18.9871 5.63383 19.0379 5.69931 18.9871C5.77991 18.9211 5.77991 18.7891 5.69931 18.6723C5.62879 18.5555 5.49781 18.5047 5.41721 18.5707Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.87 28.87"
      id="linkedin"
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <rect
            width="28.87"
            height="28.87"
            fill="#0b86ca"
            rx="6.48"
            ry="6.48"
          ></rect>
          <path
            fill="#fff"
            d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
          ></path>
        </g>
      </g>
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.87 28.87"
      id="instagram"
    >
      <defs>
        <linearGradient
          id="a"
          x1="-1.84"
          x2="32.16"
          y1="30.47"
          y2="-3.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fed576"></stop>
          <stop offset=".26" stop-color="#f47133"></stop>
          <stop offset=".61" stop-color="#bc3081"></stop>
          <stop offset="1" stop-color="#4c63d2"></stop>
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <rect
            width="28.87"
            height="28.87"
            fill="url(#a)"
            rx="6.48"
            ry="6.48"
          ></rect>
          <g data-name="<Group>">
            <path
              fill="#fff"
              d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
              data-name="<Compound Path>"
            ></path>
            <path
              fill="#fff"
              d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
              data-name="<Compound Path>"
            ></path>
            <path
              fill="#fff"
              d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
              data-name="<Path>"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
};

const Icon = ({ type, color = "#fff" }: { type: string; color?: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0"
    >
      {Icons[type]}
    </div>
  );
};

export default Icon;
