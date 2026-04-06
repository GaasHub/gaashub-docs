import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Scalability',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        GaasHub provides high-performance data processing pipelines that scale with your research and production needs.
      </>
    ),
  },
  {
    title: 'Comprehensive Documentation',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Your documentation is built with Docusaurus, allowing you to focus on content while we handle the presentation.
      </>
    ),
  },
  {
    title: 'Extensible & Modern',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Built on a modern stack, GaasHub integrates with popular ML and data processing frameworks out of the box.
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
