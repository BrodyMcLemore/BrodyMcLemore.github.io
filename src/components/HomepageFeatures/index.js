import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "Information Technology",
		Svg: require("@site/static/img/planning.svg").default,
		description: (
			<>
				Led the strategic development and implementation of key IT solutions,
				including network architecture and Office 365 management, to support
				business goals and enhance operational efficiency.
			</>
		),
	},
	{
		title: "Gas Chromatography",
		Svg: require("@site/static/img/chroma.svg").default,
		description: (
			<>
				Directed numerous Process Gas Chromatograph projects, overseeing final
				product testing and collaborating with global partners to standardize
				applications and develop innovative analytical solutions.
			</>
		),
	},
	{
		title: "Analytical",
		Svg: require("@site/static/img/analytics.svg").default,
		description: (
			<>
				Spearheaded the development and validation of new analytical
				methodologies, utilizing advanced gas chromatography techniques to
				deliver accurate sample analysis and enhance laboratory capabilities.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
