/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Передовые инструменты',
    content:
      "Собственные IT-решения и партнеры по оптимизации и автоматизации рекламных кампаний.",
  },
  {
    title: 'Персональный менеджер',
    content:
      'Ваш проект ведет опытный аккаунт, который гарантирует связь, скорость, точность и понимание деталей.',
  },
  {
    title: 'Полная прозрачность',
    content:
      'Отчитываемся по результатам, предоставляем медиаплан по запросам и трафику и даем полный доступ к отчетам и аналитике.',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/starting')}
            >
              Заказать консультацию
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>Запуск рекламы</h2>
              <p>
                Сделаем Вашу рекламу в интернете <strong>систематической и эффективной</strong>. На основе индивидуальной стратегии продвижения, которая будет учитывать Ваши цели, бюджет, нишу и целевую аудиторию.
              </p>
              <p>
                Работаем со <strong>сложными тематиками:</strong>
              </p>
              <CodeBlock className="language-html">
                iGaming, Betting, Crypto
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to get started in seconds"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to update"
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>Аналитика трафика</h2>
              <p>
                Гарантируем полную отчетность и даем полный доступ к лучшим аналитическим инструментам и сервисам. Не упустите шанс получить максимальную отдачу от вашего бюджета.
              </p>
              <CodeBlock className="language-sh">
                Снизим стоимость привлечения клиента
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
