export function checkInput(input: string) {
  if (input.includes("greentech corp")) {
    return "Sure, Markus. Here’s a quick summary: GreenTech Corp focuses on renewable energy solutions. Recently, they shared updates about expanding into solar storage systems and posted sustainability goals that align with our product portfolio. Additionally, in your last email exchange, the customer mentioned challenges with inventory management and cost optimization. Should I pull up potential solutions we’ve discussed with similar clients?";
  } else if (input.includes("recent wins")) {
    return "Brilliant idea. I’ll incorporate recent wins into my standard briefing for you in the future. Just recently, our colleague Sarah closed a deal with a company similar to GreenTech. Should I schedule a quick exchange with her? I’ll also incorporate insights from her engagement into my briefing for you. Additionally, I’ve prepared a tailored list of questions to probe further into their challenges. Would you like me to brief you verbally now or summarize the briefing in a written format?";
  } else if (input.includes("60")) {
    return `Sure. Here’s your 60-second briefing: 
    - You’re meeting Alex, CEO. He’s a fitness enthusiast with a startup mentality and values bold, forward-thinking ideas that can disrupt the market. He’ll likely appreciate solutions emphasizing growth, scalability, and competitive edge. Speak to big-picture strategies that align with GreenTech’s vision for innovation and sustainability.
    - Lucas, COO, is also attending. He’s recently developed an interest in triathlons and is process-driven and detail-oriented. Lucas is passionate about optimizing operations and ensuring efficiency. Focus on operational benefits – how we streamline processes, reduce inefficiencies, and support long-term scalability. Be prepared to address technical and logistical questions.
    - GreenTech’s biggest challenges, based on your latest email interactions and data from similar companies, are working capital and cash flow management. Highlight how our AI solutions can drive growth while ensuring financial stability.
   `;
  } else if (input.includes("focus on")) {
    return "You had one meeting with Lucas 5 months ago and stated a positive sentiment after it. However, there was no detailed opportunity identified back than due to re-organizations.";
  } else if (input.includes("please summarize")) {
    return `Of course. Here’s what I captured: 
    -	They’re looking to integrate a solar storage system into their existing infrastructure. 
    -	Their main concern is the upfront cost and implementation timeline. 
    -	They’re also interested in how our software integrates with their current system landscape and delivers fast time-to-value while considering cash flow limitations. Should I draft an initial proposal?`;
  } else if (input.includes("absolutely")) {
    // TODO: Add PDF 1
    return "Based on their interest in solar storage, I recommend highlighting our SolarFlex+ solution. It aligns with their goals and offers a competitive implementation timeline. For pricing, should we include flexible payment options to accommodate their cash flow concerns? Additionally, referencing a deal from Sarah and similar cases, applying a 10% discount increases the likelihood of closing the deal by 26%. Would you like me to apply this discount?";
  } else if (input.includes("sounds good")) {
    // TODO: Diagramm 1
    return "Here’s a bar chart showing your sales this quarter at 70% achievement.";
  } else if (input.includes("deal forecast")) {
    // TODO: Diagramm 2
    return "Done. With a 10% discount, your achievement rate rises to 102%. Without it, the rate is 95% due to a lower likelihood of closing.";
  } else if (input.includes("10 percent")) {
    // TODO: Add PDF 2
    return "Done. look at it.";
  } else if (input.includes("my calend")) {
    return `Email with the offer has been sent to GreenTech Corp. The email includes the proposal document along with a personalized message highlighting the key benefits of SolarFlex+. Additionally, I have suggested three possible follow-up meeting times: 
    -	February 7th at 10:00 AM 
    -	February 9th at 2:00 PM 
    -	February 12th at 4:30 PM 
  These options are now added to your Microsoft calendar.
`;
  }
  return "";
}
