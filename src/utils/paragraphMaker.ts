export default function paragraphMaker(text, matcher){
    if(!matcher){
        return text
    } else {
        const paragraphs = text.split(matcher);
        return paragraphs
    }
  }