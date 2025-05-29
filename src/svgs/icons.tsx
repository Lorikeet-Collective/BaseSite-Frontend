// export const accordianIcon = (
//   <svg
//     width="48"
//     height="48"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g strokeLinecap="round" strokeLinejoin="round">
//       <path
//         stroke="#000000"
//         strokeWidth="0.5"
//         d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
//       />
//     </g>
//   </svg>
// );

// export const exitIcon = (
//   <svg
//     width="48"
//     height="48"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g strokeLinecap="round" strokeLinejoin="round">
//       <path
//         stroke="#000000"
//         strokeWidth="0.5"
//         d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
//       />
//     </g>
//   </svg>
// );

export const accordianIcon = (
<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24">
	<g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
		<path strokeDasharray={20} strokeDashoffset={20} d="M4 7h16">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate>
		</path>
		<path strokeDasharray={12} strokeDashoffset={12} d="M7 12h10">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate>
		</path>
		<path strokeDasharray={4} strokeDashoffset={4} d="M11 17h2">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="4;0"></animate>
		</path>
	</g>
</svg>
);

export const exitIcon = (
<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24">
	<mask id="lineMdFilterAltOff0">
		<g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
			<path strokeDasharray={20} strokeDashoffset={20} d="M4 7h16">
				<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate>
			</path>
			<path strokeDasharray={12} strokeDashoffset={12} d="M7 12h10">
				<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate>
			</path>
			<path strokeDasharray={4} strokeDashoffset={4} d="M11 17h2">
				<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="4;0"></animate>
			</path>
			<path stroke="#000" strokeDasharray={28} strokeDashoffset={28} d="M0 11h24" transform="rotate(45 12 12)">
				<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="28;0"></animate>
			</path>
			<path strokeDasharray={28} strokeDashoffset={28} d="M0 13h24" transform="rotate(45 12 12)">
				<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="28;0"></animate>
			</path>
		</g>
	</mask>
	<rect width={24} height={24} fill="#000" mask="url(#lineMdFilterAltOff0)"></rect>
</svg>
);
