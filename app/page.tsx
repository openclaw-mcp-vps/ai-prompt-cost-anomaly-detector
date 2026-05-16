export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect unusual AI prompt costs<br />
          <span className="text-[#58a6ff]">before bills shock you</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your OpenAI or Anthropic account. We monitor usage patterns, flag anomalies with statistical detection, and alert you the moment spending goes off the rails.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $29 / mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Usage Monitoring", desc: "Continuously pulls OpenAI & Anthropic usage data and tracks rolling cost averages." },
            { icon: "🚨", title: "Anomaly Alerts", desc: "Statistical spike detection sends email or webhook alerts the moment costs deviate." },
            { icon: "💡", title: "Optimization Tips", desc: "Actionable suggestions to reduce token waste and cut your monthly AI bill." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#58a6ff] font-semibold mb-6">Pro Plan</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "OpenAI + Anthropic integration",
              "Real-time anomaly detection",
              "Email & webhook alerts",
              "Configurable thresholds",
              "30-day cost history",
              "Optimization recommendations"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does anomaly detection work?",
              a: "We calculate rolling averages and standard deviations over your historical usage. When a period's cost exceeds your configured threshold (e.g. 2× the rolling mean), we trigger an alert immediately."
            },
            {
              q: "Which AI providers are supported?",
              a: "Currently OpenAI and Anthropic. We use their official usage APIs to pull token counts and costs on a configurable polling interval."
            },
            {
              q: "What alert channels are available?",
              a: "Email alerts are included out of the box. You can also configure a webhook URL to pipe alerts into Slack, PagerDuty, or any HTTP endpoint."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} AI Prompt Cost Anomaly Detector. All rights reserved.
      </footer>
    </main>
  );
}
