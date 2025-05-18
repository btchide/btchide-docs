import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Быстрый старт',
    description: (
      <>
        Установите и настройте BTCHide VPN за считанные минуты.
      </>
    ),
  },
  {
    title: '🔒 Надёжное шифрование',
    description: (
      <>
        BTCHide VPN использует современные алгоритмы шифрования для защиты ваших данных и анонимности.
      </>
    ),
  },
  {
    title: '🌐 Глобальные серверы',
    description: (
      <>
        Доступ к серверам по всему миру для обхода геоблокировок и обеспечения высокой скорости.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
