import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/core/lib/client/exports/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.css';

const exams = [
  {code: 'NCA-AIIO', name: 'AI 基础架构与运维', weight: '40%', level: 'NCA', fee: '960元', status: 'active'},
  {code: 'NCA-GENL', name: '生成式 AI 与 LLM', weight: '30%', level: 'NCA', fee: '960元', status: 'pending'},
  {code: 'NCA-GENM', name: '多模态生成式 AI', weight: '25%', level: 'NCA', fee: '960元', status: 'pending'},
  {code: 'NCA-ADS', name: '加速数据科学 RAPIDS', weight: '23%', level: 'NCA', fee: '960元', status: 'pending'},
  {code: 'NCP-AII', name: 'AI Infrastructure', weight: '—', level: 'NCP', fee: '2880元', status: 'planned'},
  {code: 'NCP-AIO', name: 'AI Operations', weight: '—', level: 'NCP', fee: '2880元', status: 'planned'},
  {code: 'NCP-AIN', name: 'AI Networking', weight: '—', level: 'NCP', fee: '2880元', status: 'planned'},
  {code: 'NCP-GENL', name: 'Generative AI LLMs', weight: '—', level: 'NCP', fee: '1580元', status: 'planned'},
  {code: 'NCP-AAI', name: 'Agentic AI', weight: '—', level: 'NCP', fee: '1580元', status: 'planned'},
  {code: 'NCP-ADS', name: 'Accelerated Data Science', weight: '—', level: 'NCP', fee: '1580元', status: 'planned'},
];

function StatusBadge({status}: {status: string}) {
  const map: Record<string, {label: string; cls: string}> = {
    active: {label: '🟡 进行中', cls: 'badge-active'},
    pending: {label: '⬜ 未开始', cls: 'badge-pending'},
    planned: {label: '📋 规划中', cls: 'badge-planned'},
  };
  const s = map[status] ?? map.pending;
  return <span className={`badge ${s.cls}`}>{s.label}</span>;
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <header className="hero-banner">
        <div className="container">
          <h1>NVIDIA 认证备考站</h1>
          <p>NCA 四门初级 + NCP 六门中级 · 中英双语 · 非官方学习笔记</p>
          <div className="hero-buttons">
            <Link className="button button--primary button--lg" to="/docs/nca-aiio/overview">
              NCA-AIIO 入门
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
            <div key={ex.code} className={`exam-card exam-card--${ex.level.toLowerCase()}`}>
              <div className="exam-card__header">
                <span className={`level-tag level-tag--${ex.level.toLowerCase()}`}>{ex.level}</span>
                <StatusBadge status={ex.status} />
              </div>
              <h3 className="exam-card__code">{ex.code}</h3>
              <p className="exam-card__name">{ex.name}</p>
              <div className="exam-card__meta">
                <span>{ex.fee}</span>
                {ex.weight !== '—' && <span>最高权域 {ex.weight}</span>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
