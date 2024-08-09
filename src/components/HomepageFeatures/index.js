import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Information Technology',
    Svg: require('@site/static/img/planning.svg').default,
    description: (
      <>
        My experience and knowledge with Computer Science and Information Technology has equipped me
        to manage and solve any number of modern IT issues. 
      </>
    ),
  },
  {
    title: 'Gas Chromatography',
    Svg: require('@site/static/img/chroma.svg').default,
    description: (
      <>
        An extensive knowledge and background with the analytical and process Gas Chromatography feilds 
        
      </>
    ),
  },
  {
    title: 'Analytics',
    Svg: require('@site/static/img/analytics.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
