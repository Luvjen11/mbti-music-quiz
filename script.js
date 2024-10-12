const questions = [
    {
        question: "The spotlight's on you, the audience is holding their breath, but—oh no!—you hit a wrong note. How do you respond?",
        answers: [
            { text: "Freeze for a heartbeat, recalibrate, and recover gracefully.", type: "I" },
            { text: "Keep playing confidently, turning a mistake into part of the performance.", type: "E" }
        ]
    },
    {
        question: "The director's rehearsal room is yours—what kind of space inspires your best music?",
        answers: [
            { text: "A quiet, focused practice room where I can fine-tune every detail.", type: "I" },
            { text: "A lively, creative space where I can experiment and flow with others.", type: "E" }
        ]
    },
    {
    question: "You’re preparing for the big concert. What’s your main focus during rehearsal?",
    answers: [
      { text: "Mastering the score note-for-note, ensuring every detail is flawless.", type: "S" },
      { text: "Bringing the music to life, even if it means improvising to capture the audience’s heart.", type: "N" }
    ]
  },
  {
    question: "As the applause rains down, what’s the compliment you hope to hear from the maestro?",
    answers: [
      { text: "Your technique is impeccable—flawless execution!", type: "T" },
      { text: "You played with such emotion and fire—truly moving!", type: "F" }
    ]
  },
  {
    question: "The maestro has stranded you on a deserted island (musically speaking, of course). What one thing would you take to keep yourself entertained?",
    answers: [
      { text: "My favorite sheet music—hours of disciplined practice await.", type: "J" },
      { text: "An instrument and my imagination—I’ll compose the soundtrack to my island adventure!", type: "P" }
    ]
  },
  {
    question: "The conductor suddenly changes the tempo. How do you react?",
    answers: [
      { text: "I adapt on the spot, going with the flow.", type: "P" },
      { text: "I find it challenging but do my best to keep pace.", type: "J" }
    ]
  },
  {
    question: "The director offers you a place in the orchestra. Where do you see yourself?",
    answers: [
      { text: "Front and center—I’m ready to lead or take the spotlight!", type: "E" },
      { text: "In the background, adding richness and depth to the ensemble’s sound.", type: "I" }
    ]
  },
  {
    question: "Imagine music is a conversation between instruments—how do you contribute to the dialogue?",
    answers: [
      { text: "I’m a careful listener, waiting for the perfect moment to make my entrance.", type: "I" },
      { text: "I dive right in, offering ideas and riffing off others’ energy!", type: "E" }
    ]
  },
  {
    question: "What type of music gets your heart racing and your fingers flying?",
    answers: [
      { text: "Fast, intricate pieces that challenge my technique and keep me sharp.", type: "T" },
      { text: "Slow, melodic compositions that let me lose myself in the emotion.", type: "F" }
    ]
  },
  {
    question: "In the orchestra, are you the soloist shining brightly, or the foundation holding it all together?",
    answers: [
      { text: "I’m all about the solo moments; I love to shine!", type: "E" },
      { text: "I enjoy blending in, creating harmony with the group. Jam session for life!", type: "I" }
    ]
  },
  {
    question: "The director hands you a duet—how do you ensure it’s a show-stopping success?",
    answers: [
      { text: "I focus on syncing perfectly with my partner, teamwork and precision are key.", type: "J" },
      { text: "I trust my part and let my partner shine in theirs—it’s all about balance.", type: "P" }
    ]
  },
  {
    question: "You’re learning a new piece. How do you dive in?",
    answers: [
      { text: "I break it down note by note, focusing on the technical details.", type: "S" },
      { text: "I let my ear guide me, feeling the music first.", type: "N" }
    ]
  }
];


let currentQuestionIndex = 0;
let userAnswers = [];

const githubRepoUrl = 'https://raw.githubusercontent.com/Luvjen11/mbti-music-quiz/main/';

function startQuiz() {
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    currentQuestionIndex = 0;
    userAnswers = [];
    displayQuestion();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress');
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = questions[currentQuestionIndex];

    let html = `<h2>${currentQuestion.question}</h2>`;
    currentQuestion.answers.forEach((answer, index) => {
        html += `
            <button class="answer-btn" onclick="nextQuestion('${answer.type}')">
                ${answer.text}
            </button>
        `;
    });

    questionContainer.innerHTML = html;
    updateProgressBar();
}

function nextQuestion(selectedType) {
    userAnswers.push(selectedType);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    const mbtiTypes = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'];
    let result = '';

    for (let i = 0; i < 4; i++) {
        const typeA = mbtiTypes[i * 2];
        const typeB = mbtiTypes[i * 2 + 1];
        const countA = userAnswers.filter(answer => answer === typeA).length;
        const countB = userAnswers.filter(answer => answer === typeB).length;
        result += countA > countB ? typeA : typeB;
    }

    console.log('Calculated MBTI type:', result);
    displayResult(result);
}

function getInstrumentImageUrl(instrument) {
    return `${githubRepoUrl}${instrument.toLowerCase()}_card.jpg.jpg`;
}

function displayResult(mbtiType) {
    const resultContainer = document.getElementById('result-container');
    const mbtiToInstrument = {
        'ISTJ': 'Clarinet', 'ISFJ': 'Violin', 'INFJ': 'Harp', 'INTJ': 'Piano',
        'ISTP': 'Saxophone', 'ISFP': 'Guitar', 'INFP': 'Flute', 'INTP': 'Trumpet',
        'ESTP': 'Drums', 'ESFP': 'Tambourine', 'ENFP': 'Triangle', 'ENTP': 'Trombone',
        'ESTJ': 'Tuba', 'ESFJ': 'Euphonium', 'ENFJ': 'Horn', 'ENTJ': 'Xylophone'
    };

    const instrument = mbtiToInstrument[mbtiType];

    if (!instrument) {
        console.error('Invalid MBTI type:', mbtiType);
        return;
    }

    document.getElementById('result-instrument').textContent = `Your perfect instrument is: ${instrument}`;

    const resultCard = document.getElementById('result-card');
    const imageUrl = getInstrumentImageUrl(instrument);
    console.log('Loading image from:', imageUrl);

    // Create an image element to test loading
    const img = new Image();
    img.onload = function() {
        console.log('Image loaded successfully');
        resultCard.style.backgroundImage = `url('${imageUrl}')`;
    };
    img.onerror = function() {
        console.error('Failed to load image:', imageUrl);
        resultCard.textContent = 'Image not found';
    };
    img.src = imageUrl;

    document.getElementById('question-container').style.display = 'none';
    resultContainer.style.display = 'flex';

    // Generate shareable link but don't display it
    const shareableLink = generateShareableLink(mbtiType);
    
    // Store the shareable link in a data attribute
    document.getElementById('copy-link-btn').dataset.shareableLink = shareableLink;

    console.log('Result displayed for:', mbtiType, 'Instrument:', instrument);
}

function copyShareableLink() {
    const copyLinkBtn = document.getElementById('copy-link-btn');
    const shareableLink = copyLinkBtn.dataset.shareableLink;
    
    navigator.clipboard.writeText(shareableLink).then(function() {
        alert('Link copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

function checkForSharedResult() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedResult = urlParams.get('result');
    if (sharedResult) {
        displayResult(sharedResult);
    }
}

function retakeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    startQuiz();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('retake-quiz-btn').addEventListener('click', retakeQuiz);
    document.getElementById('copy-link-btn').addEventListener('click', copyShareableLink);

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';

    checkForSharedResult();
});
