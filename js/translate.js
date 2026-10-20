/* KUIC Worship — © 2026 Myat Toe (Matthew). All rights reserved. Not licensed for reuse. */
const s=t=>`https://papago.naver.com/?sk=en&tk=ko&st=${encodeURIComponent(t.slice(0,2e3))}`;async function l(){try{return"Translator"in self?await self.Translator.availability({sourceLanguage:"en",targetLanguage:"ko"})!=="unavailable":!1}catch{return!1}}let n=null;async function i(t,r){if(!await l())throw new Error("no-translator");n||(n=await self.Translator.create({sourceLanguage:"en",targetLanguage:"ko",monitor(a){a.addEventListener("downloadprogress",o=>r&&r(o.loaded))}}));const e=[];for(const a of String(t).split(`
`))e.push(a.trim()?await n.translate(a):"");return e.join(`
`)}export{s as papagoUrl,i as translateToKorean,l as translatorAvailable};
