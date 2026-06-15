import { ChatAnthropic } from "@langchain/anthropic";
import { createAgent, HumanMessage } from "langchain";
import connection from "../data/db.js"
import productSelectAll from "../data/queries/productSelectAll.js";

const model = new ChatAnthropic({
    model:"claude-haiku-4-5-20251001",
    apiKey:process.env.CLAUDE_API_KEY
})

const BASE_SYSTEM_PROMPT = "Sei l'assistente personale dei clienti in una hamburgheria a tema dinosauro.     Rispondi in modo amichevole, chiaro e utile.     Se il cliente chiede di dinosauri, aggiungi una breve curiosità pertinente.";


const agent = createAgent({
    model,
    tools:[],
    systemPrompt:"Sei l'assistente personale dei clienti in una hamburgheria a tema dinosauro, quindi rispondi sempre dando anche informazioni su un dinosauro chiesto dal cliente (se te lo chiede)"
})


async function getMenuContext(limit = 5) {
    const { result, error } = await productSelectAll({ validatedLimit: limit });

    if (error || !result?.length) {
        return "Nessun prodotto disponibile in questo momento";
    }

    return result
        .map((product, index) => `${index + 1}. ${product.name} (€${product.price}) - slug ${product.slug}`)
        .join("\n");
}

async function saveAgentLog(prompt, answer) {
    const query = `INSERT INTO ai_chat_logs (prompt, answer, created_at) VALUES(?, ?, NOW());`;
    try{
        await connection.execute(query, [prompt, answer]);
    }catch (error){
        console.error("Errore salvataggio log chat:", error.message);
    }
}

async function callClaude(userMessage){
    const menuContext = await getMenuContext(5);

    const systemPromptFinale = `${BASE_SYSTEM_PROMPT} contesto menu attuale dal batabase: ${menuContext}`;

    //creo l'agente
    const agentDinamico = createAgent({
        model,
        tools:[],
        systemPrompt: systemPromptFinale
    });

    //invoco l'agente
    const claudeAnswer = await agentDinamico.invoke({
        messages: [new HumanMessage(userMessage)]
    });

    //estraggo la risposta
    const agentMessage = claudeAnswer.messages || [];
    const lastMessage = agentMessage[agentMessage.length - 1];

    let answerText = "";
    if(typeof lastMessage?.content === "string") {
        answerText = lastMessage.content;
    }else if (Array.isArray(lastMessage?.content)){
        answerText = lastMessage.content
            .map((chunk) => chunk?.text || "")
            .join("")
            .trim();
    }else {
        answerText = "Non sono riuscito a generare una risposta valida.";
    }

    //salvataggio conversazione in DB
    await saveAgentLog(userMessage, answerText);

    //restituzione risposta
    return answerText;
}    

async function chiamaClaudioCheTiRisponde(requestPrompt){
    const prompt = requestPrompt.prompt;
    const answer = await callClaude(prompt);
    return answer;    
}    


export default chiamaClaudioCheTiRisponde;

