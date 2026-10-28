import { useEffect, useRef, useState } from 'react';

type ArtKind = 'scales' | 'book' | 'folder' | 'gavel' | 'mail' | 'court' | 'spark';
function PixelArt({ kind, className = '' }: { kind: ArtKind; className?: string }) {
  const dark = '#202725', light = '#f7f6f0', gold = '#f0c54e';
  return <svg viewBox="0 0 64 64" className={`pixel-art ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {kind === 'scales' && <><path fill={dark} d="M29 5h6v6h4v5h-4v34h11v5h6v5H12v-5h6v-5h11V16h-4v-5h4z"/><path fill={gold} d="M31 11h2v41h11v4H20v-4h11z"/><path fill={dark} d="M7 18h50v5H7zM10 23h3v5h-3zm-3 5h3v6H7zm-3 6h3v7H4zm9-6h3v6h-3zm3 6h3v7h-3zM45 23h3v5h-3zm-3 5h3v6h-3zm-3 6h3v7h-3zm9-6h3v6h-3zm3 6h3v7h-3z"/><path fill={gold} d="M1 41h21v5h-3v5H4v-5H1zM36 41h21v5h-3v5H39v-5h-3z"/><path fill={light} d="M5 42h13v3H5zM40 42h13v3H40z"/></>}
    {kind === 'book' && <><path fill={dark} d="M12 8h37v4h5v44H12V8z"/><path fill={light} d="M17 12h29v34H17zM17 49h32v3H17z"/><path fill={gold} d="M18 14h26v29H18z"/><path fill={dark} d="M24 22h14v3H24zM24 28h14v3H24zM29 33h5v5h-5z"/></>}
    {kind === 'folder' && <><path fill={dark} d="M5 18h21v5h33v31H5z"/><path fill={gold} d="M8 21h15v5h33v25H8z"/><path fill={light} d="M11 30h41v3H11z"/></>}
    {kind === 'gavel' && <g transform="rotate(-35 32 32)"><path fill={dark} d="M11 9h35v6h5v14h-5v6H11v-6H6V15h5zM25 35h8v25h-8z"/><path fill={gold} d="M14 12h29v20H14zM9 17h5v10H9zM43 17h5v10h-5zM27 35h4v22h-4z"/><path fill={light} d="M17 14h3v15h-3z"/></g>}
    {kind === 'mail' && <><path fill={dark} d="M5 16h54v36H5z"/><path fill={light} d="M8 19h48v30H8z"/><path fill={dark} d="M8 19h5v4h5v4h5v4h5v4h8v-4h5v-4h5v-4h5v-4h5v4h-5v4h-5v4h-5v4h-5v4h-8v-4h-5v-4h-5v-4h-5v-4H8z"/></>}
    {kind === 'court' && <><path fill={dark} d="M28 6h8v4h8v4h8v4h7v5H5v-5h7v-4h8v-4h8zM7 52h50v5H3v5h58v-5h-4v-5zM11 27h8v22h-8zM28 27h8v22h-8zM45 27h8v22h-8z"/><path fill={light} d="M13 28h3v19h-3zM30 28h3v19h-3zM47 28h3v19h-3zM28 13h8v4h-8z"/></>}
    {kind === 'spark' && <path fill={dark} d="M29 2h6v20h-6zM29 42h6v20h-6zM2 29h20v6H2zM42 29h20v6H42zM10 10h6v6h6v6h-6v-6h-6zM42 42h6v6h6v6h-6v-6h-6zM48 10h6v6h-6v6h-6v-6h6zM16 42h6v6h-6v6h-6v-6h6z"/>}
  </svg>;
}
function WindowBar({ title, onClose }: {title: string; onClose?: () => void}) { return <div className="window-bar"><button className="close-square" aria-label={`Close ${title}`} onClick={onClose} disabled={!onClose}/><span>{title}</span><i/></div> }
const practices = [
  {title:'Civil rights', file:'civil_rights.txt', text:'Rights are not privileges. From discrimination to due process, this practice is rooted in protecting the freedoms that belong to everyone.', tags:'Equal treatment / Constitutional rights / Accountability', icon:'scales' as ArtKind},
  {title:'Family law', file:'family_law.txt', text:'When life changes, thoughtful guidance matters. A human-first approach to separation, parenting, and finding a fair path forward.', tags:'Separation / Parenting agreements / Mediation', icon:'book' as ArtKind},
  {title:'Community advocacy', file:'community.txt', text:'Justice starts close to home. Helping neighbors understand their rights and giving community organizations a stronger voice.', tags:'Legal education / Community counsel / Public interest', icon:'court' as ArtKind},
];
export default function Tribute() {
  const [noteOpen,setNoteOpen]=useState(true), [selected,setSelected]=useState(0), [progress,setProgress]=useState(0);
  const dialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{ const update=()=>setProgress(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)); window.addEventListener('scroll',update,{passive:true}); update(); return ()=>window.removeEventListener('scroll',update); },[]);
  const consult=()=>dialog.current?.showModal();
  return <>
    <header className="menu"><a className="brand" href="#home"><PixelArt kind="scales"/><span>Morgan, Esq.</span></a><nav><a href="#story">The story</a><a href="#work">The work</a><a href="#principles">The principles</a><button onClick={consult}>Get in touch ↗</button></nav><span className="menu-right">EST. 2010 <span className="menu-dot"/></span><div className="reading-progress" style={{width:`${progress*100}%`}}/></header>
    <main>
      <section id="home" className="hero">
        <div className="hero-kicker"><span>A LIFE IN THE SERVICE OF JUSTICE</span><span>ATTORNEY · ADVOCATE · HUMAN</span></div>
        <h1>ALEX MORGAN<span className="title-star">*</span></h1>
        <div className="desktop">
          <a className="desktop-icon story-icon" href="#story"><PixelArt kind="book"/><span>My story</span></a>
          <a className="desktop-icon cases-icon" href="#work"><PixelArt kind="folder"/><span>The work</span></a>
          <button className="desktop-icon values-icon" onClick={()=>{setNoteOpen(true);document.getElementById('home')?.scrollIntoView();}}><PixelArt kind="spark"/><span>What I believe</span></button>
          <a className="desktop-icon court-icon" href="#principles"><PixelArt kind="court"/><span>Justice for all</span></a>
          <button className="desktop-icon contact-icon" onClick={consult}><PixelArt kind="mail"/><span>Say hello</span></button>
          <div className="retro-window mission-window" style={{visibility:noteOpen?'visible':'hidden'}}><WindowBar title="a_simple_belief.txt" onClose={()=>setNoteOpen(false)}/><div className="mission-content"><span className="file-label">THE MISSION</span><h2>THE LAW IS FOR<br/>EVERYONE.<br/>NOT JUST THE<br/><mark>POWERFUL.</mark></h2><p>A little empathy. A lot of conviction.<br/>And the courage to stand up.</p><span className="blink-cursor">▌</span></div></div>
          <div className="retro-window art-window"><WindowBar title="justice.paint"/><div className="paint-content"><div className="paint-tools">↖<br/>▧<br/>✎<br/>▨<br/>⌕<br/>▰</div><div className="art-canvas"><span>MAKE A CASE.<br/>MAKE A DIFFERENCE.</span><PixelArt kind="scales" className="hero-scales"/><div className="pixel-ground"/></div></div><div className="paint-bottom"><span>▧ ▨ ▩ ▦ ▥ ▤</span><span>100%</span></div></div>
          <div className="desktop-note">Not all heroes wear capes.<br/>Some carry case files.</div>
          <span className="tiny-star star-one">✳</span><span className="tiny-star star-two">+</span>
        </div>
        <a className="scroll-cue" href="#story">SCROLL TO OPEN THE STORY <span>↓</span></a><div className="pixel-edge"/>
      </section>
      <section id="story" className="story section-paper">
        <div className="chapter-label"><span>01 / THE BEGINNING</span><span>EVERY STORY STARTS SOMEWHERE.</span></div>
        <h2>ALWAYS HAD A THING<br/>FOR <span className="highlight">WHAT'S RIGHT.</span></h2>
        <div className="story-grid"><aside><div className="little-window"><WindowBar title="early_days"/><PixelArt kind="book"/></div><span>BIG QUESTIONS.<br/>SMALL BEGINNINGS.</span></aside><div className="story-copy"><p className="intro">Before the courtroom,<br/>there was a simple question:<br/>“But is that fair?”</p><p>Growing up, Alex was the one who spoke up. For the quiet kid. For the overlooked neighbor. For anyone who needed someone in their corner.</p><p>Law wasn't the first dream. Making a difference was. It just turned out that the law was a pretty good place to start.</p><h3>SO THE QUESTION BECAME<br/>A CALLING.</h3><p>One law degree. Countless late nights.<br/>One belief that never changed:<br/><mark>everyone deserves to be heard.</mark></p></div><div className="story-art"><PixelArt kind="gavel"/><span>JUSTICE IS A VERB.</span></div></div>
      </section>
      <section id="principles" className="principles section-paper"><div className="retro-window quote-window"><WindowBar title="a_note_to_self.txt"/><div className="quote-body"><span>02 / THE COMPASS</span><blockquote>“A good lawyer knows the law.<br/>A great one remembers<br/>the <em>person</em> behind the case.”</blockquote><span>— THE IDEA THAT GUIDES THE WORK</span></div></div><div className="principle-row"><span>LISTEN FIRST.</span><PixelArt kind="spark"/><span>STAND FIRM.</span><PixelArt kind="spark"/><span>KEEP IT HUMAN.</span></div></section>
      <section id="work" className="work"><div className="chapter-label"><span>03 / THE WORK</span><span>CONVICTION, PUT INTO PRACTICE.</span></div><div className="work-header"><h2>IN YOUR<br/>CORNER.</h2><p>Different cases. The same commitment.<br/>A clear voice when it matters most.</p></div><div className="work-layout"><div className="practice-tabs" role="tablist" aria-label="Practice areas">{practices.map((p,i)=><button key={p.title} id={`tab-${i}`} role="tab" aria-selected={i===selected} aria-controls="practice-panel" onClick={()=>setSelected(i)}><span>0{i+1}</span>{p.title}<span className="tab-arrow">{i===selected?'↗':'+'}</span></button>)}</div><div className="retro-window practice-window" id="practice-panel" role="tabpanel" aria-labelledby={`tab-${selected}`}><WindowBar title={practices[selected].file}/><div className="practice-content"><PixelArt kind={practices[selected].icon}/><h3>{practices[selected].title}</h3><p>{practices[selected].text}</p><div className="tags">{practices[selected].tags}</div><button className="text-link" onClick={consult}>Let's talk about it ↗</button></div></div></div></section>
      <section className="contact" id="contact"><div className="chapter-label"><span>04 / THE NEXT CHAPTER</span><span>LET'S WRITE IT TOGETHER.</span></div><PixelArt kind="mail"/><h2>GOOD THINGS START<br/>WITH A <button onClick={consult}>CONVERSATION ↗</button></h2><p>Have a question? A story? Something worth standing up for?</p><button className="retro-button" onClick={consult}>Open a conversation <span>↗</span></button><footer><a href="#home">ALEX MORGAN, ESQ.</a><span>A fictional tribute · Sample content</span><a href="#home">Back to top ↑</a></footer></section>
    </main>
    <dialog ref={dialog} className="retro-window consultation"><WindowBar title="start_a_conversation.txt" onClose={()=>dialog.current?.close()}/><div className="dialog-content"><PixelArt kind="mail"/><h2>LET'S TALK.</h2><p>This is an illustrated demo for a fictional lawyer. No appointment requests are sent or collected.</p><p>Ready for your own story? Replace Alex’s sample biography, practice areas, and contact details with yours.</p><button className="retro-button" onClick={()=>dialog.current?.close()}>Back to the story ↵</button></div></dialog>
  </>;
}
