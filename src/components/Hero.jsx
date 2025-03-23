import React, { useEffect, useState } from 'react'

const Hero = () => {

    const reactions = [
        { id: 1, emoji: "👍", count: 3, position: { top: "-5%", left: "15%" } },
        { id: 2, emoji: "🎉", count: 5, position: { top: "45%", left: "-5%" } },
        { id: 3, emoji: "💡", count: 8, position: { top: "50%",left: "95%" } },
      ];
      const [showReactions, setShowReactions] = useState(false);

      useEffect(() => {
        setTimeout(() => setShowReactions(true), 500);
      }, []);      
return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 '>
            <div className=' flex flex-col text-[#1D1D1E] items-center md:items-start gap-2 md:gap-4 lg:mr-16'>
                    <h1 className=' font-bold text-lg text-center md:text-start md:text-4xl lg:text-6xl md:font-bold'>Slack is where the future works</h1>
                    <p className=' text-center md:text-start lg:leading-[-1.3px]'>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
                    <div className=' flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-2 h-full mt-8 md:mt-4'>
                    <a  className="bg-[#532755] text-sm text-white w-full text-center p-3 px-4 rounded-sm flex items-center justify-center h-12" href="#">TRY FOR FREE</a>
                    <a  className="bg-[#2D85ED] flex gap-2 text-sm items-center text-white min-w-64 text-center p-1 rounded-sm h-12" href="#"><img className=' h-10 w-14 object-cover' src='assets/google.png'/>SIGN UP WITH GOOGLE</a>
            </div>
            </div>
            <div className=' relative rounded-xl '>
                    <video className=' rounded-xl ' src="/assets/hero-video.webm" playsInline poster='https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/static/hero@2x.IN.jpg' loop muted autoPlay></video>
                    {showReactions &&
            reactions.map((reaction) => (
                <div
                    key={reaction.id}
                    className="reaction"
                    style={{
                        top: reaction.position.top,
                        left: reaction.position.left,
                    }}
                >
                    <span>{reaction.emoji}</span>
                    <span>{reaction.count}</span>
                </div>
            ))}
            </div>
     
    </div>
)
}

export default Hero