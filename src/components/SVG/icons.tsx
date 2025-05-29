// import styles from "./SVGIcon.module.css";

export const accordianIcon = (
  <g
    fill="none"
    stroke="black"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
  >
    <path strokeDasharray={16} strokeDashoffset={16} d="M19 5h-14">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.15s"
        values="16;0"
      ></animate>
    </path>
    <path strokeDasharray={10} strokeDashoffset={10} d="M19 12h-9">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.15s"
        dur="0.15s"
        values="10;0"
      ></animate>
    </path>
    <path strokeDasharray={16} strokeDashoffset={16} d="M19 19h-14">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.3s"
        dur="0.15s"
        values="16;0"
      ></animate>
    </path>
    <path strokeDasharray={10} strokeDashoffset={10} d="M7 9l-3 3l3 3">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.45s"
        dur="0.15s"
        values="10;0"
      ></animate>
    </path>
  </g>
);

export const exitIcon = (
  <g
    fill="none"
    stroke="black"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
  >
    <path strokeDasharray={16} strokeDashoffset={16} d="M5 5h14">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.15s"
        values="16;0"
      ></animate>
    </path>
    <path strokeDasharray={10} strokeDashoffset={10} d="M5 12h9">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.15s"
        dur="0.15s"
        values="10;0"
      ></animate>
    </path>
    <path strokeDasharray={16} strokeDashoffset={16} d="M5 19h14">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.3s"
        dur="0.15s"
        values="16;0"
      ></animate>
    </path>
    <path strokeDasharray={10} strokeDashoffset={10} d="M17 9l3 3l-3 3">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.45s"
        dur="0.15s"
        values="10;0"
      ></animate>
    </path>
  </g>
);
