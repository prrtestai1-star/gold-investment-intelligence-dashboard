
import React from "react";
import { createRoot } from "react-dom/client";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, BarChart, Bar, CartesianGrid
} from "recharts";
import {
  Coins, TrendingUp, TrendingDown, Wallet,
  Activity, ShieldCheck, ArrowUpRight,
  Volume2, FileText, Sparkles
} from "lucide-react";
import "./style.css";

const goldTrend = [
  { month: "May", price: 13980 },
  { month: "Jun", price: 13720 },
  { month: "Jul", price: 13560 },
  { month: "Aug", price: 13280 },
  { month: "Sep", price: 12990 },
  { month: "Oct", price: 12351 }
];

const comparison = [
  { name: "Physical Gold", value: 12351 },
  { name: "Gold BeES", value: 115.23 },
  { name: "Titan", value: 4436.50 }
];

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function App() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">Au</div>
          <div>
            <strong>AURUM</strong>
            <small>INTELLIGENCE</small>
          </div>
        </div>

        <p className="nav-label">WORKSPACE</p>
        <div className="nav active"><Activity size={18}/> Overview</div>
        <div className="nav"><Coins size={18}/> Gold Analytics</div>
        <div className="nav"><TrendingUp size={18}/> Investments</div>
        <div className="nav"><Wallet size={18}/> Portfolio</div>
        <div className="nav"><FileText size={18}/> Reports</div>

        <div className="sidebar-bottom">
          <ShieldCheck size={19}/>
          <span>Investment intelligence<br/><small>Market data may be delayed</small></span>
        </div>
      </aside>

      <section className="main">
        <header className="topbar">
          <div>
            <span className="eyebrow">INVESTMENT COMMAND CENTER</span>
            <h1>Gold Intelligence Dashboard</h1>
            <p>Understand the market. Invest with clarity.</p>
          </div>
          <div className="top-right">
            <span className="live"><i/> DEMO DATA</span>
            <div className="avatar">PR</div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <span className="eyebrow gold-text">YOUR MARKET BRIEFING</span>
            <h2>Gold market, made clearer.</h2>
            <p>Track gold prices, explore investment choices and review your market outlook.</p>
          </div>
          <div className="gold-orb">Au</div>
        </section>

        <div className="section-heading">
          <div><span className="eyebrow">MARKET SNAPSHOT</span><h2>Key indicators</h2></div>
          <span className="date">30 October 2026</span>
        </div>

        <div className="kpi-grid">
          <Card>
            <div className="kpi-top"><span>24K Gold / gram</span><Coins/></div>
            <div className="kpi-value">₹12,351.04</div>
            <div className="kpi-note negative"><TrendingDown size={15}/> Spot equivalent</div>
          </Card>
          <Card>
            <div className="kpi-top"><span>Gold BeES</span><Activity/></div>
            <div className="kpi-value">₹115.23</div>
            <div className="kpi-note negative"><TrendingDown size={15}/> -0.98% today</div>
          </Card>
          <Card>
            <div className="kpi-top"><span>Titan Company</span><TrendingUp/></div>
            <div className="kpi-value">₹4,436.50</div>
            <div className="kpi-note positive"><TrendingUp size={15}/> +0.056% today</div>
          </Card>
          <Card>
            <div className="kpi-top"><span>Your investment</span><Wallet/></div>
            <div className="kpi-value">₹5,000</div>
            <div className="kpi-note">Gold investment enquiry</div>
          </Card>
        </div>

        <div className="charts-grid">
          <Card className="chart-card">
            <div className="card-heading">
              <div><span className="eyebrow">PRICE MOVEMENT</span><h3>Gold price trend</h3></div>
              <span className="pill">Illustrative trend</span>
            </div>
            <div className="chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={goldTrend}>
                  <defs>
                    <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d9ad55" stopOpacity={0.35}/>
                      <stop offset="100%" stopColor="#d9ad55" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#283348" strokeDasharray="3 3"/>
                  <XAxis dataKey="month" stroke="#8994a8"/>
                  <YAxis stroke="#8994a8" domain={["dataMin - 300","dataMax + 300"]}/>
                  <Tooltip/>
                  <Area type="monotone" dataKey="price" stroke="#dfb65e"
                    strokeWidth={3} fill="url(#goldFill)"/>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <small className="muted">Illustrative chart only. Replace with verified historical INR data.</small>
          </Card>

          <Card className="insight-card">
            <div className="insight-icon"><Sparkles size={21}/></div>
            <span className="eyebrow gold-text">AI MARKET INSIGHT</span>
            <h3>A measured approach matters.</h3>
            <p>Recent supplied gold data shows mixed performance across the measured periods. Consider your investment horizon and risk tolerance before making a decision.</p>
            <div className="insight-footer"><ShieldCheck size={17}/> Educational insight, not a prediction</div>
          </Card>
        </div>

        <div className="section-heading">
          <div><span className="eyebrow">INVESTMENT LANDSCAPE</span><h2>Compare your options</h2></div>
        </div>

        <div className="comparison-grid">
          <Card>
            <div className="asset-icon">Au</div>
            <h3>Physical Gold</h3>
            <p>Direct gold ownership</p>
            <strong>₹12,351.04 <small>/ gram</small></strong>
            <span className="muted">24K spot equivalent</span>
          </Card>
          <Card>
            <div className="asset-icon">ETF</div>
            <h3>Nippon Gold BeES</h3>
            <p>Exchange-traded gold fund</p>
            <strong>₹115.23 <small>/ unit</small></strong>
            <span className="muted">Daily change: -0.98%</span>
          </Card>
          <Card>
            <div className="asset-icon">T</div>
            <h3>Titan Company</h3>
            <p>Gold-related company equity</p>
            <strong>₹4,436.50 <small>/ share</small></strong>
            <span className="muted">Not a direct gold investment</span>
          </Card>
        </div>

        <div className="bottom-grid">
          <Card>
            <div className="card-heading">
              <div><span className="eyebrow">MARKET COMPARISON</span><h3>Indicative prices</h3></div>
            </div>
            <div className="chart-area small-chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparison}>
                  <CartesianGrid stroke="#283348" strokeDasharray="3 3"/>
                  <XAxis dataKey="name" stroke="#8994a8"/>
                  <YAxis stroke="#8994a8"/>
                  <Tooltip/>
                  <Bar dataKey="value" fill="#d9ad55" radius={[6,6,0,0]}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <small className="muted">Different units: prices are not directly comparable.</small>
          </Card>
          <Card>
            <span className="eyebrow">YOUR REPORT</span>
            <h3>Investment analysis</h3>
            <p className="muted">Your report and generated audio will appear here when connected to the database.</p>
            <div className="report-action"><FileText/> Full investment report <ArrowUpRight/></div>
            <div className="report-action"><Volume2/> Tamil audio briefing <ArrowUpRight/></div>
          </Card>
        </div>

        <footer>
          AURUM INTELLIGENCE · Educational use only · Market data may be delayed.
          Historical performance does not guarantee future returns.
        </footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
