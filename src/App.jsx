import { useState } from "react";
import {
  ArrowRight, BookOpen, Brain, Check, ChevronRight, Clock3, Compass,
  Lightbulb, LockKeyhole, Menu, Play, Sparkles, Star, Telescope, X
} from "lucide-react";

const topics = [
  { id: "ai-around-us", title: "AI is all around us", tag: "START HERE", time: "4 min", icon: "🌍", color: "blue", description: "Find the clever technology hiding in everyday things.", detail: "AI can help a phone understand your voice, suggest a song, or help a camera recognize a face. It is not magic. It is technology made by people.", example: "When a music app suggests a song you might enjoy, AI may be helping choose what to play next.", question: "Is AI involved when a map suggests a faster route?", answer: "It can be! Some map apps use AI to study patterns and suggest routes. They also use other kinds of software and live information." },
  { id: "learning", title: "How machines learn", tag: "BIG IDEA", time: "5 min", icon: "🧩", color: "purple", description: "Teach a computer by showing it lots of examples.", detail: "Machine learning is a way for computers to find patterns in examples. Instead of writing every single rule, people give a computer examples and a learning method.", example: "Show a learning system many pictures of cats and dogs. It can begin to notice patterns that help it tell them apart.", question: "If it sees only cats, can it learn what makes a dog different?", answer: "Not very well! It needs examples of dogs too. Good examples help a learning system learn the difference." },
  { id: "training", title: "Training data detectives", tag: "LOOK CLOSER", time: "4 min", icon: "🔎", color: "orange", description: "Discover why examples matter and how they shape AI.", detail: "Training data is the collection of examples used to teach an AI system. The examples need to be useful, varied and carefully checked.", example: "If you teach a toy sorter using only red apples, it may struggle when it sees a green apple.", question: "Can unfair or missing examples cause mistakes?", answer: "Yes. If important examples are missing, the system may work well for some things but poorly for others." },
  { id: "patterns", title: "Spot the pattern", tag: "TRY IT", time: "5 min", icon: "🧠", color: "green", description: "See how computers find groups and connections.", detail: "A pattern is something that repeats or connects. Some AI systems look for patterns in information, even when nobody tells them exactly what groups to make.", example: "A system might group music by similar sounds, or group pictures that have things in common.", question: "Does finding a pattern always mean understanding it?", answer: "No. A computer can find a pattern without understanding the world the way a person does." },
  { id: "language", title: "How AI uses words", tag: "WORDS & IDEAS", time: "5 min", icon: "💬", color: "pink", description: "Meet language models and see how they work with words.", detail: "A large language model (LLM) is an AI system trained with lots of text. It learns patterns in language and can use them to create a response.", example: "When you ask a writing helper to suggest a story ending, a language model can create words that fit your request.", question: "Does an LLM know every answer is true?", answer: "No. It can make mistakes or invent details. Important answers should be checked." },
  { id: "prompts", title: "Give AI a good clue", tag: "BE A GUIDE", time: "4 min", icon: "🗺️", color: "teal", description: "Learn how clear instructions can lead to better results.", detail: "A prompt is the instruction or question you give an AI system. Clear instructions help explain what you want. Extra useful information can give it better context.", example: "“Tell me about space” is broad. “Explain why the Moon changes shape, using three short sentences” gives clearer directions.", question: "Can a better prompt guarantee a perfect answer?", answer: "No. A clear prompt can help, but AI can still misunderstand or make mistakes." }
];

const extraTopics = [
  { title: "Neural networks", icon: "🕸️", description: "A computer system inspired by some ideas about how brains connect." },
  { title: "AI assistants and agents", icon: "🤖", description: "Explore tools that can plan steps and help complete a task." },
  { title: "AI with extra information", icon: "📚", description: "See how AI can use trusted notes or documents to answer a question." },
  { title: "Reasoning and checking", icon: "🧭", description: "Learn why some AI systems work through problems and why checking still matters." }
];

