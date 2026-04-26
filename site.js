const translations = {
  zh: {
    title: "SleeePal 睡眠宝 — 睡眠，才是最好的奢侈品",
    description: "SleeePal 以 Mac 桌面版为首发路径，把本地近场安静控制、三轨可视化与夜报带到枕边；蓝牙可先试用，有线是当前更可信的增强路径。",
    "nav.philosophy": "理念",
    "nav.science": "原理",
    "nav.features": "功能",
    "nav.visual": "可视化",
    "nav.cta": "立即体验",
    "hero.pretitle": "Mac-first 首发 · QuietZone™ 近场守护实验 · sleeepal.com",
    "hero.kicker": "您从未拥有过",
    "hero.headline": "<em>这样的宁静</em>",
    "hero.sub": "首个版本以 <strong>Mac 桌面版</strong> 为主。<br/>先把本地监测、三轨可视化、夜报和床头链路引导做扎实，<br/>再由 <strong>iPhone companion</strong> 承担 setup、场景入口与报告查看。",
    "hero.brand": "<strong>SleeePal 睡眠宝</strong>：蓝牙先试用建立体验，有线再继续验证更低延迟与更稳定的床头链路。",
    "hero.primary": "查看公开进展",
    "hero.secondary": "了解近场宁静技术",
    "hero.wave.antiMeta": "延迟 12ms · −2 dB",
    "marquee.1": "44,100 SAMPLES PER SECOND",
    "marquee.2": "目标近场区域 · 先试用再增强",
    "marquee.3": "THE BEST QUIET YOU'VE NEVER HEARD",
    "marquee.4": "睡眠才是最好的奢侈品",
    "marquee.5": "MAC-FIRST LAUNCH",
    "marquee.6": "BLUETOOTH TRIAL · WIRED UPGRADE",
    "marquee.7": "夜报与场景 companion",
    "download.eyebrow": "从首个可信版本开始",
    "download.title": "Mac 先落地，<br/>再把宁静做深",
    "download.sub": "官网已公开升级 · Mac 与移动端产物将在验证完成后发布",
    "download.button": "查看 GitHub 项目",
    "download.sysreq": "官网已上线 · 应用产物待验证后公开发布",
    "download.coming1": "iPhone Companion",
    "download.coming2": "Android",
    "download.coming3": "Windows",
    "download.coming4": "Companion 开发中",
    "hero.proof1Label": "次/秒实时采样",
    "hero.proof2Label": "桌面路径已公开说明",
    "hero.proof3Label": "轨可视化 + 夜报复盘",
    "hero.frameTitle": "SleeePal 睡眠宝 — 宁静守护中",
    "hero.status.state": "宁静守护中",
    "hero.wave.noise": "环境噪音",
    "hero.wave.anti": "反相输出",
    "hero.wave.result": "理论抵消效果",
    "hero.wave.resultValue": "主峰 −18 dB · 理论估算",
    "hero.stat.freq": "主频",
    "hero.stat.cancel": "理论估算",
    "hero.stat.confidence": "校准置信度",
    "brand.headline": "您的世界。<em>只有宁静。</em>",
    "brand.sub": "主动降噪耳机把安静放进耳道，SleeePal 先把安静控制带到枕边目标近场。<br/>当前首发以 Mac 桌面版为主，iPhone 负责 setup 与报告 companion。",
    "philosophy.quote": "良好的睡眠，胜过任何奢侈品——不是吗？",
    "science.kicker": "QuietZone™ 近场守护 · 技术原理",
    "science.title": "主动降噪，<br/><em>从耳道延伸到枕边近场</em>",
    "science.desc": "Bose 发明了主动降噪耳机，把安静送进了耳道。<br/>SleeePal 尝试把相同的物理思路延伸到枕边目标近场；当前首发重点是用 <strong>Mac + 外接音箱</strong> 持续验证更可信的效果链路。",
    "science.compare.earphone.kicker": "传统降噪耳机",
    "science.compare.earphone.zone": "宁静区 = 耳道",
    "science.compare.earphone.body": "麦克风在耳罩里<br/>宁静区在<strong>耳道内</strong><br/>必须佩戴耳机",
    "science.compare.expand": "延伸到床头近场",
    "science.compare.launch.zone": "目标区域 = 枕边近场",
    "science.compare.launch.body": "麦克风在 Mac / 手机里<br/>目标区域在<strong>枕边近场</strong><br/>蓝牙先试用，有线更可信",
    "science.spec1": "Hz 采样率，实时处理每一帧声音",
    "science.spec2": "样本/帧，<23ms 延迟窗口",
    "science.spec3": "Hz 鼾声频段精准侦测",
    "science.spec4": "路实时波形，效果可见可验证",
    "science.diagram.zoneTitle": "目标近场区域",
    "science.diagram.zoneState": "持续验证中",
    "science.diagram.noise1": "呼噜声",
    "science.diagram.noise2": "噪音源",
    "science.diagram.caption": "反相波 + 噪音波 → 互相抵消 → 宁静",
    "science.diagram.noiseWave": "噪音波 →",
    "science.diagram.antiWave": "← 反相波",
    "science.step1.title": "麦克风持续侦测",
    "science.step1.body": "手机麦克风每秒采集 44,100 个声音样本，实时捕捉枕边噪音——鼾声、空调低频、机器振动，每一帧都不放过。",
    "science.step2.title": "DSP 频谱分析",
    "science.step2.body": "FFT 算法实时识别噪音的主频、谐波结构和能量分布，每 23 毫秒完成一次完整的频谱分析，锁定需要对冲的频段。",
    "science.step3.title": "链路对齐与延迟控制",
    "science.step3.body": "生成与噪音相对冲的输出信号，持续观察麦克风到扬声器的传播延迟与回授风险。当前首发重点是把有线路径的摆位、稳定性和夜报证据做扎实。",
    "science.step4.title": "目标近场验证",
    "science.step4.body": "在小型有线音箱链路上，持续验证枕边近场是否真的出现可复现改善。三路实时波形与夜报会帮助你判断效果，而不是只靠主观期待。",
    "science.why.kicker": "为什么近场有效",
    "science.why.title": "不追求全屋静音，<br/><em>只守护你真正休息的那一块空间</em>",
    "science.why.body1": "全屋级主动降噪需要专业声学工程和大量设备，成本极高且实现困难。SleeePal 选择了更聪明的路径：先守护你头部周围真正休息的那一小块区域，再把证据留给夜报和复现测试。",
    "science.why.body2": "这与主动降噪耳机在耳道里建立安静控制区的思路一致，只是我们的首发版本更诚实：蓝牙先建立体验，Mac + 有线链路才是当前更可信的增强路径。",
    "science.list1": "<strong>手机单机模式</strong> — 零门槛启动，适合午睡、首次体验和轻场景床头使用",
    "science.list2": "<strong>手机 + 小型蓝牙音箱</strong> — 先建立体验和依赖，适合轻量试用；受无线延迟限制，属于体验路径",
    "science.list3": "<strong>手机 / Mac + 有线音箱</strong> — 更低延迟、链路更可控，适合继续验证床头场景，是当前推荐升级路径",
    "science.list4": "<strong>专业方案：笔记本 / Mac mini + 有线 mic + 有线音箱</strong> — 更适合夜间长时运行，也是未来专用硬件的参考形态",
    "science.note": "⚠ 蓝牙现在被定义为“先体验”的合法入口，不再被一刀切排除；但若要追求更强的主动抵消、更稳定的整夜效果，以及更低的辐射暴露，仍建议逐步升级到全有线路径。",
    "science.device.phone": "手机",
    "science.device.speaker": "扬声器",
    "science.visualCard1.title": "手机单机",
    "science.visualCard1.zone": "先用起来 · 最低门槛",
    "science.visualCard1.badge": "轻量版",
    "science.visualCard2.title": "手机 + 蓝牙音箱",
    "science.visualCard2.zone": "先体验 · 先建立信任",
    "science.visualCard2.badge": "体验版",
    "science.visualCard3.title": "手机 / Mac + 有线音箱",
    "science.visualCard3.zone": "低延迟 · 更稳定",
    "science.visualCard3.badge": "家用增强版",
    "science.visualCard4.title": "主机 + 有线 mic + 音箱",
    "science.visualCard4.zone": "长时运行 · 未来专用硬件形态",
    "science.visualCard4.badge": "专业版",
    "faq.kicker": "常见问题",
    "faq.title": "关于床头近场、音箱尺寸和真实可行性",
    "faq.q1": "真的能做出一个“枕头大小”的宁静区域吗？",
    "faq.a1": "可以把它理解为一个仍在验证中的“床头近场安静控制区”，而不是电影里那种边界分明的静音泡泡。更现实的目标，是让头部附近 20–50 厘米范围内的某些持续低频噪声变弱一些、柔和一些，而不是让所有声音完全消失。",
    "faq.q2": "官网里原来写“放大 ×1000”，是不是太夸张？",
    "faq.a2": "是，那个说法太夸张，也不严谨。耳机耳道内的安静控制区和床头近场不是简单按尺寸线性放大。床头场景会受到房间反射、摆位、延迟、麦克风位置和音箱指向性的共同影响，所以更合适的说法是“把同类物理思路延伸到更大的近场区域”。",
    "faq.q3": "如果想认真验证，建议配多大的音箱？",
    "faq.a3": "目前更现实的建议是：先用一对 2–3 英寸全频小音箱，或者一个 2.5–4 英寸的近场小桌面音箱，放在床头 20–60 厘米范围内，优先验证 60–300 Hz 这类更常见的持续噪声。它不需要大功率重低音炮，反而更需要可控、低延迟、摆位稳定的小型有线音箱。",
    "faq.q4": "需要到什么程度的功率和配置？",
    "faq.a4": "首发验证阶段不需要很大的功率。比起“多大瓦数”，更关键的是：有线连接、音箱失真低、近场摆位稳定、麦克风位置固定。一个普通桌面级有源小音箱通常已经足够做验证；真正限制效果的往往不是功率，而是房间反射、延迟和几何关系。",
    "faq.q5": "什么情况下不值得承诺效果？",
    "faq.a5": "如果还是手机直出、蓝牙链路、房间反射很重、音箱离头部太远，或者噪声本身是大量突发人声与高频杂音，就不适合承诺形成稳定 QuietZone。更适合把它当作“试用路径 + 夜报证据 + 轻度 softening / masking”。",
    "who.kicker": "守护对象",
    "who.title": "睡眠宝，<br/><em>守护你和家人的睡眠</em>",
    "who.card1.title": "消减鼾声",
    "who.card1.pain": "枕边呼噜声反复把你吵醒，又不想整晚戴耳塞、戴耳机，第二天精神被一点点掏空。",
    "who.card1.solution": "先用蓝牙或手机试用建立体验，再升级到 Mac + 有线链路，把枕边干扰、夜报和 follow-up 逐步做实。",
    "who.card1.tag": "蓝牙先试 · Mac + 有线更稳",
    "who.card2.title": "守护宝宝",
    "who.card2.pain": "宝宝睡眠浅，一点动静就可能哭醒；你需要的是更安静的环境感知和更少的夜间惊扰。",
    "who.card2.solution": "首发版本更适合把它当作本地监测、环境观察和场景 companion，而不是过早宣称宝宝场景已经被完全主动解决。",
    "who.card2.tag": "本地监测 · Companion 场景",
    "who.card3.title": "午休小憩",
    "who.card3.pain": "午睡 20 分钟是下午效率的关键，但办公室、宿舍环境嘈杂，戴耳机又不自然。",
    "who.card3.solution": "手机单机或蓝牙体验路径更适合快速启动，把仪式感、声景和轻度 softening 先做到位。",
    "who.card3.tag": "快速启动 · 轻量 softening",
    "who.card4.title": "交通途中",
    "who.card4.pain": "火车、长途车、候机休息区这类环境里，低频底噪和间歇人声最容易让人睡不沉。",
    "who.card4.solution": "这类场景更适合先做 softening、masking 和场景仪式，不把它包装成稳定强 QuietZone。",
    "who.card4.tag": "低频柔化 · 先体验再升级",
    "slogan.label": "SleeePal 睡眠宝的首发定位",
    "slogan.headline": "先把链路做实，<br/><em>再把宁静做深</em>",
    "slogan.body": "首个版本不靠夸张承诺取胜，而是把本地监测、场景引导、三轨可视化、夜报与升级路径做扎实。先让你愿意每天打开，再逐步把床头链路验证清楚。",
    "slogan.stat1": "耳机耳塞<br/>佩戴需求",
    "slogan.stat2": "路实时波形<br/>效果可见",
    "slogan.stat3": "蓝牙试用 / 有线增强<br/>升级路径",
    "slogan.tagline1": "睡眠宝",
    "slogan.tagline2": "保护你和家人的睡眠",
    "features.kicker": "五大模块",
    "features.title": "全方位守护，<br/><em>从侦测到复盘</em>",
    "features.1.title": "QuietZone™ 路由守护",
    "features.1.body": "首发版本的核心不是盲目夸大强降噪，而是把本地监测、场景引导、路由适配输出和有线增强校准做扎实。蓝牙可先试用建立信任，有线才是当前更可信的增强路径。",
    "features.1.tag1": "本地监测",
    "features.1.tag2": "链路分级",
    "features.1.tag3": "有线增强",
    "features.2.title": "SnoreShield™ 呼噜守护",
    "features.2.body": "识别呼噜声事件，生成温柔但有证据的夜间摘要：昨夜最吵的时段是什么、哪类事件最值得今晚优先处理，不指责，只关心你睡得怎样。",
    "features.2.tag1": "事件检测",
    "features.2.tag2": "夜间摘要",
    "features.3.title": "三路实时可视化",
    "features.3.body": "同屏实时显示三条波形：环境噪音 / 反相输出 / 理论抵消效果。让你<em>看见</em> SleeePal 在做什么，建立真实的信任感，而不是“感觉像在起作用”。",
    "features.3.tag1": "实时频谱",
    "features.3.tag2": "三路波形",
    "features.3.tag3": "效果估算",
    "features.4.title": "噪音取证",
    "features.4.body": "分贝持续监测、突发噪音事件记录、时间轴与峰值统计，帮助你复盘昨夜发生了什么。首发版本先把本地证据和夜报做好，再谈更重的外部工作流。",
    "features.4.tag1": "dB 监测",
    "features.4.tag2": "事件时间轴",
    "features.4.tag3": "夜报复盘",
    "features.5.title": "DreamAmbient™ 助眠声景",
    "features.5.body": "雨声、溪流、森林、白噪音——自然声景与反相信号同步混合，进一步掩蔽残余噪音，引导大脑进入放松状态，每晚都是一场精心策划的宁静旅程。",
    "features.5.tag1": "雨声",
    "features.5.tag2": "溪流",
    "features.5.tag3": "森林",
    "features.6.title": "BabyGuard™ 宝宝守护",
    "features.6.body": "作为 companion 场景持续推进中。先把环境监测、柔和场景引导和夜间异常提醒做扎实，再逐步扩展到更完整的宝宝守护能力。",
    "features.6.coming": "即将上线",
    "visual.kicker": "三路实时可视化",
    "visual.title": "让你看见，<br/><em>宁静正在发生</em>",
    "visual.desc": "三条波形，一屏呈现。噪音、反相、理论抵消效果，<br/>实时同步——科学可见，不靠玄学。",
    "visual.status": "实时守护中 · 主频 62 Hz · 2h 34m",
    "visual.tab1": "频谱",
    "visual.tab2": "波形",
    "visual.tab3": "趋势",
    "visual.track1": "环境噪音输入",
    "visual.track1.meta1": "主频 62 Hz",
    "visual.track1.meta2": "强度 56 dB",
    "visual.track2": "反相输出信号",
    "visual.track2.meta1": "延迟 12ms 校正",
    "visual.track2.meta2": "增益 −2 dB",
    "visual.track3": "理论抵消效果 <small>（估算）</small>",
    "visual.track3.meta1": "主峰降低 ~18 dB",
    "visual.track3.meta2": "理论估算约 68%",
    "visual.disclaimer": "⚠ 理论效果为信号模拟估算，实际效果受空间、设备类型及摆位距离影响",
    "visual.badge": "守护中 · 宁静",
    "testimony.kicker": "早期体验摘录",
    "testimony.title": "<em>场景观察，而不是效果承诺</em>",
    "testimony.1.body": "侧睡时不想整晚戴耳塞的人，更在意的是能不能先建立一个愿意每天打开的床头流程。对这类用户，首发版更适合先验证链路、摆位和夜报，而不是先承诺固定改善值。",
    "testimony.1.footer": "— 枕边鼾声场景",
    "testimony.2.body": "宝宝场景里，当前更适合把产品理解为本地环境观察、夜间提醒和场景 companion。它可以帮助减少手忙脚乱，但官网不应把它写成已经完成验证的主动守护系统。",
    "testimony.2.footer": "— 婴儿房观察场景",
    "testimony.3.body": "午休与短时小憩更适合手机单机或蓝牙试用路径。这里更现实的价值，是快速进入状态、叠加声景与轻度 softening，而不是宣称形成稳定强 QuietZone。",
    "testimony.3.footer": "— 午休试用场景",
    "footer.tagline": "睡眠，才是最好的奢侈品。",
    "footer.product": "产品",
    "footer.product1": "工作原理",
    "footer.product2": "核心功能",
    "footer.product3": "可视化",
    "footer.product4": "免费下载",
    "footer.people": "适用人群",
    "footer.people1": "消减鼾声",
    "footer.people2": "守护宝宝",
    "footer.people3": "午休小憩",
    "footer.about": "关于",
    "footer.about1": "隐私政策",
    "footer.about2": "使用条款",
    "footer.about3": "联系我们",
    "footer.copy": "© 2026 SleeePal 睡眠宝 · sleeepal.com",
    "footer.disclaimer": "SleeePal 为非药物助眠辅助工具，不构成医疗建议或诊断。理论效果因实际空间、设备及摆位不同而存在差异。"
  },
  en: {
    title: "SleeePal — Sleep Is the Finest Luxury",
    description: "SleeePal is launching Mac-first: local bedside monitoring, three-track visuals, and night reports now; bluetooth can be the trial path, while wired is the current enhanced path.",
    "nav.philosophy": "Philosophy",
    "nav.science": "Science",
    "nav.features": "Features",
    "nav.visual": "Visuals",
    "nav.cta": "Try it",
    "hero.pretitle": "Mac-first launch · QuietZone™ near-field trial · sleeepal.com",
    "hero.kicker": "The quiet",
    "hero.headline": "<em>you have never owned before</em>",
    "hero.sub": "The first release is centered on the <strong>Mac desktop app</strong>.<br/>It focuses on local monitoring, three-track visuals, night reports, and bedside route guidance,<br/>while the <strong>iPhone companion</strong> handles setup, scenarios, and report viewing.",
    "hero.brand": "<strong>SleeePal</strong>: start with bluetooth to build familiarity, then keep validating a lower-latency and steadier wired bedside route.",
    "hero.primary": "View public progress",
    "hero.secondary": "See the near-field science",
    "hero.wave.antiMeta": "12 ms delay · −2 dB",
    "marquee.1": "44,100 SAMPLES PER SECOND",
    "marquee.2": "TARGET NEAR-FIELD AREA · TRIAL BEFORE ENHANCEMENT",
    "marquee.3": "THE BEST QUIET YOU'VE NEVER HEARD",
    "marquee.4": "SLEEP IS THE FINEST LUXURY",
    "marquee.5": "MAC-FIRST LAUNCH",
    "marquee.6": "BLUETOOTH TRIAL · WIRED UPGRADE",
    "marquee.7": "NIGHT REPORTS · COMPANION SCENARIOS",
    "download.eyebrow": "Start with the first credible release",
    "download.title": "Mac first,<br/>then deeper quiet",
    "download.sub": "The website refresh is public now · Mac and mobile builds will be published after validation",
    "download.button": "View GitHub project",
    "download.sysreq": "Website is live · app binaries will be published after validation",
    "download.coming1": "iPhone Companion",
    "download.coming2": "Android",
    "download.coming3": "Windows",
    "download.coming4": "Companion in progress",
    "hero.proof1Label": "samples/sec in real time",
    "hero.proof2Label": "desktop route documented publicly",
    "hero.proof3Label": "visual tracks + night report review",
    "hero.frameTitle": "SleeePal — Quiet protection active",
    "hero.status.state": "Quiet protection active",
    "hero.wave.noise": "Ambient noise",
    "hero.wave.anti": "Antiphase output",
    "hero.wave.result": "Estimated cancellation",
    "hero.wave.resultValue": "main peak −18 dB · estimate only",
    "hero.stat.freq": "Peak band",
    "hero.stat.cancel": "Estimated only",
    "hero.stat.confidence": "Calibration confidence",
    "brand.headline": "Your world.<em>Only quiet.</em>",
    "brand.sub": "Noise-cancelling headphones place quiet inside the ear canal. SleeePal moves quiet control into the bedside near field.<br/>The current launch is Mac-first, while iPhone handles setup and report companion work.",
    "philosophy.quote": "Good sleep beats every luxury item, doesn't it?",
    "science.kicker": "QuietZone™ near-field guard · How it works",
    "science.title": "Active noise control,<br/><em>extended from the ear canal to the bedside near field</em>",
    "science.desc": "Bose brought active noise control into the ear. SleeePal is trying to extend the same physical idea into the near field around the pillow, with the first release focused on validating the more trustworthy <strong>Mac + external speaker</strong> path.",
    "science.compare.earphone.kicker": "Traditional ANC headphones",
    "science.compare.earphone.zone": "Quiet zone = ear canal",
    "science.compare.earphone.body": "The microphone sits inside the ear cup<br/>The quiet zone lives <strong>inside the ear canal</strong><br/>You must wear headphones",
    "science.compare.expand": "Extended into the bedside near field",
    "science.compare.launch.zone": "Target zone = bedside near field",
    "science.compare.launch.body": "The microphone lives in the Mac or phone<br/>The target zone lives in the <strong>bedside near field</strong><br/>Bluetooth is the trial path, wired is more credible",
    "science.spec1": "Hz sampling rate, processing every frame in real time",
    "science.spec2": "samples per frame, under a 23 ms window",
    "science.spec3": "Hz snore-band detection",
    "science.spec4": "live tracks, visible and verifiable",
    "science.diagram.zoneTitle": "Target near-field zone",
    "science.diagram.zoneState": "under continuous validation",
    "science.diagram.noise1": "Snore",
    "science.diagram.noise2": "noise source",
    "science.diagram.caption": "Antiphase wave + noise wave → cancel each other → quiet",
    "science.diagram.noiseWave": "Noise wave →",
    "science.diagram.antiWave": "← Antiphase wave",
    "science.step1.title": "Continuous microphone sensing",
    "science.step1.body": "The microphone captures 44,100 sound samples per second, tracking bedside noise in real time: snoring, HVAC rumble, mechanical vibration, frame by frame.",
    "science.step2.title": "DSP spectrum analysis",
    "science.step2.body": "FFT continuously identifies dominant bands, harmonics, and energy distribution. Every 23 milliseconds the app finishes a full spectrum pass and locks onto the band that matters.",
    "science.step3.title": "Route alignment and delay control",
    "science.step3.body": "The system generates output that opposes the disturbance and keeps tracking propagation delay and feedback risk from mic to speaker. The current launch focuses on making the wired path stable, placeable, and report-backed.",
    "science.step4.title": "Near-field validation",
    "science.step4.body": "With a small wired speaker path, SleeePal keeps testing whether the bedside near field is actually improving in a repeatable way. The three live tracks and the night report help you judge that honestly.",
    "science.why.kicker": "Why near-field works",
    "science.why.title": "Not trying to quiet the whole room,<br/><em>only the part where you actually rest</em>",
    "science.why.body1": "Whole-room active noise control needs serious acoustic engineering and a lot of hardware. SleeePal takes the more practical path: protect the small area around the head first, then leave evidence in the report and repeatable tests.",
    "science.why.body2": "It follows the same logic as ANC headphones creating a quiet control zone in the ear canal, but the launch version is more honest: bluetooth builds the first experience, while Mac plus wired is the current stronger path.",
    "science.list1": "<strong>Phone only</strong> — the lowest-friction entry, useful for naps, first-time trials, and lighter bedside use",
    "science.list2": "<strong>Phone + small bluetooth speaker</strong> — useful for trust-building and first-week habit formation; wireless latency keeps it in the trial tier",
    "science.list3": "<strong>Phone / Mac + wired speaker</strong> — lower latency and a more controllable route for bedside validation; this is the current recommended upgrade path",
    "science.list4": "<strong>Pro setup: laptop / Mac mini + wired mic + wired speaker</strong> — better for long overnight runs and a practical bridge toward future dedicated hardware",
    "science.note": "⚠ Bluetooth is now treated as a valid “try it first” entry point instead of being ruled out. But if you want stronger cancellation, steadier overnight behavior, and lower radiation exposure, the recommended path is still fully wired.",
    "science.device.phone": "Phone",
    "science.device.speaker": "Speaker",
    "science.visualCard1.title": "Phone only",
    "science.visualCard1.zone": "Start now · lowest friction",
    "science.visualCard1.badge": "Lite",
    "science.visualCard2.title": "Phone + bluetooth speaker",
    "science.visualCard2.zone": "Try first · build trust",
    "science.visualCard2.badge": "Trial",
    "science.visualCard3.title": "Phone / Mac + wired speaker",
    "science.visualCard3.zone": "Lower latency · steadier",
    "science.visualCard3.badge": "Enhanced home path",
    "science.visualCard4.title": "Host + wired mic + speaker",
    "science.visualCard4.zone": "Long sessions · hardware reference shape",
    "science.visualCard4.badge": "Pro path",
    "faq.kicker": "FAQ",
    "faq.title": "Bedside near-field reality, speaker size, and feasibility",
    "faq.q1": "Can this really create a pillow-sized quiet zone?",
    "faq.a1": "The safer framing is a bedside near-field control zone that is still under validation, not a movie-style silence bubble with hard edges. The realistic goal is to soften or reduce some steady low-frequency noise within roughly 20–50 cm around the head, not to make every sound disappear.",
    "faq.q2": "Was “scaled ×1000” too exaggerated?",
    "faq.a2": "Yes. That phrasing was too dramatic and not technically rigorous. The quiet control zone inside headphones does not scale linearly into a bedside scene. The bedside case is shaped by room reflections, placement, latency, microphone position, and speaker directivity, so the safer phrasing is to extend the same physical idea into a larger near-field area.",
    "faq.q3": "What speaker size is realistic for serious validation?",
    "faq.a3": "A practical starting point is a pair of 2–3 inch full-range speakers, or one compact 2.5–4 inch desktop near-field speaker placed about 20–60 cm from the bed area. The goal is not huge bass output. It is a controllable, low-latency wired source that can help validate steady noise in bands such as 60–300 Hz.",
    "faq.q4": "How much power or what type of setup matters most?",
    "faq.a4": "For this launch stage, raw wattage is less important than route quality. Wired connection, low distortion, stable placement, and fixed mic geometry matter more than chasing a big speaker. A normal desktop active speaker is usually enough for validation; room reflections and timing are more likely to be the limiting factors.",
    "faq.q5": "When should the product avoid claiming a real QuietZone?",
    "faq.a5": "If the route is still phone-only, bluetooth, highly reflective, too far from the head, or dominated by sudden speech and high-frequency noise, it should not claim a stable QuietZone. In those cases the safer framing is trial path, night-report evidence, and light softening or masking.",
    "who.kicker": "Who it protects",
    "who.title": "SleeePal,<br/><em>protecting your sleep and your family's sleep</em>",
    "who.card1.title": "Snore relief",
    "who.card1.pain": "A partner's snoring keeps waking you up, but you do not want to wear earplugs or headphones all night and lose another morning to exhaustion.",
    "who.card1.solution": "Start with bluetooth or phone-only to build trust, then move to Mac plus wired to make the bedside report and follow-up loop more real night after night.",
    "who.card1.tag": "Try bluetooth first · Mac + wired is steadier",
    "who.card2.title": "Baby guard",
    "who.card2.pain": "A sleeping baby wakes easily. What you need first is better local awareness and fewer sudden nighttime disturbances.",
    "who.card2.solution": "The launch version is better framed as local monitoring, environment awareness, and a scenario companion than as a fully solved active baby-protection system.",
    "who.card2.tag": "Local monitoring · Companion scenario",
    "who.card3.title": "Power naps",
    "who.card3.pain": "A 20-minute nap can save the afternoon, but office or dorm noise makes it hard to settle, and headphones are not always practical.",
    "who.card3.solution": "Phone-only or bluetooth trial routes are better for fast starts, ritual, soundscapes, and gentle softening.",
    "who.card3.tag": "Fast start · light softening",
    "who.card4.title": "Transit calm",
    "who.card4.pain": "On trains, coaches, and airport rest areas, low rumble and intermittent voices make it hard to sink into sleep.",
    "who.card4.solution": "This is better treated as a softening, masking, and scenario ritual path first, not as strong stable QuietZone proof.",
    "who.card4.tag": "Low-rumble softening · try first, upgrade later",
    "slogan.label": "How the first launch is positioned",
    "slogan.headline": "Make the route real first,<br/><em>then deepen the quiet</em>",
    "slogan.body": "The first release avoids overpromising. It focuses on making local monitoring, scenario guidance, three-track visuals, reports, and the upgrade path solid enough to return to every day.",
    "slogan.stat1": "headphones or earplugs<br/>required",
    "slogan.stat2": "live wave tracks<br/>you can actually see",
    "slogan.stat3": "bluetooth trial / wired enhancement<br/>upgrade path",
    "slogan.tagline1": "SleeePal",
    "slogan.tagline2": "protecting your sleep and your family's sleep",
    "features.kicker": "Five core modules",
    "features.title": "Protection across the whole flow,<br/><em>from sensing to next-morning review</em>",
    "features.1.title": "QuietZone™ route guard",
    "features.1.body": "The launch is not about pretending to have maximum ANC already. It is about making local monitoring, scenario guidance, route-aware output, and wired calibration credible. Bluetooth is the trial path; wired is the stronger path today.",
    "features.1.tag1": "Local monitoring",
    "features.1.tag2": "Route tiers",
    "features.1.tag3": "Wired enhancement",
    "features.2.title": "SnoreShield™ event guard",
    "features.2.body": "Recognize snore events and turn them into a gentle but useful nightly summary: when was the worst period, and what deserves attention tonight. No blame, just sleep-focused guidance.",
    "features.2.tag1": "Event detection",
    "features.2.tag2": "Night summary",
    "features.3.title": "Three live visual tracks",
    "features.3.body": "Show three waveforms together in real time: ambient input, antiphase output, and estimated cancellation. You can <em>see</em> what SleeePal is doing instead of guessing whether it is working.",
    "features.3.tag1": "Live spectrum",
    "features.3.tag2": "Three wave tracks",
    "features.3.tag3": "Estimated effect",
    "features.4.title": "Noise evidence",
    "features.4.body": "Continuous dB monitoring, sudden-noise event logging, timeline review, and peak statistics help you understand what happened last night. The first release focuses on getting local evidence and reports right before heavier workflows.",
    "features.4.tag1": "dB monitoring",
    "features.4.tag2": "Event timeline",
    "features.4.tag3": "Night review",
    "features.5.title": "DreamAmbient™ soundscapes",
    "features.5.body": "Rain, streams, forests, white noise: natural soundscapes are mixed alongside the route strategy to soften residual disturbance and help the nervous system settle into rest.",
    "features.5.tag1": "Rain",
    "features.5.tag2": "Stream",
    "features.5.tag3": "Forest",
    "features.6.title": "BabyGuard™ baby care",
    "features.6.body": "Still advancing as a companion scenario. First make environment monitoring, gentle guidance, and nighttime irregularity prompts trustworthy; then expand into fuller baby-care behavior.",
    "features.6.coming": "Coming soon",
    "visual.kicker": "Three live visual tracks",
    "visual.title": "See it,<br/><em>while the quiet is happening</em>",
    "visual.desc": "Three tracks, one screen. Noise, antiphase, and estimated cancellation move together in real time — visible science, not mystique.",
    "visual.status": "Live guard active · 62 Hz peak · 2h 34m",
    "visual.tab1": "Spectrum",
    "visual.tab2": "Waveform",
    "visual.tab3": "Trend",
    "visual.track1": "Ambient noise input",
    "visual.track1.meta1": "Peak 62 Hz",
    "visual.track1.meta2": "56 dB intensity",
    "visual.track2": "Antiphase output",
    "visual.track2.meta1": "12 ms delay aligned",
    "visual.track2.meta2": "−2 dB gain",
    "visual.track3": "Estimated cancellation <small>(modelled)</small>",
    "visual.track3.meta1": "~18 dB peak reduction",
    "visual.track3.meta2": "~68% estimated",
    "visual.disclaimer": "⚠ Estimated effect is based on signal modelling. Real-world results depend on space, hardware, and placement.",
    "visual.badge": "Guarding · Quiet",
    "testimony.kicker": "Early field notes",
    "testimony.title": "<em>Usage observations, not outcome claims</em>",
    "testimony.1.body": "For people who do not want to wear earplugs all night, the first practical question is whether the bedside routine is something they will actually open every evening. In that case, the launch is better framed as route, placement, and report validation rather than fixed improvement claims.",
    "testimony.1.footer": "— Bedside snore scenario",
    "testimony.2.body": "In baby-room use, the current product is better understood as local environment awareness, nighttime prompting, and a scenario companion. It may reduce confusion, but the site should not present it as a fully validated active protection system yet.",
    "testimony.2.footer": "— Baby-room observation scenario",
    "testimony.3.body": "For power naps, phone-only or bluetooth trial routes are the more realistic fit. The value there is faster settling, layered soundscapes, and light softening, not a claim of a stable strong QuietZone.",
    "testimony.3.footer": "— Nap trial scenario",
    "footer.tagline": "Sleep is the finest luxury.",
    "footer.product": "Product",
    "footer.product1": "How it works",
    "footer.product2": "Core features",
    "footer.product3": "Visualization",
    "footer.product4": "Free download",
    "footer.people": "For",
    "footer.people1": "Snore relief",
    "footer.people2": "Baby guard",
    "footer.people3": "Power naps",
    "footer.about": "About",
    "footer.about1": "Privacy",
    "footer.about2": "Terms",
    "footer.about3": "Contact",
    "footer.copy": "© 2026 SleeePal · sleeepal.com",
    "footer.disclaimer": "SleeePal is a non-medical sleep assistance tool. It does not provide diagnosis or medical advice. Real-world performance depends on space, hardware, and placement."
  }
};

