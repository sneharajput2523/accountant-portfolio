import {
  Award,
  Calculator,
  FileSpreadsheet,
  TrendingUp,
  Percent,
  BookOpen,
  Briefcase,
  Users,
  Zap,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "Tally Prime",
    image_link: "/tools/Tally.png",
    icon: Calculator,
    description:
      "Advanced ledger entry, GST billing, and inventory management",
    color: "text-blue-400",
  },
  {
    name: "MS Excel / Google Sheets",
    image_link: "/tools/Excel.png",
    icon: FileSpreadsheet,
    description:
      "VLOOKUP, Pivot tables, financial modeling, and data formatting",
    color: "text-green-400",
  },
];

export const specializations = [
  {
    title: "GST & Tax Compliance",
    skills: [
      "GSTR-1 & 3B Filing",
      "ITC Reconciliation",
      "Income Tax Return",
      "GST Portal Navigation",
    ],
    icon: "📑",
    description:
      "Filing accurate monthly and quarterly returns, maximizing Input Tax Credit.",
  },
  {
    title: "Corporate Bookkeeping",
    skills: [
      "Ledger Management",
      "Bank Reconciliation",
      "Accounts Payable/Receivable",
      "Cloud Accounting",
    ],
    icon: "💼",
    description:
      "Maintaining clean ledgers and synchronizing multiple bank accounts for clear liquidity views.",
  },
  {
    title: "Financial Auditing",
    skills: [
      "Vouching & Verification",
      "Discrepancy Resolution",
      "Internal Controls",
      "Compliance Audits",
    ],
    icon: "🔍",
    description:
      "Reviewing transactions systematically to identify errors and ensure policy compliance.",
  },
  {
    title: "Payroll Management",
    skills: [
      "Salary Calculations",
      "PF & ESIC Compliance",
      "TDS Deductions",
      "Automated Processing",
    ],
    icon: "💳",
    description:
      "Managing end-to-end payroll for teams, ensuring timely disbursement and statutory compliance.",
  },
  {
    title: "Financial Statements",
    skills: [
      "Balance Sheets",
      "Profit & Loss Statements",
      "Cash Flow Projections",
      "MIS Reporting",
    ],
    icon: "📊",
    description:
      "Drafting and presenting quarterly/annual financial statements for business leaders.",
  },
  {
    title: "Advanced Excel Modeling",
    skills: [
      "Pivot Tables & VLOOKUP",
      "Data Automation",
      "Financial Analysis Charts",
      "Formulas & Macros",
    ],
    icon: "📈",
    description:
      "Creating automated financial templates to speed up monthly closures and auditing workflows.",
  },
];

export const achievements = [
  {
    title: "Happy Clients",
    description:
      "Built trust with firm owners through accurate reporting and zero filing delays",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "1.5 Years Experience",
    description:
      "Professional accounting experience with constant learning and tech integration",
    icon: Briefcase,
    color: "text-blue-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Onboarding & Audit",
    description:
      "Assessing current books, reviewing past filings, and identifying immediate areas of concern",
  },
  {
    step: "02",
    title: "Document Collection",
    description:
      "Gathering invoices, bank statements, salary sheets, and tax documents securely",
  },
  {
    step: "03",
    title: "Tally Prime Ledger Update",
    description:
      "Recording transactions in Tally Prime with correct tax categorization and ledger mapping",
  },
  {
    step: "04",
    title: "Reconciliation & Check",
    description:
      "Reconciling bank accounts, credit cards, and verifying vendor ledgers for absolute accuracy",
  },
  {
    step: "05",
    title: "Excel Reporting & Drafting",
    description:
      "Preparing detailed P&L sheets, Balance Sheets, and custom MIS reports using MS Excel for management review",
  },
  {
    step: "06",
    title: "Compliance & Happy Delivery",
    description:
      "Filing GST/Income tax returns on portals timely, ensuring zero delays and maintaining happy client relations",
  },
];