function App() {
  const [age, setAge] = useState("5–9");
  const [activeTopic, setActiveTopic] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizChoice, setQuizChoice] = useState("");
  const [quizChecked, setQuizChecked] = useState(false);
  const selected = topics.find((topic) => topic.id === activeTopic);

  const openTopic = (id) => {
    setActiveTopic(id);
    setQuizChoice("");
    setQuizChecked(false);
    setMenuOpen(false);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" onClick={() => setActiveTopic(null)} aria-label="AI Explorers home">
          <span className="brand-mark"><Sparkles size={23} /></span>
          <span><strong>AI Explorers</strong><small>Curious minds. Clever discoveries.</small></span>
        </a>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#discover" onClick={() => setMenuOpen(false)}>Discover</a>
          <a href="#topics" onClick={() => setMenuOpen(false)}>Explore topics</a>
          <a href="#our-promise" onClick={() => setMenuOpen(false)}>Our promise</a>
        </nav>
        <div className="top-actions">
          <div className="age-picker" aria-label="Choose age group">
            <button className={age === "5–9" ? "selected" : ""} onClick={() => setAge("5–9")}>Ages 5–9</button>
            <button className={age === "10–15" ? "selected" : ""} onClick={() => setAge("10–15")}>10–15 <span>Soon</span></button>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      {age === "10–15" && <div className="coming-banner"><Sparkles size={16} /> The 10–15 learning path is coming soon. It will explore the same ideas in more depth, with bigger challenges and more real-world examples.</div>}

      <section className="hero" id="discover">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR ADVENTURE STARTS HERE</div>
          <h1>Discover the<br /><span>world of AI.</span></h1>
          <p className="hero-lead">Have you ever wondered how a computer can recognize a voice, suggest a song, or help make a picture?</p>
          <p className="hero-sub">Let's explore how artificial intelligence works — one small discovery at a time.</p>
          <button className="primary-button" onClick={() => openTopic(topics[0].id)}>Start exploring <ArrowRight size={18} /></button>
          <div className="hero-note"><Clock3 size={15} /> Short lessons · Fun experiments · Made for curious kids</div>
        </div>
        <div className="hero-art" aria-label="Illustration of a friendly robot exploring ideas">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="float-star star-one">✦</span><span className="float-star star-two">✧</span>
          <span className="float-chip chip-one">THINK</span><span className="float-chip chip-two">EXPLORE</span>
          <div className="planet planet-one" /><div className="planet planet-two" />
          <div className="robot">
            <div className="antenna"><i /></div>
            <div className="robot-head"><div className="ear ear-left" /><div className="ear ear-right" /><div className="eyes"><i /><i /></div><div className="smile" /><div className="cheek cheek-left" /><div className="cheek cheek-right" /></div>
            <div className="robot-body"><span className="robot-heart">✦</span><i className="arm arm-left" /><i className="arm arm-right" /></div>
          </div>
          <div className="art-caption"><Sparkles size={15} /> Your AI adventure buddy</div>
        </div>
      </section>

      <section className="learning-promise" id="our-promise">
        <div className="promise-icon"><Lightbulb size={25} /></div>
        <div><span className="section-kicker">A DIFFERENT WAY TO LEARN</span><h2>Don't just learn about AI. Learn to <em>recognize</em> it.</h2><p>As you explore, keep asking four important questions:</p></div>
        <div className="question-grid">
          {["Is AI involved here?", "What is the AI doing?", "How does it know what to do?", "Can it make mistakes?"].map((q, i) => <div className="question-pill" key={q}><b>0{i + 1}</b>{q}</div>)}
        </div>
      </section>

      <section className="topics-section" id="topics">
        <div className="section-heading"><div><span className="section-kicker">PICK YOUR NEXT DISCOVERY</span><h2>What shall we explore?</h2><p>Start anywhere. Every lesson is a little adventure.</p></div><div className="lesson-count"><BookOpen size={17} /> {topics.length} mini lessons</div></div>
        <div className="topic-grid">
          {topics.map((topic, i) => <button className="topic-card" key={topic.id} onClick={() => openTopic(topic.id)}>
            <div className={"topic-illustration " + topic.color}><span>{topic.icon}</span><small>{String(i + 1).padStart(2, "0")}</small></div>
            <div className="topic-meta"><span>{topic.tag}</span><span><Clock3 size={12} /> {topic.time}</span></div>
            <h3>{topic.title}</h3><p>{topic.description}</p>
            <div className="card-link">Explore lesson <ChevronRight size={16} /></div>
          </button>)}
        </div>
      </section>

      <section className="coming-topics">
        <div className="coming-heading"><div className="coming-icon"><Telescope size={23} /></div><div><span className="section-kicker">MORE TO DISCOVER</span><h2>Our universe keeps growing</h2><p>More AI ideas will join the adventure.</p></div></div>
        <div className="extra-grid">{extraTopics.map((item) => <div className="extra-card" key={item.title}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><LockKeyhole size={15} className="lock-icon" /></div>)}</div>
      </section>

      <section className="safety-strip"><div className="safety-icon"><LockKeyhole size={21} /></div><div><strong>A safe place to be curious</strong><p>No open chat with strangers. No need to share personal details. Just learning, exploring and asking good questions.</p></div><span className="safety-spark">✦</span></section>

      <footer className="footer"><a className="footer-brand" href="#"><span className="brand-mark"><Sparkles size={18} /></span><strong>AI Explorers</strong></a><p>Made for curious minds and big questions.</p><div className="footer-credit">Created by <strong>AMIR FATEMI</strong><span>© 2026 AMIR FATEMI. All rights reserved.</span></div></footer>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveTopic(null); }}>
        <section className="lesson-modal" role="dialog" aria-modal="true" aria-labelledby="lesson-title">
          <button className="modal-close" onClick={() => setActiveTopic(null)} aria-label="Close lesson"><X size={20} /></button>
          <div className={"modal-art " + selected.color}><span>{selected.icon}</span><small>{selected.tag}</small></div>
          <div className="lesson-content"><div className="lesson-topline"><span><BookOpen size={14} /> MINI LESSON</span><span><Clock3 size={14} /> {selected.time}</span></div>
            <h2 id="lesson-title">{selected.title}</h2><p className="lesson-intro">{selected.detail}</p>
            <div className="example-box"><span>🌟 REAL-LIFE EXAMPLE</span><p>{selected.example}</p></div>
            <div className="think-box"><span><Brain size={16} /> STOP AND THINK</span><h3>{selected.question}</h3>
              <div className="answer-reveal"><strong>Think about it, then reveal a clue</strong><p>{selected.answer}</p></div>
            </div>
            <button className="lesson-done" onClick={() => setActiveTopic(null)}><Check size={17} /> Got it! Back to exploring</button>
          </div>
        </section>
      </div>}
    </main>
  );
}

export default App;