const root = document.documentElement;
const titleEl = document.querySelector("#page-title");
const descEl = document.querySelector("#page-description");
const toggle = document.querySelector("[data-lang-toggle]");
const releaseNodes = {
  downloadLink: document.querySelector(".btn-lux-download"),
  downloadSub: document.querySelector(".dl-lux-sub"),
  downloadSysreq: document.querySelector(".dl-sysreq"),
  buttonLabel: document.querySelector("[data-release-button-label]"),
  releaseLabel: document.querySelector("[data-release-label]"),
  releaseVersion: document.querySelector("[data-release-version]"),
  releaseTime: document.querySelector("[data-release-time]"),
  releaseNote: document.querySelector("[data-release-note]"),
  releaseProgress: Array.from(document.querySelectorAll("[data-release-progress]")),
};

let currentRelease = {
  version: "0.3.4",
  buildTime: "pending packaging",
  buildNote: {
    zh: "夜报 · 今晚重点 · 蓝牙试用 · 有线校准",
    en: "Night report · focus loop · bluetooth trial · wired calibration",
  },
  downloadPath: "https://github.com/HiClawBot/Sleeepal",
  downloadSub: {
    zh: "官网升级版已公开 · App 产物将在验证完成后单独发布",
    en: "The refreshed website is now public · app builds will be released separately after validation",
  },
  downloadButton: {
    zh: "查看 GitHub 项目",
    en: "View GitHub project",
  },
  sysreq: {
    zh: "官网已上线 · 二进制产物后续发布",
    en: "Website is live · binaries will follow later",
  },
  releaseLabel: {
    zh: "当前构建",
    en: "Current build",
  },
  packagedLabel: {
    zh: "打包时间",
    en: "Packaged",
  },
  progress: {
    zh: [
      "首发定位：Mac 桌面版先落地，三轨可视化与夜报已经接通。",
      "低门槛上手：蓝牙可先试用建立体验，再逐步引导到有线路径。",
      "Companion 路线：iPhone 继续承接 setup、场景入口、报告查看与 follow-up。",
    ],
    en: [
      "Launch shape: Mac desktop first, with three-track visuals and night reports already connected.",
      "Lower-friction onboarding: bluetooth can be the trial path before a wired upgrade.",
      "Companion path: iPhone continues to handle setup, scenarios, report viewing, and follow-up.",
    ],
  },
};

