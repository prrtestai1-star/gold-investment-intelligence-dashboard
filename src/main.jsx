import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, BarChart, Bar, CartesianGrid
} from "recharts";
import {
  Coins, TrendingUp, TrendingDown, Wallet,
  Activity, ShieldCheck, ArrowUpRight,
  Volume2, FileText, Sparkles, X, ChevronRight
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

const details = {
  "24K Gold / gram": {
    title: "24K Gold Price",
    description: "The displayed price is an indicative 24K gold spot equivalent.",
    points: [
      "Current displayed price: ₹12,351.04 per gram",
      "Spot equivalent, not a jewellery retail price",
      "Making charges, GST and dealer premiums are not included",
      "Market prices may change during the day"
    ]
  },
  "Gold BeES": {
    title: "Nippon India ETF Gold BeES",
    description: "Gold BeES is an exchange-traded fund designed to provide exposure to gold.",
    points: [
      "Displayed market price: ₹115.23 per unit",
      "Daily change: -0.98%",
      "Previous close: ₹116.13",
      "52-week high: ₹148.14",
      "52-week low: ₹99.03"
    ]
  },
  "Titan Company": {
    title: "Titan Company",
    description: "Titan is a company equity investment, not a direct gold investment.",
    points: [
      "Displayed market price: ₹4,436.50 per share",
      "Daily change: +0.056%",
      "Previous close: ₹4,323",
      "52-week high: ₹5,186.70",
      "52-week low: ₹3,667.30"
    ]
  },
  "Your investment": {
    title: "Investment Enquiry",
    description: "This is the investment amount supplied for the demo enquiry.",
    points: [
      "Requested amount: ₹5,000",
      "No transaction has been executed",
      "No actual holdings are connected to this demo portfolio"
    ]
  },
  "Physical Gold": {
    title: "Physical Gold",
    description: "Physical gold means direct ownership of gold in a form such as coins or bars.",
    points: [
      "Displayed 24K spot equivalent: ₹12,351.04 per gram",
      "Actual purchase price may include GST and dealer premiums",
      "Jewellery may also include making charges",
      "Consider storage and purity verification"
    ]
  },
  "Gold BeES investment": {
    title: "Gold BeES",
    description: "Gold BeES provides exchange-traded exposure to gold.",
    points: [
      "Displayed price: ₹115.23 per unit",
      "Daily change: -0.98%",
      "ETF units are bought and sold through a trading account",
      "Consider applicable costs and fund information before investing"
    ]
  },
  "Titan investment": {
    title: "Titan Company Shares",
    description: "Titan shares represent ownership in a listed company, not ownership of a quantity of gold.",
    points: [
      "Displayed price: ₹4,436.50 per share",
      "Daily change: +0.056%",
      "Share prices can move independently of gold prices",
      "Company equity carries business and market risks"
    ]
  }
};

function Card({ children, className = "", onClick, ...props }) {
  return (
    <div
      className={`card ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState("Overview");
  const [selectedDetail, setSelectedDetail] = useState(null);

  const navigation = [
    { name: "Overview", icon: Activity },
    { name: "Gold Analytics", icon: Coins },
    { name: "Investments", icon: TrendingUp },
    { name: "Portfolio", icon: Wallet },
    { name: "Reports", icon: FileText }
  ];

  const openDetail = (key) => {
    setSelectedDetail(details[key] || {
      title: key,
      description: "Additional information about this dashboard section.",
      points: ["Refer to the investment report for further details."]
    });
  };

  const clickableStyle = {
    cursor: "pointer"
  };

  function renderOverview() {
    return (
      <>
        <section className="welcome">
          <div>
            <span className="eyebrow gold-text">YOUR MARKET BRIEFING</span>
            <h2>Gold market, made clearer.</h2>
            <p>Track gold prices, explore investment choices and review your market outlook.</p>
          </div>
          <div className="gold-orb">Au</div>
        </section>

        <div className="section-heading">
          <div>
            <span className="eyebrow">MARKET SNAPSHOT</span>
            <h2>Key indicators</h2>
          </div>
          <span className="date">30 October 2026</span>
        </div>

        <div className="kpi-grid">
          <Card onClick={() => openDetail("24K Gold / gram")} style={clickableStyle}>
            <div className="kpi-top"><span>24K Gold / gram</span><Coins /></div>
            <div className="kpi-value">₹12,351.04</div>
            <div className="kpi-note negative"><TrendingDown size={15}/> Spot equivalent</div>
            <small className="muted">Click for details →</small>
          </Card>

          <Card onClick={() => openDetail("Gold BeES")} style={clickableStyle}>
            <div className="kpi-top"><span>Gold BeES</span><Activity /></div>
            <div className="kpi-value">₹115.23</div>
            <div className="kpi-note negative"><TrendingDown size={15}/> -0.98% today</div>
            <small className="muted">Click for details →</small>
          </Card>

          <Card onClick={() => openDetail("Titan Company")} style={clickableStyle}>
            <div className="kpi-top"><span>Titan Company</span><TrendingUp /></div>
            <div className="kpi-value">₹4,436.50</div>
            <div className="kpi-note positive"><TrendingUp size={15}/> +0.056% today</div>
            <small className="muted">Click for details →</small>
          </Card>

          <Card onClick={() => openDetail("Your investment")} style={clickableStyle}>
            <div className="kpi-top"><span>Your investment</span><Wallet /></div>
            <div className="kpi-value">₹5,000</div>
            <div className="kpi-note">Gold investment enquiry</div>
            <small className="muted">Click for details →</small>
          </Card>
        </div>

        <div className="charts-grid">
          <Card className="chart-card">
            <div className="card-heading">
              <div>
                <span className="eyebrow">PRICE MOVEMENT</span>
                <h3>Gold price trend</h3>
              </div>
              <span className="pill">Illustrative trend</span>
            </div>

            <div className="chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={goldTrend}
                  onClick={(data) => {
                    if (data?.activePayload?.[0]) {
                      const item = data.activePayload[0].payload;
                      openDetail({
                        title: `${item.month} Gold Price`,
                        description: "Illustrative historical chart value.",
                        points: [
                          `Month: ${item.month}`,
                          `Displayed chart value: ₹${item.price.toLocaleString("en-IN")}`,
                          "This chart is illustrative, not verified historical INR data."
                        ]
                      });
                    }
                  }}
                >
                  <defs>
                    <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d9ad55" stopOpacity={0.35}/>
                      <stop offset="100%" stopColor="#d9ad55" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#283348" strokeDasharray="3 3"/>
                  <XAxis dataKey="month" stroke="#8994a8"/>
                  <YAxis stroke="#8994a8" domain={["dataMin - 300", "dataMax + 300"]}/>
                  <Tooltip/>
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#dfb65e"
                    strokeWidth={3}
                    fill="url(#goldFill)"
                    activeDot={{ r: 7, cursor: "pointer" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <small className="muted">Illustrative chart only. Click a chart point for its displayed value.</small>
          </Card>

          <Card className="insight-card">
            <div className="insight-icon"><Sparkles size={21}/></div>
            <span className="eyebrow gold-text">AI MARKET INSIGHT</span>
            <h3>A measured approach matters.</h3>
            <p>Recent supplied gold data shows mixed performance across the measured periods. Consider your investment horizon and risk tolerance before making a decision.</p>
            <div className="insight-footer">
              <ShieldCheck size={17}/> Educational insight, not a prediction
            </div>
            <button className="interactive-link" onClick={() => setActivePage("Gold Analytics")}>
              Explore gold analytics <ChevronRight size={16}/>
            </button>
          </Card>
        </div>

        <div className="section-heading">
          <div>
            <span className="eyebrow">INVESTMENT LANDSCAPE</span>
            <h2>Compare your options</h2>
          </div>
        </div>

        <div className="comparison-grid">
          <Card onClick={() => openDetail("Physical Gold")} style={clickableStyle}>
            <div className="asset-icon">Au</div>
            <h3>Physical Gold</h3>
            <p>Direct gold ownership</p>
            <strong>₹12,351.04 <small>/ gram</small></strong>
            <span className="muted">24K spot equivalent</span>
            <small className="muted">View details →</small>
          </Card>

          <Card onClick={() => openDetail("Gold BeES investment")} style={clickableStyle}>
            <div className="asset-icon">ETF</div>
            <h3>Nippon Gold BeES</h3>
            <p>Exchange-traded gold fund</p>
            <strong>₹115.23 <small>/ unit</small></strong>
            <span className="muted">Daily change: -0.98%</span>
            <small className="muted">View details →</small>
          </Card>

          <Card onClick={() => openDetail("Titan investment")} style={clickableStyle}>
            <div className="asset-icon">T</div>
            <h3>Titan Company</h3>
            <p>Gold-related company equity</p>
            <strong>₹4,436.50 <small>/ share</small></strong>
            <span className="muted">Not a direct gold investment</span>
            <small className="muted">View details →</small>
          </Card>
        </div>

        <div className="bottom-grid">
          <Card>
            <div className="card-heading">
              <div>
                <span className="eyebrow">MARKET COMPARISON</span>
                <h3>Indicative prices</h3>
              </div>
            </div>

            <div className="chart-area small-chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparison}
                  onClick={(data) => {
                    if (data?.activePayload?.[0]) {
                      const item = data.activePayload[0].payload;
                      openDetail(item.name === "Titan"
                        ? "Titan investment"
                        : item.name === "Gold BeES"
                          ? "Gold BeES investment"
                          : "Physical Gold");
                    }
                  }}
                >
                  <CartesianGrid stroke="#283348" strokeDasharray="3 3"/>
                  <XAxis dataKey="name" stroke="#8994a8"/>
                  <YAxis stroke="#8994a8"/>
                  <Tooltip/>
                  <Bar dataKey="value" fill="#d9ad55" radius={[6,6,0,0]} cursor="pointer"/>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <small className="muted">Different units: prices are not directly comparable. Click a bar for details.</small>
          </Card>

          <Card>
            <span className="eyebrow">YOUR REPORT</span>
            <h3>Investment analysis</h3>
            <p className="muted">Your investment report and audio briefing.</p>
            <div className="report-action"><FileText/> Full investment report <ArrowUpRight/></div>
            <div className="report-action"><Volume2/> Tamil audio briefing <ArrowUpRight/></div>
          </Card>
        </div>
      </>
    );
  }

  function renderPage() {
    switch (activePage) {
      case "Overview":
        return renderOverview();

      case "Gold Analytics":
        return (
          <>
            <div className="section-heading">
              <div>
                <span className="eyebrow">MARKET RESEARCH</span>
                <h2>Gold Analytics</h2>
              </div>
            </div>

            <div className="charts-grid">
              <Card className="chart-card">
                <h3>Gold price movement</h3>
                <div className="chart-area">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={goldTrend}>
                      <CartesianGrid stroke="#283348" strokeDasharray="3 3"/>
                      <XAxis dataKey="month" stroke="#8994a8"/>
                      <YAxis stroke="#8994a8"/>
                      <Tooltip/>
                      <Area dataKey="price" stroke="#dfb65e" fill="#d9ad55" fillOpacity={0.2}/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <small className="muted">Illustrative chart values only.</small>
              </Card>

              <Card>
                <span className="eyebrow">CURRENT GOLD PRICE</span>
                <h2>₹12,351.04</h2>
                <p>24K gold per gram · Spot equivalent</p>
                <p className="muted">Historical chart values are illustrative.</p>
                <button className="interactive-link" onClick={() => openDetail("24K Gold / gram")}>
                  Price details <ChevronRight size={16}/>
                </button>
              </Card>
            </div>

            <div className="comparison-grid">
              <Card onClick={() => openDetail("Gold BeES")} style={clickableStyle}>
                <h3>Gold BeES</h3>
                <div className="kpi-value">₹115.23</div>
                <p>Daily change: -0.98%</p>
                <small className="muted">Click for details →</small>
              </Card>
              <Card onClick={() => openDetail("Titan Company")} style={clickableStyle}>
                <h3>Titan Company</h3>
                <div className="kpi-value">₹4,436.50</div>
                <p>Daily change: +0.056%</p>
                <small className="muted">Click for details →</small>
              </Card>
            </div>
          </>
        );

      case "Investments":
        return (
          <>
            <div className="section-heading">
              <div>
                <span className="eyebrow">INVESTMENT OPTIONS</span>
                <h2>Investment Opportunities</h2>
              </div>
            </div>

            <div className="comparison-grid">
              <Card onClick={() => openDetail("Physical Gold")} style={clickableStyle}>
                <div className="asset-icon">Au</div>
                <h3>Physical Gold</h3>
                <p>Direct gold ownership</p>
                <strong>₹12,351.04 / gram</strong>
                <small className="muted">View details →</small>
              </Card>

              <Card onClick={() => openDetail("Gold BeES investment")} style={clickableStyle}>
                <div className="asset-icon">ETF</div>
                <h3>Gold BeES</h3>
                <p>Gold exchange-traded fund</p>
                <strong>₹115.23 / unit</strong>
                <small className="muted">View details →</small>
              </Card>

              <Card onClick={() => openDetail("Titan investment")} style={clickableStyle}>
                <div className="asset-icon">T</div>
                <h3>Titan Company</h3>
                <p>Gold-related company equity</p>
                <strong>₹4,436.50 / share</strong>
                <small className="muted">View details →</small>
              </Card>
            </div>

            <Card onClick={() => openDetail("Your investment")} style={clickableStyle}>
              <h3>Investment amount</h3>
              <div className="kpi-value">₹5,000</div>
              <p className="muted">Gold investment enquiry. This is not a confirmed transaction.</p>
              <small className="muted">Click for details →</small>
            </Card>
          </>
        );

      case "Portfolio":
        return (
          <>
            <div className="section-heading">
              <div>
                <span className="eyebrow">YOUR INVESTMENT</span>
                <h2>Portfolio Overview</h2>
              </div>
            </div>

            <Card onClick={() => openDetail("Your investment")} style={clickableStyle}>
              <h3>Investment enquiry</h3>
              <div className="kpi-value">₹5,000</div>
              <p>Requested investment amount</p>
              <p className="muted">No executed holdings or transactions are connected to this demo portfolio yet.</p>
              <small className="muted">Click for details →</small>
            </Card>

            <div className="comparison-grid">
              <Card onClick={() => openDetail("Physical Gold")} style={clickableStyle}>
                <h3>Physical Gold</h3>
                <p>₹12,351.04 / gram</p>
                <small className="muted">Explore asset →</small>
              </Card>
              <Card onClick={() => openDetail("Gold BeES investment")} style={clickableStyle}>
                <h3>Gold BeES</h3>
                <p>₹115.23 / unit</p>
                <small className="muted">Explore asset →</small>
              </Card>
              <Card onClick={() => openDetail("Titan investment")} style={clickableStyle}>
                <h3>Titan Company</h3>
                <p>₹4,436.50 / share</p>
                <small className="muted">Explore asset →</small>
              </Card>
            </div>
          </>
        );

      case "Reports":
        return (
          <>
            <div className="section-heading">
              <div>
                <span className="eyebrow">YOUR MARKET BRIEFING</span>
                <h2>Investment Reports</h2>
              </div>
            </div>

            <Card>
              <div className="insight-icon"><FileText size={22}/></div>
              <h3>Gold Investment Intelligence Report</h3>
              <p className="muted">Your investment analysis and generated audio briefing.</p>
              <div className="report-action">
                <FileText/> Full investment report
              </div>
              <div className="report-action">
                <Volume2/> Tamil audio briefing
              </div>
            </Card>
          </>
        );

      default:
        return renderOverview();
    }
  }

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

        {navigation.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            className={`nav ${activePage === name ? "active" : ""}`}
            onClick={() => {
              setActivePage(name);
              setSelectedDetail(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              width: "100%",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              font: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <Icon size={18}/> {name}
          </button>
        ))}

        <div className="sidebar-bottom">
          <ShieldCheck size={19}/>
          <span>
            Investment intelligence<br/>
            <small>Market data may be delayed</small>
          </span>
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

        {renderPage()}

        <footer>
          AURUM INTELLIGENCE · Educational use only · Market data may be delayed.
          Historical performance does not guarantee future returns.
        </footer>
      </section>

      {selectedDetail && (
        <div
          className="detail-overlay"
          onClick={() => setSelectedDetail(null)}
          role="presentation"
        >
          <div
            className="detail-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-title"
          >
            <button
              type="button"
              className="detail-close"
              onClick={() => setSelectedDetail(null)}
              aria-label="Close details"
            >
              <X size={21}/>
            </button>

            <span className="eyebrow gold-text">AURUM INTELLIGENCE</span>
            <h2 id="detail-title">{selectedDetail.title}</h2>
            <p>{selectedDetail.description}</p>

            <ul>
              {selectedDetail.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <button
              type="button"
              className="detail-done"
              onClick={() => setSelectedDetail(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
