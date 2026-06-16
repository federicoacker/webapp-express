import { ChatAnthropic } from "@langchain/anthropic";
import { createAgent, HumanMessage } from "langchain";
import connection from "../data/db.js"
import productSelectAll from "../data/queries/productSelectAll.js";
import { validateNumber } from "./validation/validateNumber.js";

const model = new ChatAnthropic({
    model:"claude-haiku-4-5-20251001",
    apiKey:process.env.CLAUDE_API_KEY
})

const BASE_SYSTEM_PROMPT = `Sei l'assistente personale dei clienti in una hamburgheria a tema dinosauro.
    Rispondi in modo amichevole, chiaro e utile.
    Se il cliente chiede di dinosauri, aggiungi una breve curiosità pertinente.
    IMPORTANTISSIMO: Rispondi sempre in formato html ciò che mi dai viene inserito direttamente come html nel mio sito, 
    quindi non rispondere in markdown con dentro html ma direttamente in html. Il formato in cui mi devi rispondere è di questo tipo
    <div>
        Qui ci metti il tuo html, evitando il tag html, deve essere solo un fragment come se fosse un componente di React
    </div>
    QUINDI PER ESSERE SICURI, NON VOGLIO VEDERE \`\`\`html deve essere del puro codice html`;


const agent = createAgent({
    model,
    apiKey:process.env.CLAUDE_API_KEY,
    tools:[]
});




async function getMenuContext(limit = 40) {
    const validatedLimit = validateNumber(limit);
    const { result, error } = await productSelectAll({validatedLimit});

    if (error === 500) {
        return "Errore nel fetch dei dati dal database";
    }
    if (error === 404) {
        return "Non ci sono dati nel database";
    }

    return result
        .map((product, index) => `${index + 1}. ${product.name} (€${product.price}) - slug ${product.slug} - description ${product.description}`)
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
    const menuContext = await getMenuContext(40);

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
    }
    else {
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

