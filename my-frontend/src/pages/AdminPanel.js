import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

/* ─── Layout ─── */
const AdminWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f1923 0%, #1a2a3a 40%, #162420 100%);
  color: #e8ede8;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
`;

const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f1923 0%, #1a2a3a 40%, #162420 100%);
  font-family: 'Inter', system-ui, sans-serif;
`;

const LoginCard = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 3rem;
  width: 380px;
  max-width: 90vw;
  text-align: center;
  backdrop-filter: blur(20px);
  animation: ${fadeIn} 0.6s ease;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
`;

const LoginLogo = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const LoginTitle = styled.h2`
  color: #e8ede8;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 0.3rem;
  font-family: 'Inter', sans-serif;
`;

const LoginSubtitle = styled.p`
  color: #7a8a7a;
  font-size: 0.9rem;
  margin: 0 0 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  color: #e8ede8;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #39683B;
    box-shadow: 0 0 0 3px rgba(57, 104, 59, 0.2);
  }

  &::placeholder {
    color: #5a6a5a;
  }
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #39683B, #2E7D32);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  font-family: inherit;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(57, 104, 59, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMsg = styled.p`
  color: #f87171;
  font-size: 0.85rem;
  margin-top: 0.8rem;
`;

/* ─── Admin Layout ─── */
const AdminHeader = styled.header`
  padding: 1.2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(57, 104, 59, 0.2);
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const LogoIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #39683B, #2E7D32);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 3px 12px rgba(57, 104, 59, 0.3);
`;

const HeaderTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #7de87d, #39683B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const SmallButton = styled.button`
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: #a8b8a8;

  &:hover {
    background: rgba(255,255,255,0.1);
    color: #fff;
    transform: none;
  }
