import { algorithms, devnotes, oscs } from '../assets';

export const navLinks = [
	{
		id: 'hero',
		title: 'Hero',
	},
	{
		id: 'portfolio',
		title: 'Portfolio',
	},
	{
		id: 'experience',
		title: 'Experience',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const experiences = [
	{
		title: 'Senior Graphic Designer',
		company_name: 'Monster Transmission',
		date: '2023 - Present',
		details: [
			"Built a viewer base of over <span style='color: white;'>1,00,000 views</span> by creating video content to help educate consumers on products.",
			"Crafted visually appealling marketing videos and graphics that have garnered over <span style='color: white;'>10,000,000 valuable insights</span>.",
			"Produced high-quality marketing and entertaining material for clients including <span style='color: white;'>History, HBO MAX, and Discovery</span>.",
		],
	},
	{
		title: 'Brand Designer',
		company_name: 'Spartan Contractors',
		date: '2019 - 2023',
		details: [
			"Built brand guidelines for marketing Spartan's portfolio to clients including <span style='color: white;'>First National Bank and Maryland DGS</span>.",
			"<span style='color: white;'>Designed and developed innovative</span> marketing applications for contractor services.",
			"<span style='color: white;'>Managed Newsletters, Emails, and Campaigns</span> from concept to deployment in successful and timely manner.",
		],
	},
	{
		title: 'Logo/Package Designer',
		company_name: 'LIV CBD',
		date: '2023',
		details: [
			"From concept to created. Custom logo made for <span style='color: white;'>Pharmaceutical Company</span> as a Brand Designer.",
			"Developed and designed <span style='color: white;'>scalable packaging graphics</span>, ensuring high compatability for multiple shipping and storefront applications.",
			"<span style='color: white;'>Collaborated with a team</span> to design and implement concepts to the front-end of the website.",
		],
	},
	{
		title: 'Game Developer',
		company_name: 'Freelance',
		date: '2021 - Present',
		details: [
			"Building a <span style='color: white;'>mobile game</span> while learning code, computer architecture, and software engineering.",
			"Studied at <span style='color: white;'>Frederick Community College</span> and interned to gain practical experience in the field of web/game development.",
			"Using softwares such as <span style='color: white;'>Adobe, Blender, Godot and VS Code</span>.",
		],
	},
];

const portfolio = [
	{
		name: 'Wide Range Multimedia Designs',
		description:
			'A social-media presence with over 1,000,000 views containing a wide variety of free-to-view videos online. Posted for a reputable company that satisfies company standards and requirements.',
		image: oscs,
	},
	{
		name: 'E-Commerce',
		description:
			'Built a Shopify with over 10,000 customers made for Automotive Transmissions & Torque Converters to keep up with this rapidly evolving industry.',
		image: devnotes,
	},
	{
		name: 'Visually Understanding Algorithms',
		description:
			'A showcase of tools succesfully used within a platform to be pulled into the search algorithm using Meta, Google, and Youtube analytics.',
		image: algorithms,
	},
];

export { experiences, portfolio };
