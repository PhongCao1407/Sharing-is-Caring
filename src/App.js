import './App.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const section__content = document.querySelectorAll('.section-content');

    const appearOptions = {
      rootMargin: "0px",
      threshold: 0.75
    };

    const appearOnScroll = new IntersectionObserver(
        (entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear"); 
            }
            else {
                entry.target.classList.add("appear"); 
            }
        });
    },
    appearOptions);

    section__content.forEach(section => {
        appearOnScroll.observe(section);
    });

  })

  return (
    <div className="App">
      <div className="section intro">
        <div className="wrapper section-content">
          <h1>Blizzard: Workers Rights</h1>
        </div>
        
      </div>
      <div className="section info part1">
        <div className="header section-content">
          <h2>Part I:<br/>The Workers Conditions</h2>
        </div>

        
        <div className="text section-content">
          <h3>
            Long-standing issues regarding labor rights plague workers in the video game industry.
          </h3>
          <ul>
            <li>Long Working Hours</li>
            <li>Low Pays</li>
            <li>Job Security</li>
            <li>Racism</li>
            <li>Sexual Harrassment</li>
          </ul>

        </div>
        
      </div>

      <div className="section info part2">
        <div className="header section-content">
          <h2>Part II:<br/>Collectivization</h2>
        </div>

        
        <div className="text section-content">
          <h3>
            Two seperate groups of QA testers at Blizzard had collectivized and formed union within their respective teams.
          </h3>
          <ul>
            <li>Ravens Software</li>
            <li>Blizzard Albany</li>
          </ul>

        </div>
        
      </div>

      <div className="section info part3">
        <div className="header section-content">
          <h2>Part III:<br/>Blizzard Strikes Back</h2>
        </div>

        <div className="text section-content">
          <h3>
            In response to the collectivization efforts by its workers, Blizzard employed illegal and unethicals tactics and strategies to disrupt their efforts.
          </h3>
          <ul>
            <li>Witheld wage increases to Union Workers</li>
            <li>Demanded expansion of Union voting pool to dilute workers voting power</li>
            <li>Hired Union busting law firm</li>
            <li>Purposefully delaying union negotiations</li>
          </ul>

        </div> 
       
      </div>

      <div className="section info part4">
        <div className="header section-content">
          <h2>Part IV:<br/>The Struggle Continues</h2>
        </div>

        
        <div className="text section-content">
          <h3>
            The workers at Blizzard continued with their struggles for labor rights ahead of the resistances from Blizzard.
          </h3>
          <ul>
            <li>NLRB found Blizzard's actions to be in violation of Workers Rights</li>
            <li>The successful formation of unions at Blizzard sparks hopes among workers of the Video Game Industry</li>
          </ul>

        </div> 
        
      </div>

    </div>
  );
}

export default App;