`;

const BackLink = styled.a`
  color: #7a8a7a;
  font-size: 0.85rem;
  text-decoration: none;
  cursor: pointer;
  &:hover { color: #7de87d; }
`;

/* ─── Sidebar + Content Layout ─── */
const AdminBody = styled.div`
  display: flex;
  min-height: calc(100vh - 70px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.nav`
  width: 240px;
  border-right: 1px solid rgba(255,255,255,0.06);
  padding: 1.5rem 0;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 1rem;
    display: flex;
    overflow-x: auto;
    gap: 0.3rem;
  }
`;

const SidebarSection = styled.div`
  margin-bottom: 1.5rem;
  @media (max-width: 768px) { margin-bottom: 0; }
`;

const SidebarLabel = styled.div`
  font-size: 0.7rem;
  color: #5a6a5a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  padding: 0 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) { display: none; }
`;

const SidebarItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.55rem 1.5rem;
  border: none;
  background: ${props => props.$active ? 'rgba(57, 104, 59, 0.2)' : 'transparent'};
  color: ${props => props.$active ? '#7de87d' : '#a8b8a8'};
  border-left: 3px solid ${props => props.$active ? '#39683B' : 'transparent'};
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255,255,255,0.04);
    color: #e8ede8;
    transform: none;
  }

  @media (max-width: 768px) {
    width: auto;
    border-left: none;
    border-bottom: 2px solid ${props => props.$active ? '#39683B' : 'transparent'};
    padding: 0.5rem 1rem;
    border-radius: 6px;
    white-space: nowrap;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 2rem 2.5rem;
  overflow-y: auto;
  animation: ${slideIn} 0.4s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const PageTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #e8ede8;
  margin: 0 0 0.3rem;
  font-family: 'Inter', sans-serif;
`;

const PageDescription = styled.p`
  color: #6a7a6a;
  font-size: 0.88rem;
  margin: 0 0 1.8rem;
`;

/* ─── Editor Components ─── */
const EditorSection = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.4s ease;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(57, 104, 59, 0.3);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SectionLabel = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #c8d8c8;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const FieldGroup = styled.div`
  margin-bottom: 1rem;
`;

const FieldLabel = styled.label`
  display: block;
  font-size: 0.78rem;
  color: #7a8a7a;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  color: #e8ede8;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #39683B;
    box-shadow: 0 0 0 3px rgba(57, 104, 59, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  color: #e8ede8;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  resize: vertical;
  min-height: 80px;
  transition: all 0.2s ease;
  box-sizing: border-box;
  line-height: 1.5;

  &:focus {
    border-color: #39683B;
    box-shadow: 0 0 0 3px rgba(57, 104, 59, 0.15);
  }
`;

const SaveBar = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(15, 25, 35, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(57, 104, 59, 0.3);
  padding: 0.8rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.3s ease;
  z-index: 50;
`;

const SaveButton = styled.button`
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #39683B, #2E7D32);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    box-shadow: 0 4px 15px rgba(57, 104, 59, 0.4);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DiscardButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: transparent;
  color: #a8b8a8;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    color: #f87171;
    border-color: rgba(248, 113, 113, 0.3);
    transform: none;
  }
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$color || '#4ade80'};
  display: inline-block;
  margin-right: 0.4rem;
`;

const StatusText = styled.span`
  font-size: 0.82rem;
  color: #7a8a7a;
`;

const SuccessToast = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(57, 104, 59, 0.95);
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  animation: ${fadeIn} 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

/* ─── Announcements ─── */
const AnnouncementCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: 3px solid ${props =>
        props.$type === 'success' ? '#4ade80' :
            props.$type === 'warning' ? '#FF8C00' :
                props.$type === 'error' ? '#f87171' : '#4a90d9'};
  border-radius: 10px;
  padding: 1rem 1.2rem;
  margin-bottom: 0.8rem;
  animation: ${fadeIn} 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const AnnouncementContent = styled.div`
  flex: 1;
`;

const AnnouncementTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #e8ede8;
  margin: 0 0 0.3rem;
`;

const AnnouncementBody = styled.p`
  font-size: 0.85rem;
  color: #7a8a7a;
  margin: 0;
  line-height: 1.4;
`;

const AnnouncementMeta = styled.div`
  font-size: 0.72rem;
  color: #5a6a5a;
  margin-top: 0.4rem;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #5a6a5a;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem;
  transition: color 0.2s ease;
  &:hover { color: #f87171; transform: none; }
`;

const TypeSelect = styled.select`
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background: rgba(255,255,255,0.06);
  color: #e8ede8;
  font-size: 0.85rem;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  
  option {
    background: #1a2a3a;
    color: #e8ede8;
  }
`;

// ============ Editable page definitions ============
const EDITABLE_PAGES = {
    home: {
        label: '🏠 Home',
        description: 'Edit homepage sections: hero slideshow, about summary, and growing process teaser.',
        sections: [
            { key: 'heroTitle', label: 'Hero Title', type: 'text', placeholder: 'MycoNurseries' },
            { key: 'heroSubtitle', label: 'Hero Subtitle', type: 'text', placeholder: 'Promoting Sustainability Through Fungiculture' },
            { key: 'aboutTitle', label: 'About Section Title', type: 'text', placeholder: 'About MycoNurseries' },
            { key: 'aboutText', label: 'About Section Text', type: 'textarea', placeholder: 'MycoNurseries is a non-profit promoting sustainability...' },
            { key: 'growingTitle', label: 'Growing Process Title', type: 'text', placeholder: 'Our Mushroom Growing Process' },
            { key: 'growingText', label: 'Growing Process Text', type: 'textarea', placeholder: 'Discover how we transform coffee grounds...' },
        ],
    },
    about: {
        label: '📖 About',
        description: 'Edit the About page content, including story, sustainability pillars, and future plans.',
        sections: [
            { key: 'pageTitle', label: 'Page Title', type: 'text', placeholder: 'About MycoNurseries' },
            { key: 'story', label: 'Our Story', type: 'textarea', placeholder: 'MycoNurseries was started by...' },
            { key: 'growth', label: 'Our Growth', type: 'textarea', placeholder: 'Over the past two years...' },
            { key: 'sustainableSubstrate', label: 'Sustainable Substrate', type: 'textarea', placeholder: 'We grow oyster mushrooms...' },
            { key: 'community', label: 'Community', type: 'textarea', placeholder: 'We have over 30 volunteers...' },
            { key: 'foodSecurity', label: 'Food Security', type: 'textarea', placeholder: 'We donate the oyster mushrooms...' },
            { key: 'futurePlans', label: 'Future Plans', type: 'textarea', placeholder: 'As we look towards the future...' },
        ],
    },
    team: {
        label: '👥 Team',
        description: 'Update team member bios, roles, and section titles.',
        sections: [
            { key: 'pageTitle', label: 'Page Title', type: 'text', placeholder: 'Our Team' },
            { key: 'introText', label: 'Introduction Text', type: 'textarea', placeholder: 'Our team is a group of passionate individuals...' },
            { key: 'coFoundersNote', label: 'Co-Founders Note', type: 'textarea', placeholder: 'Additional notes about co-founders...' },
            { key: 'researchNote', label: 'Research Team Note', type: 'textarea', placeholder: 'Additional notes about research team...' },
            { key: 'operationsNote', label: 'Operations Note', type: 'textarea', placeholder: 'Additional notes about operations...' },
        ],
    },
    shop: {
        label: '🛒 Shop',
        description: 'Edit shop descriptions and policy text.',
        sections: [
            { key: 'shopTitle', label: 'Shop Title', type: 'text', placeholder: 'Our Shop' },
            { key: 'handbookLabel', label: 'Handbook Label', type: 'text', placeholder: 'Buy Our Handbook' },
            { key: 'mushroomLabel', label: 'Mushroom Label', type: 'text', placeholder: 'Buy Our Mushrooms' },
            { key: 'returnPolicy', label: 'Return Policy', type: 'textarea', placeholder: 'All sales are final...' },
            { key: 'cancellationPolicy', label: 'Cancellation Policy', type: 'textarea', placeholder: 'Under circumstances where clients...' },
        ],
    },
    blog: {
        label: '📝 Blog',
        description: 'Edit the blog page title and description text.',
        sections: [
            { key: 'title', label: 'Blog Title', type: 'text', placeholder: 'Blog' },
            { key: 'description', label: 'Blog Description', type: 'textarea', placeholder: 'Welcome to our blog...' },
        ],
    },
    partners: {
        label: '🤝 Partners',
        description: 'Edit partner and donor descriptions.',
        sections: [
            { key: 'pageTitle', label: 'Page Title', type: 'text', placeholder: 'Our Partners and Donors' },
            { key: 'introText', label: 'Introduction', type: 'textarea', placeholder: 'Meet the organizations supporting us!' },
            { key: 'spfNote', label: 'SPF Additional Notes', type: 'textarea', placeholder: 'Extra notes about SPF partnership...' },
            { key: 'dobsonNote', label: 'Dobson Centre Notes', type: 'textarea', placeholder: 'Extra notes about Dobson Centre...' },
        ],
    },
    workshops: {
        label: '🎓 Workshops',
        description: 'Edit educational workshop titles and descriptions.',
        sections: [
            { key: 'pageTitle', label: 'Page Title', type: 'text', placeholder: 'Educational Workshops' },
            { key: 'vermicompostTitle', label: 'Vermicompost Workshop Title', type: 'text', placeholder: 'Learn to Vermicompost' },
            { key: 'vermicompostText', label: 'Vermicompost Description', type: 'textarea', placeholder: 'Curious about worms...' },
            { key: 'fungiFrenzyTitle', label: 'Fungi Frenzy Title', type: 'text', placeholder: 'Play Fungi Frenzy!' },
            { key: 'fungiFrenzyText', label: 'Fungi Frenzy Description', type: 'textarea', placeholder: 'How well can you build...' },
            { key: 'contactNote', label: 'Contact Note', type: 'textarea', placeholder: 'Interested in these workshops...' },
        ],
    },
    growingProcess: {
        label: '🌱 Growing Process',
        description: 'Edit the Growing Process page content and impact statistics.',
        sections: [
            { key: 'pageTitle', label: 'Page Title', type: 'text', placeholder: 'Our Mushroom Growing Process' },
            { key: 'mainText', label: 'Main Description', type: 'textarea', placeholder: 'MycoNurseries sources at least 40%...' },
            { key: 'impactTitle', label: 'Impact Section Title', type: 'text', placeholder: 'Our Impact' },
            { key: 'impactText', label: 'Impact Description', type: 'textarea', placeholder: 'Through growing oyster mushrooms...' },
            { key: 'lastUpdated', label: 'Last Updated Text', type: 'text', placeholder: '(Last updated September 2025)' },
        ],
    },
};

const ANNOUNCEMENT_TYPES = [
    { value: 'info', label: 'ℹ️ Info' },
    { value: 'success', label: '✅ Success' },
    { value: 'warning', label: '⚠️ Warning' },
    { value: 'error', label: '🚨 Error' },
];

function AdminPanel() {
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // Editing state
    const [activePage, setActivePage] = useState('home');
    const [activeTab, setActiveTab] = useState('pages'); // 'pages' or 'announcements'
    const [pageData, setPageData] = useState({});
    const [originalData, setOriginalData] = useState({});
    const [hasChanges, setHasChanges] = useState(false);
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState(null);

    // Announcements
    const [announcements, setAnnouncements] = useState([]);
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', body: '', type: 'info' });

    const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001';

    // Check stored auth
    useEffect(() => {
        const stored = sessionStorage.getItem('myco_admin_token');
        if (stored) {
            setToken(stored);
            setAuthenticated(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE}/api/content/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setToken(data.token);
                setAuthenticated(true);
                sessionStorage.setItem('myco_admin_token', data.token);
                setLoginError('');
            } else {
                setLoginError('Invalid password. Please try again.');
            }
        } catch {
            setLoginError('Could not connect to server. Is the backend running?');
        }
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setToken('');
        sessionStorage.removeItem('myco_admin_token');
    };

    // Fetch content
    const fetchContent = useCallback(async () => {
        try {
            const res = await fetch(`${API_BASE}/api/content/pages`);
            if (res.ok) {
                const data = await res.json();
                setPageData(data.pages || {});
                setOriginalData(data.pages || {});
                setAnnouncements(data.announcements || []);
            }
        } catch {
            // Server not available; start with empty
        }
    }, [API_BASE]);

    useEffect(() => {
        if (authenticated) fetchContent();
    }, [authenticated, fetchContent]);

    // Field change handler
    const handleFieldChange = (pageId, fieldKey, value) => {
        setPageData(prev => {
            const updated = { ...prev };
            if (!updated[pageId]) {
                updated[pageId] = { sections: {} };
            }
            if (!updated[pageId].sections) {
                updated[pageId].sections = {};
            }
            updated[pageId] = {
                ...updated[pageId],
                sections: { ...updated[pageId].sections, [fieldKey]: value },
            };
            return updated;
        });
        setHasChanges(true);
    };

    const getFieldValue = (pageId, fieldKey) => {
        return pageData[pageId]?.sections?.[fieldKey] || '';
    };

    // Save changes
    const handleSave = async () => {
        setSaving(true);
        try {
            const currentPageData = pageData[activePage];
            if (currentPageData) {
                const res = await fetch(`${API_BASE}/api/content/pages/${activePage}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ sections: currentPageData.sections }),
                });
                if (res.ok) {
                    setOriginalData({ ...pageData });
                    setHasChanges(false);
                    showToast('✓ Changes saved successfully');
                } else {
                    showToast('✕ Failed to save changes', true);
                }
            }
        } catch {
            showToast('✕ Connection error', true);
        } finally {
            setSaving(false);
        }
    };

    const handleDiscard = () => {
        setPageData({ ...originalData });
        setHasChanges(false);
    };

    // Announcements CRUD
    const createAnnouncement = async () => {
        if (!newAnnouncement.title.trim()) return;
        try {
            const res = await fetch(`${API_BASE}/api/content/announcements`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(newAnnouncement),
            });
            if (res.ok) {
                const data = await res.json();
                setAnnouncements(prev => [data.announcement, ...prev]);
                setNewAnnouncement({ title: '', body: '', type: 'info' });
                showToast('✓ Announcement created');
            }
        } catch {
            showToast('✕ Failed to create announcement', true);
        }
    };

    const deleteAnnouncement = async (id) => {
        try {
            const res = await fetch(`${API_BASE}/api/content/announcements/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` },
            });
            if (res.ok) {
                setAnnouncements(prev => prev.filter(a => a.id !== id));
                showToast('✓ Announcement deleted');
            }
        } catch {
            showToast('✕ Failed to delete', true);
        }
    };

    const showToast = (message, isError = false) => {
        setToast({ message, isError });
        setTimeout(() => setToast(null), 3000);
    };

    // ─── Login Screen ───
    if (!authenticated) {
        return (
            <LoginWrapper>
                <LoginCard>
                    <LoginLogo>🍄</LoginLogo>
                    <LoginTitle>Admin Panel</LoginTitle>
                    <LoginSubtitle>MycoNurseries Content Manager</LoginSubtitle>
                    <form onSubmit={handleLogin}>
                        <Input
                            type="password"
                            placeholder="Enter admin password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                        />
                        <PrimaryButton type="submit">Sign In</PrimaryButton>
                    </form>
                    {loginError && <ErrorMsg>{loginError}</ErrorMsg>}
                    <p style={{ fontSize: '0.75rem', color: '#5a6a5a', marginTop: '1.5rem' }}>
                        Contact your administrator for access credentials.
                    </p>
                </LoginCard>
            </LoginWrapper>
        );
    }

    // ─── Admin Dashboard ───
    const currentPageDef = EDITABLE_PAGES[activePage];

    return (
        <AdminWrapper>
            {toast && (
                <SuccessToast style={toast.isError ? { background: 'rgba(248, 113, 113, 0.95)' } : {}}>
                    {toast.message}
                </SuccessToast>
            )}

            <AdminHeader>
                <HeaderLeft>
                    <LogoIcon>🍄</LogoIcon>
                    <HeaderTitle>Content Manager</HeaderTitle>
                </HeaderLeft>
                <HeaderActions>
                    <BackLink href="#/">← Back to site</BackLink>
                    <BackLink href="#/analytics">📊 Analytics</BackLink>
                    <SmallButton onClick={handleLogout}>Sign Out</SmallButton>
                </HeaderActions>
            </AdminHeader>

            <AdminBody>
                <Sidebar>
                    <SidebarSection>
                        <SidebarLabel>Content</SidebarLabel>
                        <SidebarItem
                            $active={activeTab === 'pages'}
                            onClick={() => setActiveTab('pages')}
                        >
                            📄 Pages
                        </SidebarItem>
                        <SidebarItem
                            $active={activeTab === 'announcements'}
                            onClick={() => setActiveTab('announcements')}
                        >
                            📢 Announcements
                        </SidebarItem>
                    </SidebarSection>

                    {activeTab === 'pages' && (
                        <SidebarSection>
                            <SidebarLabel>Edit Page</SidebarLabel>
                            {Object.entries(EDITABLE_PAGES).map(([key, page]) => (
                                <SidebarItem
                                    key={key}
                                    $active={activePage === key}
                                    onClick={() => setActivePage(key)}
                                >
                                    {page.label}
                                </SidebarItem>
                            ))}
                        </SidebarSection>
                    )}
                </Sidebar>

                <ContentArea key={activeTab === 'pages' ? activePage : 'announcements'}>
                    {activeTab === 'pages' ? (
                        <>
                            <PageTitle>{currentPageDef?.label}</PageTitle>
                            <PageDescription>{currentPageDef?.description}</PageDescription>

                            {currentPageDef?.sections.map((field) => (
                                <EditorSection key={field.key}>
                                    <FieldGroup>
                                        <FieldLabel>{field.label}</FieldLabel>
                                        {field.type === 'textarea' ? (
                                            <TextArea
                                                value={getFieldValue(activePage, field.key)}
                                                onChange={(e) => handleFieldChange(activePage, field.key, e.target.value)}
                                                placeholder={field.placeholder}
                                                rows={4}
                                            />
                                        ) : (
                                            <TextInput
                                                value={getFieldValue(activePage, field.key)}
                                                onChange={(e) => handleFieldChange(activePage, field.key, e.target.value)}
                                                placeholder={field.placeholder}
                                            />
                                        )}
                                    </FieldGroup>
                                </EditorSection>
                            ))}
                        </>
                    ) : (
                        <>
                            <PageTitle>📢 Announcements</PageTitle>
                            <PageDescription>Create and manage site-wide announcements. Active announcements can be displayed on the homepage.</PageDescription>

                            <EditorSection>
                                <SectionHeader>
                                    <SectionLabel>New Announcement</SectionLabel>
                                </SectionHeader>
                                <FieldGroup>
                                    <FieldLabel>Title</FieldLabel>
                                    <TextInput
                                        value={newAnnouncement.title}
                                        onChange={(e) => setNewAnnouncement(prev => ({ ...prev, title: e.target.value }))}
                                        placeholder="Announcement title..."
                                    />
                                </FieldGroup>
                                <FieldGroup>
                                    <FieldLabel>Body</FieldLabel>
                                    <TextArea
                                        value={newAnnouncement.body}
                                        onChange={(e) => setNewAnnouncement(prev => ({ ...prev, body: e.target.value }))}
                                        placeholder="Announcement message..."
                                        rows={3}
                                    />
                                </FieldGroup>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <TypeSelect
                                        value={newAnnouncement.type}
                                        onChange={(e) => setNewAnnouncement(prev => ({ ...prev, type: e.target.value }))}
                                    >
                                        {ANNOUNCEMENT_TYPES.map(t => (
                                            <option key={t.value} value={t.value}>{t.label}</option>
                                        ))}
                                    </TypeSelect>
                                    <SaveButton onClick={createAnnouncement} disabled={!newAnnouncement.title.trim()}>
                                        Create Announcement
                                    </SaveButton>
                                </div>
                            </EditorSection>

                            <SectionLabel style={{ margin: '1.5rem 0 1rem', color: '#7a8a7a' }}>
                                Existing Announcements ({announcements.length})
                            </SectionLabel>

                            {announcements.length === 0 ? (
                                <EditorSection>
                                    <div style={{ textAlign: 'center', padding: '2rem', color: '#5a6a5a' }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📭</div>
                                        No announcements yet. Create one above!
                                    </div>
                                </EditorSection>
                            ) : (
                                announcements.map(ann => (
                                    <AnnouncementCard key={ann.id} $type={ann.type}>
                                        <AnnouncementContent>
                                            <AnnouncementTitle>{ann.title}</AnnouncementTitle>
                                            <AnnouncementBody>{ann.body}</AnnouncementBody>
                                            <AnnouncementMeta>
                                                {ANNOUNCEMENT_TYPES.find(t => t.value === ann.type)?.label || 'Info'} · {new Date(ann.createdAt).toLocaleDateString()}
                                            </AnnouncementMeta>
                                        </AnnouncementContent>
                                        <DeleteButton onClick={() => deleteAnnouncement(ann.id)} title="Delete">
                                            ✕
                                        </DeleteButton>
                                    </AnnouncementCard>
                                ))
                            )}
                        </>
                    )}
                </ContentArea>
            </AdminBody>

            {hasChanges && activeTab === 'pages' && (
                <SaveBar>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StatusDot $color="#FF8C00" />
                        <StatusText>Unsaved changes to {currentPageDef?.label}</StatusText>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <DiscardButton onClick={handleDiscard}>Discard</DiscardButton>
                        <SaveButton onClick={handleSave} disabled={saving}>
                            {saving ? 'Saving...' : 'Save Changes'}
                        </SaveButton>
                    </div>
                </SaveBar>
            )}
        </AdminWrapper>
    );
}

export default AdminPanel;
