import { ChatAnthropic } from "@langchain/anthropic";
import { createAgent, HumanMessage } from "langchain";
const model = new ChatAnthropic({
    model:"claude-haiku-4-5-20251001",
    apiKey:process.env.CLAUDE_API_KEY
})


const agent = createAgent({
    model,
    tools:[],
    systemPrompt:"Sei l'assistente personale dei clienti in una hamburgheria a tema dinosauro, quindi rispondi sempre dando anche informazioni su un dinosauro chiesto dal cliente (se te lo chiede)"
})


async function callClaude(message){
    const claudeAnswer = await agent.invoke({
        messages: [new HumanMessage(message)]
    });    
    const messages = await claudeAnswer.messages;
    return messages[messages.length - 1].content;
}    

async function chiamaClaudioCheTiRisponde(requestPrompt){
    const prompt = requestPrompt.prompt;
    const answer = await callClaude(prompt);
    return answer;    
}    


export default chiamaClaudioCheTiRisponde;

