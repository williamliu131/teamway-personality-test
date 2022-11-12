import React from 'react';
import { useRouter } from 'next/router'
import Button from 'components/Core/Button';
import { ResultSectionContainer } from './styles';

const ResultSection = () => {
  const router = useRouter();
  const { personality } = router.query;

  return (
    <ResultSectionContainer className="result-section--container">
      <div className="result-section--wrapper">
        <h4 className="text-2xl text-center font-thin">Your Result</h4>
        <h2 className="text-4xl text-center font-extralight mt-[10px]">{personality === 'introvert' ? 'You are more of a private introvert' : 'You are more of a public extrovert'}</h2>
        {personality === 'introvert' ? (
          <p className="text-md">
            In public and at work you are a ball of energy perpetually on the move. You take the initiative, encourage others, hate waiting and are endlessly anticipating what’s going on around you. You take real pleasure in managing everything, much like the conductor of an orchestra. You enjoy being noticed by your work peers and your anxiety is linked more to the thought of leaving others indifferent. You need other’s attention to fully exist, but once you’ve crossed the threshold of your home, it’s another matter. You no longer take initiatives, but leave others to decide in your place. When your partner asks you to make a choice or give an opinion about holiday destinations, dinner menus or the children’s activities, you offer little or no input. You’re not comfortable and don’t know how to react and those around you often interpret your passiveness as a lack of interest or a certain reticence.
          </p>
        ) : (
          <p className="text-md">
            The reactions of those around you may make you feel the need to revise your behaviour to close the gap between the two poles of your life. People feel that you compensate in one area of life (public), which you have trouble handling on the other side (private). The public over-activity into which you throw yourself prevents you from expressing your emotions and feelings. At work, rationality and efficiency is asked of you, but even there, emotions and feelings are unavoidable. It’s not by denying or pushing them out of your attention that they cease to exist. Instead, by forcing them out of your conscious mind, they govern you unconsciously. Why are you so afraid of your emotions? What are you afraid of finding deep within yourself? This over-investment in public and professional life could well be, to a certain degree, running away from whatever it is that you don’t master or control. You’d win some inner serenity if you accepted to walk the road of self-knowledge.
          </p>
        )}
        <Button className="min-w-[15rem] font-thinm mt-8" onClick={() => router.push(`/`)}>Test Again</Button>
      </div>
    </ResultSectionContainer>
  )
}

export default ResultSection;