function getCurrentLang() {
  return localStorage.getItem("sleeepal-lang") || "zh";
}

function pickLocalized(value, lang, fallback = "") {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  return value[lang] || value.zh || value.en || fallback;
}

function applyReleaseInfo(lang) {
  const packagedLabel = pickLocalized(currentRelease.packagedLabel, lang, "Packaged");
  const progress = currentRelease.progress?.[lang] || currentRelease.progress?.zh || [];

  if (releaseNodes.downloadLink && currentRelease.downloadPath) {
    releaseNodes.downloadLink.setAttribute("href", currentRelease.downloadPath);
  }
  if (releaseNodes.downloadSub) {
    releaseNodes.downloadSub.textContent = pickLocalized(currentRelease.downloadSub, lang, "");
  }
  if (releaseNodes.buttonLabel) {
    releaseNodes.buttonLabel.textContent = pickLocalized(currentRelease.downloadButton, lang, "");
  }
  if (releaseNodes.downloadSysreq) {
    releaseNodes.downloadSysreq.textContent = pickLocalized(currentRelease.sysreq, lang, "");
  }
  if (releaseNodes.releaseLabel) {
    releaseNodes.releaseLabel.textContent = pickLocalized(currentRelease.releaseLabel, lang, "");
  }
  if (releaseNodes.releaseVersion && currentRelease.version) {
    releaseNodes.releaseVersion.textContent = `v${currentRelease.version}`;
  }
  if (releaseNodes.releaseTime && currentRelease.buildTime) {
    releaseNodes.releaseTime.textContent = `${packagedLabel} · ${currentRelease.buildTime}`;
  }
  if (releaseNodes.releaseNote && currentRelease.buildNote) {
    releaseNodes.releaseNote.textContent = pickLocalized(currentRelease.buildNote, lang, "");
  }
  releaseNodes.releaseProgress.forEach((node, index) => {
    node.textContent = progress[index] || "";
  });
}

async function loadReleaseInfo() {
  try {
    const response = await fetch("./release.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    currentRelease = { ...currentRelease, ...data };
  } catch (error) {
    console.debug("Unable to load release metadata:", error);
  }
  applyReleaseInfo(getCurrentLang());
}

function applyLanguage(lang) {
  const copy = translations[lang] || translations.zh;
  root.lang = lang === "en" ? "en" : "zh-CN";
  document.title = copy.title;
  if (titleEl) titleEl.textContent = copy.title;
  if (descEl) descEl.setAttribute("content", copy.description);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (copy[key]) node.textContent = copy[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.getAttribute("data-i18n-html");
    if (copy[key]) node.innerHTML = copy[key];
  });

  if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
  localStorage.setItem("sleeepal-lang", lang);
  applyReleaseInfo(lang);
}

const initialLang = getCurrentLang();
applyLanguage(initialLang);
loadReleaseInfo();

toggle?.addEventListener("click", () => {
  const next = getCurrentLang() === "zh" ? "en" : "zh";
  applyLanguage(next);
});
