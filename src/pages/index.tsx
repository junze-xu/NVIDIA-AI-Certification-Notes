import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/core/lib/client/exports/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import qrCode from './qrcode.jpg';
import './index.css';

const exams = [
  {code: 'NCA-AIIO', name: 'AI 基础架构与运维', level: 'NCA', fee: '960元', slug: 'nca-aiio'},
  {code: 'NCA-GENL', name: '生成式 AI 与 LLM', level: 'NCA', fee: '960元', slug: 'nca-genl'},
  {code: 'NCA-GENM', name: '多模态生成式 AI', level: 'NCA', fee: '960元', slug: 'nca-genm'},
  {code: 'NCA-ADS', name: '加速数据科学 RAPIDS', level: 'NCA', fee: '960元', slug: 'nca-ads'},
  {code: 'NCP-AII', name: 'AI Infrastructure', level: 'NCP', fee: '2880元', slug: 'ncp-aii'},
  {code: 'NCP-AIO', name: 'AI Operations', level: 'NCP', fee: '2880元', slug: 'ncp-aio'},
  {code: 'NCP-AIN', name: 'AI Networking', level: 'NCP', fee: '2880元', slug: 'ncp-ain'},
  {code: 'NCP-GENL', name: 'Generative AI LLMs', level: 'NCP', fee: '1580元', slug: 'ncp-genl'},
  {code: 'NCP-AAI', name: 'Agentic AI', level: 'NCP', fee: '1580元', slug: 'ncp-aai'},
  {code: 'NCP-ADS', name: 'Accelerated Data Science', level: 'NCP', fee: '1580元', slug: 'ncp-ads'},
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <header className="hero-banner">
        <div className="container">
          <h1>NVIDIA 认证备考站</h1>
          <p>NCA 四门初级 + NCP 六门中级 · 中文 · 非官方学习笔记</p>
          <div className="hero-buttons">
            <Link className="button button--primary button--lg" to="/docs/nca-aiio/overview">
              开始学习
            </Link>
            <Link className="button button--outline button--lg" to="/about">
              关于本站
            </Link>
          </div>
        </div>
      </header>

      <main className="container padding-vert--lg">
        <h2 className="section-title">十门考试总览</h2>
        <div className="exam-grid">
          {exams.map((ex) => (
            <Link
              key={ex.code}
              to={`/docs/${ex.slug}/overview`}
              className={`exam-card exam-card--${ex.level.toLowerCase()} exam-card--link`}
            >
              <div className="exam-card__header">
                <span className={`level-tag level-tag--${ex.level.toLowerCase()}`}>{ex.level}</span>
              </div>
              <h3 className="exam-card__code">{ex.code}</h3>
              <p className="exam-card__name">{ex.name}</p>
              <div className="exam-card__meta">
                <span>{ex.fee}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 引流区 */}
        <section className="cta-section">
          <h2 className="section-title">领取完整备考资料</h2>
          <div className="cta-card">
            <div className="cta-card__qr">
              <img src={qrCode} alt="公众号 JunzeXuInfra 二维码" width="160" />
              <span>扫码关注</span>
            </div>
            <div className="cta-card__info">
              <p>关注公众号「JunzeXuInfra」，回复考试代码（如 <code>NCA-AIIO</code>），免费领取该考试完整 PDF。</p>
              <ul className="cta-card__perks">
                <li>每门一份，离线可用</li>
                <li>更新推送第一时间通知</li>
                <li>公众号后台直接反馈错误</li>
              </ul>
              <Link className="button button--primary button--lg" to="/about">
                了解详情 →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
