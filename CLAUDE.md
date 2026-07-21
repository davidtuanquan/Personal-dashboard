<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Focus — Outreach Dashboard</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root{
  --bg: #FAF8F3;
  --card: #FFFFFF;
  --ink: #1F2A24;
  --ink-soft: #5B6B61;
  --line: #E7E1D6;
  --sage: #6B8F71;
  --sage-dark: #4E6E54;
  --sage-tint: #EAF1EB;
  --gold: #C9982F;
  --gold-tint: #FBF1DD;
  --blue: #6C87A1;
  --blue-tint: #EAF0F5;
  --coral: #C1685A;
  --coral-tint: #F7E9E6;
  --radius: 14px;
  --shadow: 0 1px 2px rgba(31,42,36,0.04), 0 6px 20px rgba(31,42,36,0.05);
}

*{ box-sizing: border-box; }

body{
  margin:0;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  padding: 40px 24px 64px;
  min-height: 100vh;
}

.wrap{ max-width: 920px; margin: 0 auto; }

/* HEADER */
.header{
  display:flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 28px;
  gap: 16px;
  flex-wrap: wrap;
}
.eyebrow{
  font-family:'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--sage-dark);
  margin: 0 0 6px;
}
.header h1{
  font-family:'Fraunces', serif;
  font-weight: 500;
  font-size: 34px;
  margin: 0;
  line-height: 1.15;
}
.date-block{ text-align:right; }
.date-block .day{
  font-family:'Fraunces', serif;
  font-size: 20px;
  margin:0;
}
.date-block .sub{
  margin: 2px 0 0;
  font-size: 13px;
  color: var(--ink-soft);
}

/* HERO — ONE THING */
.hero{
  background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%);
  border-radius: var(--radius);
  padding: 26px 28px;
  color: #fff;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.hero::after{
  content:"";
  position:absolute; right:-40px; top:-40px;
  width:160px; height:160px;
  border-radius: 50%;
  background: rgba(255,255,255,0.07);
}
.hero-label{
  font-family:'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 10px;
}
.hero input{
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-family: 'Fraunces', serif;
  font-size: 24px;
  font-weight: 500;
  padding: 0;
}
.hero input::placeholder{ color: rgba(255,255,255,0.65); }

/* KPI ROW */
.kpi-row{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 20px;
}
.kpi-card{
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--line);
  padding: 18px 18px 16px;
  box-shadow: var(--shadow);
}
.kpi-top{
  display:flex; justify-content: space-between; align-items:center;
  margin-bottom: 10px;
}
.kpi-title{
  font-size: 12.5px;
  color: var(--ink-soft);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.kpi-controls{ display:flex; gap:4px; }
.kpi-btn{
  width: 22px; height: 22px;
  border-radius: 6px;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display:flex; align-items:center; justify-content:center;
}
.kpi-btn:hover{ background: var(--sage-tint); border-color: var(--sage); }
.kpi-value{
  font-family: 'IBM Plex Mono', monospace;
  font-size: 30px;
  font-weight: 500;
}
.kpi-goal{
  font-size: 12px;
  color: var(--ink-soft);
  margin-top: 4px;
}
.kpi-goal input{
  width: 34px;
  border: none;
  border-bottom: 1px dashed var(--line);
  background: transparent;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--ink-soft);
  text-align:center;
}

/* TWO COLUMN */
.grid-2{
  display:grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 16px;
  margin-bottom: 18px;
}
@media (max-width: 760px){
  .grid-2{ grid-template-columns: 1fr; }
  .kpi-row{ grid-template-columns: 1fr; }
  .header{ flex-direction: column; align-items: flex-start; }
  .date-block{ text-align:left; }
}

.panel{
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px 20px 18px;
  box-shadow: var(--shadow);
}
.panel h2{
  font-family:'Fraunces', serif;
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 14px;
  display:flex;
  align-items:center;
  gap: 8px;
}
.panel h2 .count{
  font-family:'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--ink-soft);
  font-weight: 400;
}

