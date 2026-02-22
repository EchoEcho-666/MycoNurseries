import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const DashboardWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f1923 0%, #1a2a3a 40%, #162420 100%);
  color: #e8ede8;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
`;

const DashboardHeader = styled.header`
  padding: 2rem 3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid rgba(57, 104, 59, 0.3);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #39683B, #2E7D32);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 15px rgba(57, 104, 59, 0.4);
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #7de87d, #39683B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
`;

const HeaderSubtitle = styled.p`
  font-size: 0.85rem;
  color: #7a8a7a;
  margin: 0;
`;

const PeriodSelector = styled.div`
  display: flex;
  gap: 0.3rem;
  background: rgba(255,255,255,0.05);
  padding: 4px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.08);
`;

const PeriodButton = styled.button`
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.25s ease;
  background: ${props => props.$active ? 'linear-gradient(135deg, #39683B, #2E7D32)' : 'transparent'};
  color: ${props => props.$active ? '#fff' : '#7a8a7a'};
  box-shadow: ${props => props.$active ? '0 2px 10px rgba(57,104,59,0.4)' : 'none'};

  &:hover {
    color: #fff;
    background: ${props => props.$active ? 'linear-gradient(135deg, #39683B, #2E7D32)' : 'rgba(255,255,255,0.08)'};
    transform: none;
  }
`;

const MainContent = styled.main`
  padding: 1.5rem 3rem 3rem;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.2rem 1.5rem;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease ${props => props.$delay || '0s'} both;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(57, 104, 59, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }
`;

const MetricLabel = styled.div`
  font-size: 0.78rem;
  color: #7a8a7a;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #e8ede8, #7de87d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

const MetricSuffix = styled.span`
  font-size: 0.9rem;
  color: #7a8a7a;
  margin-left: 0.3rem;
  font-weight: 400;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.5rem;
  animation: ${fadeIn} 0.5s ease ${props => props.$delay || '0s'} both;
  backdrop-filter: blur(10px);
`;

const ChartTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #c8d8c8;
  margin: 0 0 1.2rem 0;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ChartTitleDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color || '#39683B'};
  display: inline-block;
`;

// Pure CSS bar chart
const BarChart = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 160px;
  padding: 0 0.5rem;
`;

const BarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`;

const Bar = styled.div`
  width: 100%;
  max-width: 40px;
  height: ${props => props.$height || '0%'};
  min-height: 3px;
  background: linear-gradient(180deg, #7de87d, #39683B);
  border-radius: 4px 4px 0 0;
  transition: height 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #a0f0a0, #4a9a4c);
    &::after {
      opacity: 1;
      transform: translateY(-8px);
    }
  }

  &::after {
    content: '${props => props.$tooltip || ''}';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    font-size: 0.7rem;
    color: #fff;
    background: rgba(0,0,0,0.8);
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.2s ease;
    pointer-events: none;
  }
`;

const BarLabel = styled.div`
  font-size: 0.65rem;
  color: #5a6a5a;
  margin-top: 6px;
  text-align: center;
`;

// Donut chart with CSS
const DonutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DonutSVG = styled.svg`
  width: 140px;
  height: 140px;
  transform: rotate(-90deg);
`;

const DonutLegend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #a8b8a8;
`;

const LegendDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.color};
  flex-shrink: 0;
`;

const LegendCount = styled.span`
  margin-left: auto;
  color: #e8ede8;
  font-weight: 600;
`;

// Table styles
const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TableWrapper = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.5rem;
  animation: ${fadeIn} 0.5s ease ${props => props.$delay || '0s'} both;
  overflow: hidden;
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);

  &:last-child { border-bottom: none; }
`;

const TableRank = styled.span`
  font-size: 0.75rem;
  color: #5a6a5a;
  font-weight: 600;
  min-width: 22px;
`;

const TableName = styled.span`
  flex: 1;
  font-size: 0.88rem;
  color: #c8d8c8;
  margin: 0 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableCount = styled.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: #7de87d;
`;

const ProgressBarBg = styled.div`
  width: 80px;
  height: 4px;
  background: rgba(255,255,255,0.06);
  border-radius: 2px;
  overflow: hidden;
  margin-left: 0.5rem;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  width: ${props => props.$width || '0%'};
  background: linear-gradient(90deg, #39683B, #7de87d);
  border-radius: 2px;
  transition: width 0.8s ease;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #5a6a5a;
  font-size: 0.95rem;
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  flex-direction: column;
  gap: 1rem;
`;

const LoadingDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #39683B;
  animation: ${pulse} 1.2s ease infinite;
  animation-delay: ${props => props.$delay || '0s'};
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const RefreshButton = styled.button`
  background: rgba(57, 104, 59, 0.2);
  border: 1px solid rgba(57, 104, 59, 0.4);
  color: #7de87d;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  
  &:hover {
    background: rgba(57, 104, 59, 0.3);
    transform: none;
  }
`;

const LiveDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  display: inline-block;
  animation: ${pulse} 2s ease infinite;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.5);
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #7a8a7a;
  font-size: 0.85rem;
  text-decoration: none;
  cursor: pointer;

  &:hover { color: #7de87d; }
`;

const DEVICE_COLORS = ['#39683B', '#FF8C00', '#4a90d9', '#d94a6d'];

function AnalyticsDashboard() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('7d');
    const [error, setError] = useState(null);

    const fetchDashboard = useCallback(async () => {
        setLoading(true);
        try {
            const apiBase = process.env.REACT_APP_API_URL || 'http://localhost:3001';
            const res = await fetch(`${apiBase}/api/analytics/dashboard?period=${period}`);
            if (!res.ok) throw new Error('Failed to fetch');
            const json = await res.json();
            setData(json);
            setError(null);
        } catch (err) {
            setError('Could not connect to analytics server. Make sure the backend is running.');
            // Use mock data for demo
            setData(getMockData(period));
        } finally {
            setLoading(false);
        }
    }, [period]);

    useEffect(() => {
        fetchDashboard();
        const interval = setInterval(fetchDashboard, 30000);
        return () => clearInterval(interval);
    }, [fetchDashboard]);

    if (loading && !data) {
        return (
            <DashboardWrapper>
                <LoadingWrapper>
                    <LoadingDots>
                        <LoadingDot $delay="0s" />
                        <LoadingDot $delay="0.2s" />
                        <LoadingDot $delay="0.4s" />
                    </LoadingDots>
                    <p style={{ color: '#5a6a5a', fontSize: '0.9rem' }}>Loading analytics...</p>
                </LoadingWrapper>
            </DashboardWrapper>
        );
    }

    const summary = data?.summary || {};
    const timeSeries = data?.timeSeries || [];
    const maxViews = Math.max(...timeSeries.map(d => d.views), 1);

    // Calculate donut segments
    const devices = data?.deviceBreakdown || [];
    const totalDeviceEvents = devices.reduce((s, d) => s + d.count, 0) || 1;
    let cumulativePercent = 0;

    return (
        <DashboardWrapper>
            <DashboardHeader>
                <HeaderLeft>
                    <LogoIcon>🍄</LogoIcon>
                    <div>
                        <HeaderTitle>Analytics Dashboard</HeaderTitle>
                        <HeaderSubtitle>MycoNurseries · Behavioural Tracking</HeaderSubtitle>
                    </div>
                </HeaderLeft>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <BackLink href="#/">← Back to site</BackLink>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <LiveDot /> <span style={{ fontSize: '0.8rem', color: '#4ade80' }}>Live</span>
                    </div>
                    <RefreshButton onClick={fetchDashboard}>↻ Refresh</RefreshButton>
                    <PeriodSelector>
                        {['24h', '7d', '30d', '90d'].map(p => (
                            <PeriodButton
                                key={p}
                                $active={period === p}
                                onClick={() => setPeriod(p)}
                            >
                                {p}
                            </PeriodButton>
                        ))}
                    </PeriodSelector>
                </div>
            </DashboardHeader>

            {error && (
                <div style={{ padding: '0.5rem 3rem', color: '#FF8C00', fontSize: '0.85rem' }}>
                    ⚠ {error} (Showing demo data)
                </div>
            )}

            <MainContent>
                {/* KPI Metrics Cards */}
                <MetricsGrid>
                    <MetricCard $delay="0.05s">
                        <MetricLabel>Page Views</MetricLabel>
                        <MetricValue>
                            {formatNumber(summary.totalPageViews || 0)}
                        </MetricValue>
                    </MetricCard>
                    <MetricCard $delay="0.1s">
                        <MetricLabel>Unique Visitors</MetricLabel>
                        <MetricValue>
                            {formatNumber(summary.uniqueVisitors || 0)}
                        </MetricValue>
                    </MetricCard>
                    <MetricCard $delay="0.15s">
                        <MetricLabel>Total Clicks</MetricLabel>
                        <MetricValue>
                            {formatNumber(summary.totalClicks || 0)}
                        </MetricValue>
                    </MetricCard>
                    <MetricCard $delay="0.2s">
                        <MetricLabel>Avg. Session</MetricLabel>
                        <MetricValue>
                            {summary.avgSessionDuration || 0}<MetricSuffix>sec</MetricSuffix>
                        </MetricValue>
                    </MetricCard>
                    <MetricCard $delay="0.25s">
                        <MetricLabel>Avg. Scroll Depth</MetricLabel>
                        <MetricValue>
                            {summary.avgScrollDepth || 0}<MetricSuffix>%</MetricSuffix>
                        </MetricValue>
                    </MetricCard>
                    <MetricCard $delay="0.3s">
                        <MetricLabel>Bounce Rate</MetricLabel>
                        <MetricValue>
                            {summary.bounceRate || 0}<MetricSuffix>%</MetricSuffix>
                        </MetricValue>
                    </MetricCard>
                </MetricsGrid>

                {/* Charts row */}
                <ChartsGrid>
                    <ChartCard $delay="0.35s">
                        <ChartTitle>
                            <ChartTitleDot color="#7de87d" />
                            Page Views Over Time
                        </ChartTitle>
                        {timeSeries.length > 0 ? (
                            <BarChart>
                                {timeSeries.map((d, i) => (
                                    <BarWrapper key={d.date}>
                                        <Bar
                                            $height={`${(d.views / maxViews) * 100}%`}
                                            $tooltip={`${d.views} views`}
                                        />
                                        <BarLabel>{d.date.slice(5)}</BarLabel>
                                    </BarWrapper>
                                ))}
                            </BarChart>
                        ) : (
                            <EmptyState>
                                <EmptyIcon>📊</EmptyIcon>
                                No data for this period yet
                            </EmptyState>
                        )}
                    </ChartCard>

                    <ChartCard $delay="0.4s">
                        <ChartTitle>
                            <ChartTitleDot color="#FF8C00" />
                            Device Breakdown
                        </ChartTitle>
                        {devices.length > 0 ? (
                            <DonutContainer>
                                <DonutSVG viewBox="0 0 36 36">
                                    {devices.map((d, i) => {
                                        const percent = (d.count / totalDeviceEvents) * 100;
                                        const dashArray = `${percent} ${100 - percent}`;
                                        const dashOffset = 100 - cumulativePercent;
                                        cumulativePercent += percent;
                                        return (
                                            <circle
                                                key={d.device}
                                                cx="18" cy="18" r="15.915"
                                                fill="transparent"
                                                stroke={DEVICE_COLORS[i % DEVICE_COLORS.length]}
                                                strokeWidth="3"
                                                strokeDasharray={dashArray}
                                                strokeDashoffset={dashOffset}
                                                strokeLinecap="round"
                                            />
                                        );
                                    })}
                                    <text
                                        x="18" y="18"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fill="#e8ede8"
                                        fontSize="5"
                                        fontWeight="700"
                                        style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
                                    >
                                        {totalDeviceEvents}
                                    </text>
                                </DonutSVG>
                                <DonutLegend>
                                    {devices.map((d, i) => (
                                        <LegendItem key={d.device}>
                                            <LegendDot color={DEVICE_COLORS[i % DEVICE_COLORS.length]} />
                                            {d.device.charAt(0).toUpperCase() + d.device.slice(1)}
                                            <LegendCount>{d.count}</LegendCount>
                                        </LegendItem>
                                    ))}
                                </DonutLegend>
                            </DonutContainer>
                        ) : (
                            <EmptyState>
                                <EmptyIcon>📱</EmptyIcon>
                                No device data yet
                            </EmptyState>
                        )}
                    </ChartCard>
                </ChartsGrid>

                {/* Tables row */}
                <TableGrid>
                    <TableWrapper $delay="0.45s">
                        <ChartTitle>
                            <ChartTitleDot color="#7de87d" />
                            Top Pages
                        </ChartTitle>
                        {(data?.topPages || []).length > 0 ? (
                            data.topPages.map((p, i) => {
                                const maxCount = data.topPages[0]?.count || 1;
                                return (
                                    <TableRow key={p.page}>
                                        <TableRank>{i + 1}</TableRank>
                                        <TableName>{p.page || '/'}</TableName>
                                        <TableCount>{p.count}</TableCount>
                                        <ProgressBarBg>
                                            <ProgressBarFill $width={`${(p.count / maxCount) * 100}%`} />
                                        </ProgressBarBg>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <EmptyState>No page data yet</EmptyState>
                        )}
                    </TableWrapper>

                    <TableWrapper $delay="0.5s">
                        <ChartTitle>
                            <ChartTitleDot color="#FF8C00" />
                            Top Interactions
                        </ChartTitle>
                        {(data?.topClicks || []).length > 0 ? (
                            data.topClicks.map((c, i) => {
                                const maxCount = data.topClicks[0]?.count || 1;
                                return (
                                    <TableRow key={c.label}>
                                        <TableRank>{i + 1}</TableRank>
                                        <TableName>{c.label}</TableName>
                                        <TableCount>{c.count}</TableCount>
                                        <ProgressBarBg>
                                            <ProgressBarFill $width={`${(c.count / maxCount) * 100}%`} />
                                        </ProgressBarBg>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <EmptyState>No interaction data yet</EmptyState>
                        )}
                    </TableWrapper>

                    <TableWrapper $delay="0.55s">
                        <ChartTitle>
                            <ChartTitleDot color="#4a90d9" />
                            Traffic Sources
                        </ChartTitle>
                        {(data?.referrers || []).length > 0 ? (
                            data.referrers.map((r, i) => {
                                const maxCount = data.referrers[0]?.count || 1;
                                return (
                                    <TableRow key={r.source}>
                                        <TableRank>{i + 1}</TableRank>
                                        <TableName>{r.source}</TableName>
                                        <TableCount>{r.count}</TableCount>
                                        <ProgressBarBg>
                                            <ProgressBarFill $width={`${(r.count / maxCount) * 100}%`} />
                                        </ProgressBarBg>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <EmptyState>No referrer data yet</EmptyState>
                        )}
                    </TableWrapper>
                </TableGrid>
            </MainContent>
        </DashboardWrapper>
    );
}

function formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
}

function getMockData(period) {
    const days = period === '24h' ? 1 : period === '7d' ? 7 : period === '30d' ? 30 : 90;
    const timeSeries = [];
    for (let i = days; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        timeSeries.push({
            date: d.toISOString().split('T')[0],
            views: Math.floor(Math.random() * 80) + 10,
            uniqueVisitors: Math.floor(Math.random() * 30) + 5,
        });
    }

    return {
        period,
        summary: {
            totalPageViews: timeSeries.reduce((s, d) => s + d.views, 0),
            uniqueVisitors: Math.floor(Math.random() * 200) + 50,
            totalClicks: Math.floor(Math.random() * 400) + 80,
            avgSessionDuration: Math.floor(Math.random() * 180) + 30,
            avgScrollDepth: Math.floor(Math.random() * 60) + 20,
            bounceRate: Math.floor(Math.random() * 40) + 20,
            totalEvents: Math.floor(Math.random() * 1000) + 200,
        },
        topPages: [
            { page: '/', count: 120 },
            { page: '/about-myconurseries', count: 85 },
            { page: '/shop', count: 67 },
            { page: '/team', count: 54 },
            { page: '/growing-process', count: 42 },
            { page: '/blog', count: 38 },
            { page: '/cta', count: 25 },
            { page: '/our-partners', count: 18 },
        ],
        topClicks: [
            { label: 'Shop', count: 89 },
            { label: 'About MycoNurseries', count: 72 },
            { label: 'Get Involved', count: 58 },
            { label: 'Blog', count: 45 },
            { label: 'Learn more about us', count: 34 },
            { label: 'Instagram', count: 28 },
        ],
        deviceBreakdown: [
            { device: 'desktop', count: 340 },
            { device: 'mobile', count: 210 },
            { device: 'tablet', count: 45 },
        ],
        referrers: [
            { source: 'Direct', count: 220 },
            { source: 'instagram.com', count: 85 },
            { source: 'google.com', count: 60 },
            { source: 'linkedin.com', count: 32 },
            { source: 'facebook.com', count: 18 },
        ],
        timeSeries,
    };
}

export default AnalyticsDashboard;
