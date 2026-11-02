import React, { useState, useMemo } from 'react';

/**
 * DeSun FinFlow — React Component (Next.js / Vite Ready)
 * Tương ứng với bản Prototype HTML/CSS/JS trong cùng thư mục.
 */
export default function FinFlowApp() {
  const [activeWorkspace, setActiveWorkspace] = useState('ws_personal');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [aiCommand, setAiCommand] = useState('');

  const workspaces = [
    { id: 'ws_personal', name: 'Sổ Cá Nhân Của Tôi', icon: '👤', members: 1 },
    { id: 'ws_family', name: 'Quỹ Chung Gia Đình', icon: '🏠', members: 3 },
    { id: 'ws_trip', name: 'Team Du Lịch Đà Lạt', icon: '🌲', members: 4 }
  ];

  const [transactions, setTransactions] = useState([
    { id: 1, ws: 'ws_personal', type: 'INCOME', title: 'Lương tháng 10 + Phụ cấp', category: 'Lương & Phụ cấp', icon: '💰', wallet: 'Techcombank', amount: 32000000, date: '20/10/2026', isSplit: false },
    { id: 2, ws: 'ws_personal', type: 'EXPENSE', title: 'Phở bò & Cafe muối', category: 'Ăn uống', icon: '🍜', wallet: 'Ví MoMo', amount: 65000, date: '20/10/2026', isSplit: false },
    { id: 3, ws: 'ws_personal', type: 'EXPENSE', title: 'Lẩu nướng cuối tuần (Ứng trước)', category: 'Ăn uống', icon: '🍲', wallet: 'Techcombank', amount: 1200000, date: '17/10/2026', isSplit: true },
    { id: 4, ws: 'ws_family', type: 'EXPENSE', title: 'Siêu thị WinMart cuối tuần', category: 'Đi chợ', icon: '🛒', wallet: 'Quỹ Sinh Hoạt', amount: 2450000, date: '19/10/2026', isSplit: true }
  ]);

  const filteredTx = useMemo(
    () => transactions.filter(t => t.ws === activeWorkspace),
    [transactions, activeWorkspace]
  );

  const formatVND = (n) => new Intl.NumberFormat('vi-VN').format(n) + ' ₫';

  const handleQuickAddAI = (e) => {
    e.preventDefault();
    if (!aiCommand.trim()) return;
    const matchK = aiCommand.toLowerCase().match(/(\d+)\s*k/);
    const amount = matchK ? parseInt(matchK[1], 10) * 1000 : 50000;
    setTransactions(prev => [
      {
        id: Date.now(),
        ws: activeWorkspace,
        type: 'EXPENSE',
        title: aiCommand,
        category: 'AI Phân loại',
        icon: '✨',
        wallet: 'Ví MoMo',
        amount,
        date: 'Hôm nay',
        isSplit: activeWorkspace !== 'ws_personal'
      },
      ...prev
    ]);
    setAiCommand('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-lg">₫</div>
            <div>
              <h1 className="font-bold text-lg">DeSun FinFlow (React Component)</h1>
              <p className="text-xs text-slate-400">Cá nhân & Chia tiền nhóm</p>
            </div>
          </div>

          <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-white/10">
            {workspaces.map(w => (
              <button
                key={w.id}
                onClick={() => setActiveWorkspace(w.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeWorkspace === w.id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {w.icon} {w.name} ({w.members})
              </button>
            ))}
          </div>
        </header>

        {/* AI Smart Bar */}
        <form onSubmit={handleQuickAddAI} className="flex gap-2 p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
          <input
            value={aiCommand}
            onChange={(e) => setAiCommand(e.target.value)}
            placeholder="Nhập nhanh AI: 'Cafe muối 45k momo'..."
            className="flex-1 bg-slate-900 px-4 py-2 rounded-xl text-sm border border-white/10 focus:outline-none focus:border-indigo-500"
          />
          <button type="submit" className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold">
            ⚡ Ghi Sổ
          </button>
        </form>

        {/* Transactions List */}
        <section className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 space-y-3">
          <h2 className="font-bold text-sm uppercase tracking-wider text-slate-400">Danh sách giao dịch</h2>
          {filteredTx.map(tx => (
            <div key={tx.id} className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tx.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{tx.title}</p>
                  <p className="text-xs text-slate-400">{tx.category} • {tx.wallet} • {tx.date}</p>
                </div>
              </div>
              <span className={`font-mono font-bold text-sm ${tx.type === 'INCOME' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {tx.type === 'INCOME' ? '+' : '-'}{formatVND(tx.amount)}
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