/* TASK LIST */
.task{
  display:flex;
  align-items: flex-start;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid var(--line);
}
.task:last-of-type{ border-bottom: none; }
.task input[type="checkbox"]{
  appearance: none;
  width: 18px; height: 18px;
  border-radius: 5px;
  border: 1.5px solid var(--sage);
  margin-top: 2px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  background: #fff;
}
.task input[type="checkbox"]:checked{
  background: var(--sage);
}
.task input[type="checkbox"]:checked::after{
  content: "✓";
  position: absolute;
  color: #fff;
  font-size: 12px;
  left: 3px;
  top: -1px;
}
.task .task-text{
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14.5px;
  font-family: 'Inter', sans-serif;
  color: var(--ink);
  padding: 0;
}
.task.done .task-text{
  color: var(--ink-soft);
  text-decoration: line-through;
}
.task .remove{
  border: none;
  background: none;
  color: var(--ink-soft);
  cursor: pointer;
  font-size: 15px;
  opacity: 0;
  transition: opacity 0.15s;
}
.task:hover .remove{ opacity: 0.6; }
.remove:hover{ opacity: 1 !important; color: var(--coral); }

.add-row{
  display:flex; align-items:center; gap: 8px;
  margin-top: 10px;
  font-size: 13.5px;
  color: var(--ink-soft);
}
.add-row input{
  flex:1; border:none; outline:none; background: transparent;
  font-family:'Inter', sans-serif; font-size: 13.5px; color: var(--ink);
  border-bottom: 1px dashed var(--line);
  padding: 4px 0;
}
.add-row .plus{
  color: var(--sage);
  font-weight: 600;
}

/* CALL LIST */
.call-row{
  display:flex; align-items:center; gap:10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--line);
}
.call-row:last-of-type{ border-bottom:none; }
.call-row .clinic{
  flex:1; border:none; outline:none; background:transparent;
  font-size: 14px; font-family:'Inter', sans-serif; color: var(--ink);
}
.status-tag{
  font-size: 11px;
  font-family:'IBM Plex Mono', monospace;
  padding: 3px 9px;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid transparent;
  user-select: none;
}
.status-to-call{ background: var(--blue-tint); color: var(--blue); }
.status-callback{ background: var(--gold-tint); color: var(--gold); }
.status-booked{ background: var(--sage-tint); color: var(--sage-dark); }
.status-no-answer{ background: var(--coral-tint); color: var(--coral); }

/* PROGRESS */
.progress-wrap{ margin-top: 4px; }
.progress-bar{
  height: 8px;
  background: var(--sage-tint);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 6px;
}
.progress-fill{
  height: 100%;
  background: var(--sage);
  border-radius: 20px;
  transition: width 0.3s ease;
}
.progress-label{
  display:flex; justify-content: space-between;
  font-size: 12.5px; color: var(--ink-soft);
}

/* COMPLIANCE STRIP */
.compliance{
  margin-top: 18px;
  border-radius: var(--radius);
  border: 1px dashed var(--line);
  background: var(--card);
  padding: 12px 18px;
  display:flex; gap: 18px; flex-wrap: wrap;
  align-items: center;
  font-size: 12.5px;
  color: var(--ink-soft);
}
.compliance b{ color: var(--ink); font-weight: 600; }
.compliance .dot{
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--sage); display:inline-block; margin-right: 6px;
}

.loading{ text-align:center; padding: 60px 0; color: var(--ink-soft); font-family:'IBM Plex Mono', monospace; font-size: 13px; }
</style>
</head>
<body>
<div class="wrap" id="app">
  <div class="loading">Loading your dashboard…</div>
</div>

<script>
const DEFAULT_STATE = {
  oneThing: "",
  kpis: {
    calls: { value: 0, goal: 30, label: "Calls made" },
    leads: { value: 0, goal: 10, label: "Warm leads" },
    booked: { value: 0, goal: 3, label: "Appointments booked" }
  },
  tasks: [
    { text: "Reactivation call block — clinic list A", done: false },
    { text: "Log yesterday's outcomes in the sheet", done: false },
    { text: "Follow up on last week's callbacks", done: false }
  ],
  calls: [
    { name: "Bloom Aesthetics, Bromley", status: "to-call" },
    { name: "The Skin Clinic, Sevenoaks", status: "callback" },
    { name: "Riverside Med Spa", status: "booked" }
  ],
  weeklyGoal: 150,
  weeklyDone: 0
};

