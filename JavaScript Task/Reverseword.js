function reverseWord(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

const inputSentence = "This is a Sunny day";
const reversedSentence = reverseWord(inputSentence);
console.log("Original Sentence: " + inputSentence);
console.log("Reversed Sentence: " + reversedSentence);