let state = null;

async function loadState(){
  try{
    const res = await window.storage.get('dashboard-state');
    state = res ? JSON.parse(res.value) : structuredClone(DEFAULT_STATE);
  }catch(e){
    state = structuredClone(DEFAULT_STATE);
  }
  render();
}

async function saveState(){
  try{
    await window.storage.set('dashboard-state', JSON.stringify(state));
  }catch(e){
    console.error('Save failed', e);
  }
}

function fmtDate(){
  const d = new Date();
  const opts = { weekday: 'long', day: 'numeric', month: 'long' };
  return d.toLocaleDateString('en-GB', opts);
}

function greeting(){
  const h = new Date().getHours();
  if(h < 12) return "Morning focus";
  if(h < 17) return "Afternoon check-in";
  return "Evening wrap-up";
}

const STATUS_LABELS = {
  'to-call': 'To call',
  'callback': 'Callback',
  'booked': 'Booked',
  'no-answer': 'No answer'
};
const STATUS_ORDER = ['to-call', 'callback', 'booked', 'no-answer'];

function cycleStatus(s){
  const i = STATUS_ORDER.indexOf(s);
  return STATUS_ORDER[(i + 1) % STATUS_ORDER.length];
}

function render(){
  const app = document.getElementById('app');
  const doneTasks = state.tasks.filter(t => t.done).length;

  app.innerHTML = `
    <div class="header">
      <div>
        <p class="eyebrow">${greeting()}</p>
        <h1>David's Outreach Desk</h1>
      </div>
      <div class="date-block">
        <p class="day">${fmtDate()}</p>
        <p class="sub">CTPS-screened list ready</p>
      </div>
    </div>

    <div class="hero">
      <p class="hero-label">The one thing that matters most today</p>
      <input id="oneThing" type="text" placeholder="e.g. Get 5 warm leads to booked from clinic list A" value="${escapeAttr(state.oneThing)}">
    </div>

    <div class="kpi-row">
      ${renderKpi('calls')}
      ${renderKpi('leads')}
      ${renderKpi('booked')}
    </div>

    <div class="grid-2">
      <div class="panel">
        <h2>Today's priorities <span class="count">${doneTasks}/${state.tasks.length}</span></h2>
        ${state.tasks.map((t, i) => renderTask(t, i)).join('')}
        <div class="add-row">
          <span class="plus">+</span>
          <input id="newTask" type="text" placeholder="Add a priority and press enter">
        </div>
      </div>

      <div class="panel">
        <h2>Call list <span class="count">${state.calls.length} clinics</span></h2>
        ${state.calls.map((c, i) => renderCall(c, i)).join('')}
        <div class="add-row">
          <span class="plus">+</span>
          <input id="newCall" type="text" placeholder="Add a clinic and press enter">
        </div>
      </div>
    </div>

    <div class="panel">
      <h2>Weekly call goal</h2>
      <div class="progress-wrap">
        <div class="progress-label">
          <span><span id="weeklyDoneLabel">${state.weeklyDone}</span> of <input id="weeklyGoal" type="text" value="${state.weeklyGoal}" style="width:36px;border:none;background:transparent;font-family:'IBM Plex Mono',monospace;color:var(--ink-soft);border-bottom:1px dashed var(--line);text-align:center;"> calls this week</span>
          <span>${Math.min(100, Math.round((state.weeklyDone / state.weeklyGoal) * 100))}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${Math.min(100, (state.weeklyDone / state.weeklyGoal) * 100)}%"></div>
        </div>
      </div>
    </div>

    <div class="compliance">
      <span><span class="dot"></span><b>ICO</b> registered</span>
      <span><span class="dot"></span><b>CTPS</b> screened before every call</span>
      <span><span class="dot"></span><b>PECR</b> soft opt-in observed</span>
      <span><span class="dot"></span><b>DPA</b> signed before handling clinic data</span>
    </div>
  `;

  attachHandlers();
}

function renderKpi(key){
  const k = state.kpis[key];
  return `
    <div class="kpi-card">
      <div class="kpi-top">
        <span class="kpi-title">${k.label}</span>
        <div class="kpi-controls">
          <button class="kpi-btn" data-kpi="${key}" data-delta="-1">−</button>
          <button class="kpi-btn" data-kpi="${key}" data-delta="1">+</button>
        </div>
      </div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-goal">goal <input data-kpi-goal="${key}" type="text" value="${k.goal}"></div>
    </div>
  `;
}

function renderTask(t, i){
  return `
    <div class="task ${t.done ? 'done' : ''}">
      <input type="checkbox" data-task-toggle="${i}" ${t.done ? 'checked' : ''}>
      <input class="task-text" data-task-text="${i}" type="text" value="${escapeAttr(t.text)}">
      <button class="remove" data-task-remove="${i}">×</button>
    </div>
  `;
}

function renderCall(c, i){
  return `
    <div class="call-row">
      <input class="clinic" data-call-text="${i}" type="text" value="${escapeAttr(c.name)}">
      <span class="status-tag status-${c.status}" data-call-status="${i}">${STATUS_LABELS[c.status]}</span>
      <button class="remove" data-call-remove="${i}" style="opacity:0.5;">×</button>
    </div>
  `;
}

function escapeAttr(s){
  return String(s).replace(/"/g, '&quot;');
}

function attachHandlers(){
  const oneThing = document.getElementById('oneThing');
  oneThing.addEventListener('input', e => { state.oneThing = e.target.value; saveState(); });

  document.querySelectorAll('[data-kpi]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.kpi;
      const delta = parseInt(btn.dataset.delta);
      state.kpis[key].value = Math.max(0, state.kpis[key].value + delta);
      saveState(); render();
    });
  });
  document.querySelectorAll('[data-kpi-goal]').forEach(inp => {
    inp.addEventListener('change', () => {
      const key = inp.dataset.kpiGoal;
      const v = parseInt(inp.value) || 0;
      state.kpis[key].goal = v;
      saveState();
    });
  });

  document.querySelectorAll('[data-task-toggle]').forEach(cb => {
    cb.addEventListener('change', () => {
      const i = parseInt(cb.dataset.taskToggle);
      state.tasks[i].done = cb.checked;
      saveState(); render();
    });
  });
  document.querySelectorAll('[data-task-text]').forEach(inp => {
    inp.addEventListener('input', () => {
      const i = parseInt(inp.dataset.taskText);
      state.tasks[i].text = inp.value;
      saveState();
    });
  });
  document.querySelectorAll('[data-task-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.taskRemove);
      state.tasks.splice(i, 1);
      saveState(); render();
    });
  });
  const newTask = document.getElementById('newTask');
  newTask.addEventListener('keydown', e => {
    if(e.key === 'Enter' && newTask.value.trim()){
      state.tasks.push({ text: newTask.value.trim(), done: false });
      saveState(); render();
    }
  });

  document.querySelectorAll('[data-call-text]').forEach(inp => {
    inp.addEventListener('input', () => {
      const i = parseInt(inp.dataset.callText);
      state.calls[i].name = inp.value;
      saveState();
    });
  });
  document.querySelectorAll('[data-call-status]').forEach(tag => {
    tag.addEventListener('click', () => {
      const i = parseInt(tag.dataset.callStatus);
      state.calls[i].status = cycleStatus(state.calls[i].status);
      saveState(); render();
    });
  });
  document.querySelectorAll('[data-call-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.callRemove);
      state.calls.splice(i, 1);
      saveState(); render();
    });
  });
  const newCall = document.getElementById('newCall');
  newCall.addEventListener('keydown', e => {
    if(e.key === 'Enter' && newCall.value.trim()){
      state.calls.push({ name: newCall.value.trim(), status: 'to-call' });
      saveState(); render();
    }
  });

  const weeklyGoal = document.getElementById('weeklyGoal');
  weeklyGoal.addEventListener('change', () => {
    state.weeklyGoal = parseInt(weeklyGoal.value) || 1;
    saveState(); render();
  });
}

loadState();
</script>
</body>
</html>