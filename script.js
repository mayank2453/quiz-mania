// Quiz Application JavaScript
class QuizApp {
    constructor() {
        this.currentScreen = 'category';
        this.selectedCategory = null;
        this.userName = '';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.unansweredQuestions = 0;
        this.timeLeft = 10;
        this.timer = null;
        this.questions = [];
        this.selectedAnswer = null;
        this.isAnswerSelected = false;
        
        this.initializeQuestions();
        this.bindEvents();
        this.showScreen('categoryScreen');
    }

    initializeQuestions() {
        this.questionBank = {
            categories: [
                {
                    id: "javascript",
                    name: "JavaScript",
                    questions: [
                        {
                            id: "js_q1",
                            question: "What is the correct way to declare a variable in JavaScript?",
                            options: [
                                "A. var x = 5;",
                                "B. variable x = 5;",
                                "C. declare x = 5;",
                                "D. x := 5;"
                            ],
                            correctAnswer: "A",
                            timeLimit: 10
                        },
                        {
                            id: "js_q2",
                            question: "Which method is used to add an element to the end of an array?",
                            options: [
                                "A. append()",
                                "B. push()",
                                "C. add()",
                                "D. insert()"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "js_q3",
                            question: "What does '===' operator do in JavaScript?",
                            options: [
                                "A. Assignment",
                                "B. Comparison without type checking",
                                "C. Strict equality comparison",
                                "D. Not equal"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "js_q4",
                            question: "Which of the following is NOT a JavaScript data type?",
                            options: [
                                "A. String",
                                "B. Boolean",
                                "C. Float",
                                "D. Undefined"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "js_q5",
                            question: "How do you create a function in JavaScript?",
                            options: [
                                "A. function myFunction() {}",
                                "B. create myFunction() {}",
                                "C. def myFunction() {}",
                                "D. func myFunction() {}"
                            ],
                            correctAnswer: "A",
                            timeLimit: 10
                        },
                        {
                            id: "js_q6",
                            question: "What is the output of: console.log(typeof null)?",
                            options: [
                                "A. null",
                                "B. undefined",
                                "C. object",
                                "D. boolean"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "js_q7",
                            question: "Which method is used to remove the last element from an array?",
                            options: [
                                "A. remove()",
                                "B. delete()",
                                "C. pop()",
                                "D. shift()"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "js_q8",
                            question: "What is closure in JavaScript?",
                            options: [
                                "A. A way to close the browser",
                                "B. A function with access to outer scope",
                                "C. A type of loop",
                                "D. A JavaScript framework"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "js_q9",
                            question: "How do you check if a variable is an array?",
                            options: [
                                "A. typeof variable === 'array'",
                                "B. variable.isArray()",
                                "C. Array.isArray(variable)",
                                "D. variable instanceof array"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "js_q10",
                            question: "What is the difference between 'let' and 'var'?",
                            options: [
                                "A. No difference",
                                "B. let has block scope, var has function scope",
                                "C. var is newer than let",
                                "D. let is faster than var"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        }
                    ]
                },
                {
                    id: "react",
                    name: "React",
                    questions: [
                        {
                            id: "react_q1",
                            question: "What is JSX in React?",
                            options: [
                                "A. A JavaScript framework",
                                "B. A syntax extension for JavaScript",
                                "C. A state management library",
                                "D. A testing tool"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "react_q2",
                            question: "Which hook is used for managing state in functional components?",
                            options: [
                                "A. useEffect",
                                "B. useState",
                                "C. useContext",
                                "D. useReducer"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "react_q3",
                            question: "What is the purpose of useEffect hook?",
                            options: [
                                "A. Managing state",
                                "B. Handling side effects",
                                "C. Creating components",
                                "D. Styling components"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "react_q4",
                            question: "How do you pass data from parent to child component?",
                            options: [
                                "A. Through state",
                                "B. Through props",
                                "C. Through context",
                                "D. Through refs"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "react_q5",
                            question: "What is a React component?",
                            options: [
                                "A. A function or class that returns JSX",
                                "B. A CSS style",
                                "C. A JavaScript variable",
                                "D. An HTML element"
                            ],
                            correctAnswer: "A",
                            timeLimit: 10
                        },
                        {
                            id: "react_q6",
                            question: "Which method is called when a component is first created?",
                            options: [
                                "A. componentDidUpdate",
                                "B. componentWillUnmount",
                                "C. componentDidMount",
                                "D. render"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "react_q7",
                            question: "What is the virtual DOM?",
                            options: [
                                "A. A real DOM element",
                                "B. A JavaScript representation of the real DOM",
                                "C. A CSS framework",
                                "D. A testing library"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "react_q8",
                            question: "How do you handle events in React?",
                            options: [
                                "A. Using addEventListener",
                                "B. Using event handlers as props",
                                "C. Using jQuery",
                                "D. Using vanilla JavaScript"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "react_q9",
                            question: "What is the purpose of React keys?",
                            options: [
                                "A. To style components",
                                "B. To identify elements uniquely in lists",
                                "C. To manage state",
                                "D. To handle events"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "react_q10",
                            question: "Which hook is used for performance optimization?",
                            options: [
                                "A. useState",
                                "B. useEffect",
                                "C. useMemo",
                                "D. useContext"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        }
                    ]
                },
                {
                    id: "angular",
                    name: "Angular",
                    questions: [
                        {
                            id: "angular_q1",
                            question: "What is Angular?",
                            options: [
                                "A. A JavaScript library",
                                "B. A TypeScript-based framework",
                                "C. A CSS framework",
                                "D. A database system"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q2",
                            question: "What is used to create reusable code in Angular?",
                            options: [
                                "A. Components",
                                "B. Services",
                                "C. Modules",
                                "D. All of the above"
                            ],
                            correctAnswer: "D",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q3",
                            question: "Which decorator is used to define a component in Angular?",
                            options: [
                                "A. @Injectable",
                                "B. @Component",
                                "C. @Directive",
                                "D. @Pipe"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q4",
                            question: "What is dependency injection in Angular?",
                            options: [
                                "A. A design pattern",
                                "B. A way to provide dependencies",
                                "C. A service pattern",
                                "D. All of the above"
                            ],
                            correctAnswer: "D",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q5",
                            question: "Which Angular CLI command creates a new component?",
                            options: [
                                "A. ng create component",
                                "B. ng generate component",
                                "C. ng new component",
                                "D. ng add component"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q6",
                            question: "What is Angular Router used for?",
                            options: [
                                "A. State management",
                                "B. HTTP requests",
                                "C. Navigation",
                                "D. Form validation"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q7",
                            question: "What is NgModule in Angular?",
                            options: [
                                "A. A component",
                                "B. A service",
                                "C. A way to organize code",
                                "D. A directive"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q8",
                            question: "Which lifecycle hook is called after component initialization?",
                            options: [
                                "A. ngOnDestroy",
                                "B. ngOnInit",
                                "C. ngOnChanges",
                                "D. ngAfterViewInit"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q9",
                            question: "What is two-way data binding in Angular?",
                            options: [
                                "A. One-way binding",
                                "B. Event binding",
                                "C. [(ngModel)]",
                                "D. Property binding"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "angular_q10",
                            question: "Which Angular feature is used for form validation?",
                            options: [
                                "A. Reactive Forms",
                                "B. Template-driven Forms",
                                "C. Both A and B",
                                "D. Neither A nor B"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        }
                    ]
                },
                {
                    id: "flutter",
                    name: "Flutter",
                    questions: [
                        {
                            id: "flutter_q1",
                            question: "What programming language is used to develop Flutter apps?",
                            options: [
                                "A. Java",
                                "B. Kotlin",
                                "C. Dart",
                                "D. Swift"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q2",
                            question: "What is a Widget in Flutter?",
                            options: [
                                "A. A function",
                                "B. A class",
                                "C. A building block of UI",
                                "D. A variable"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q3",
                            question: "Which widget is used for layout in Flutter?",
                            options: [
                                "A. Container",
                                "B. Column",
                                "C. Row",
                                "D. All of the above"
                            ],
                            correctAnswer: "D",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q4",
                            question: "What is the difference between StatefulWidget and StatelessWidget?",
                            options: [
                                "A. No difference",
                                "B. StatefulWidget can change state",
                                "C. StatelessWidget is faster",
                                "D. StatefulWidget is deprecated"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q5",
                            question: "Which Flutter command creates a new project?",
                            options: [
                                "A. flutter new",
                                "B. flutter create",
                                "C. flutter init",
                                "D. flutter generate"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q6",
                            question: "What is Hot Reload in Flutter?",
                            options: [
                                "A. A debugging tool",
                                "B. Instant code changes",
                                "C. A testing framework",
                                "D. A deployment method"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q7",
                            question: "Which widget is used for navigation in Flutter?",
                            options: [
                                "A. Router",
                                "B. Navigator",
                                "C. Navigator",
                                "D. Route"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q8",
                            question: "What is pubspec.yaml used for in Flutter?",
                            options: [
                                "A. Styling",
                                "B. Dependencies management",
                                "C. Build configuration",
                                "D. Testing"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q9",
                            question: "Which Flutter widget is used for handling user input?",
                            options: [
                                "A. TextField",
                                "B. InputField",
                                "C. TextInput",
                                "D. FormField"
                            ],
                            correctAnswer: "A",
                            timeLimit: 10
                        },
                        {
                            id: "flutter_q10",
                            question: "What is the main function in Flutter?",
                            options: [
                                "A. Entry point",
                                "B. UI builder",
                                "C. State manager",
                                "D. Event handler"
                            ],
                            correctAnswer: "A",
                            timeLimit: 10
                        }
                    ]
                },
                {
                    id: "general",
                    name: "General Knowledge",
                    questions: [
                        {
                            id: "general_q1",
                            question: "What is the largest planet in our solar system?",
                            options: [
                                "A. Saturn",
                                "B. Jupiter",
                                "C. Neptune",
                                "D. Earth"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                                },
                        {
                            id: "general_q2",
                            question: "Which year did World War II end?",
                            options: [
                                "A. 1944",
                                "B. 1945",
                                "C. 1946",
                                "D. 1947"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "general_q3",
                            question: "What is the capital of Australia?",
                            options: [
                                "A. Sydney",
                                "B. Melbourne",
                                "C. Canberra",
                                "D. Perth"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "general_q4",
                            question: "Who painted the Mona Lisa?",
                            options: [
                                "A. Vincent van Gogh",
                                "B. Pablo Picasso",
                                "C. Leonardo da Vinci",
                                "D. Michelangelo"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "general_q5",
                            question: "What is the smallest country in the world?",
                            options: [
                                "A. Monaco",
                                "B. Vatican City",
                                "C. San Marino",
                                "D. Liechtenstein"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "general_q6",
                            question: "Which element has the chemical symbol 'O'?",
                            options: [
                                "A. Gold",
                                "B. Silver",
                                "C. Oxygen",
                                "D. Iron"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "general_q7",
                            question: "How many continents are there?",
                            options: [
                                "A. 5",
                                "B. 6",
                                "C. 7",
                                "D. 8"
                            ],
                            correctAnswer: "C",
                            timeLimit: 10
                        },
                        {
                            id: "general_q8",
                            question: "What is the longest river in the world?",
                            options: [
                                "A. Amazon River",
                                "B. Nile River",
                                "C. Yangtze River",
                                "D. Mississippi River"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "general_q9",
                            question: "Which planet is known as the Red Planet?",
                            options: [
                                "A. Venus",
                                "B. Mars",
                                "C. Mercury",
                                "D. Jupiter"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        },
                        {
                            id: "general_q10",
                            question: "In which year was the first iPhone released?",
                            options: [
                                "A. 2006",
                                "B. 2007",
                                "C. 2008",
                                "D. 2009"
                            ],
                            correctAnswer: "B",
                            timeLimit: 10
                        }
                    ]
                }
            ]
        };
    }

    bindEvents() {
        // Name input validation
        const nameInput = document.getElementById('fullNameInput');
        nameInput.addEventListener('input', (e) => {
            this.userName = e.target.value.trim();
            this.updateStartButtonState();
        });

        // Topic selection
        document.querySelectorAll('.topic-button').forEach(button => {
            button.addEventListener('click', (e) => {
                document.querySelectorAll('.topic-button').forEach(b => b.classList.remove('selected'));
                button.classList.add('selected');
                this.selectedCategory = button.dataset.category;
                this.updateStartButtonState();
            });
        });

        // Start quiz button
        document.getElementById('startQuizButton').addEventListener('click', () => {
            if (this.userName && this.selectedCategory) {
                this.startQuiz();
            }
        });

        // Quiz rules modal
        document.getElementById('quizRulesLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.showQuizRules();
        });

        document.getElementById('closeRulesModal').addEventListener('click', () => {
            this.hideQuizRules();
        });

        // Close modal when clicking outside
        document.getElementById('quizRulesModal').addEventListener('click', (e) => {
            if (e.target.id === 'quizRulesModal') {
                this.hideQuizRules();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('quizRulesModal');
                if (modal.classList.contains('active')) {
                    this.hideQuizRules();
                }
            }
        });

        // Quiz controls
        document.getElementById('nextButton').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('exitQuizButton').addEventListener('click', () => {
            this.quitQuiz();
        });

        // Skip question functionality
        document.getElementById('skipQuestion').addEventListener('click', () => {
            this.skipCurrentQuestion();
        });

        // Results screen controls
        document.getElementById('playAgainButton').addEventListener('click', () => {
            this.resetQuiz();
        });

        document.getElementById('changeCategoryButton').addEventListener('click', () => {
            this.showScreen('categoryScreen');
            this.resetQuizData();
        });
    }

    updateStartButtonState() {
        const startButton = document.getElementById('startQuizButton');
        const canStart = this.userName.length > 0 && this.selectedCategory;
        startButton.disabled = !canStart;
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId.replace('Screen', '');
    }

    startQuiz() {
        // Capture player name from welcome screen
        const fullNameInput = document.getElementById('fullNameInput');
        this.playerName = fullNameInput ? fullNameInput.value.trim() : '';
        
        // Find the selected category and get its questions
        const selectedCategoryData = this.questionBank.categories.find(cat => cat.id === this.selectedCategory);
        this.questions = selectedCategoryData ? [...selectedCategoryData.questions] : [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.unansweredQuestions = 0;
        
        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    displayQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        const questionText = document.getElementById('questionText');
        const answersContainer = document.getElementById('answersContainer');
        const nextButton = document.getElementById('nextButton');
        
        // Update question text with numbering
        questionText.textContent = `${this.currentQuestionIndex + 1}. ${question.question}`;
        
        // Update progress
        document.getElementById('questionNumber').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestionsDisplay').textContent = this.questions.length;
        
        // Update progress bar
        const progressPercentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progressPercentage}%`;
        
        // Clear and populate answers
        answersContainer.innerHTML = '';
        this.selectedAnswer = null;
        this.isAnswerSelected = false;
        nextButton.disabled = true;
        
        // Update button text based on if this is the last question
        if (this.currentQuestionIndex === this.questions.length - 1) {
            nextButton.textContent = 'Finish';
        } else {
            nextButton.textContent = 'Next';
        }
        
        question.options.forEach((option, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.textContent = option;
            
            answerElement.addEventListener('click', () => {
                if (!this.isAnswerSelected) {
                    this.selectAnswer(index, answerElement);
                }
            });
            
            answersContainer.appendChild(answerElement);
        });
        
        // Reset timer
        this.timeLeft = 10;
        this.updateTimerDisplay();
    }

    selectAnswer(selectedIndex, selectedElement) {
        // Remove previous selections
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Mark as selected
        selectedElement.classList.add('selected');
        this.selectedAnswer = selectedIndex;
        this.isAnswerSelected = true;
        
        // Enable next button
        document.getElementById('nextButton').disabled = false;
    }

    nextQuestion() {
        // Stop timer 
        this.stopTimer();
        
        const question = this.questions[this.currentQuestionIndex];
        const correctAnswerLetter = question.correctAnswer;
        const correctIndex = ['A', 'B', 'C', 'D'].indexOf(correctAnswerLetter);
        
        // Only handle the case when answer was selected
        if (this.isAnswerSelected) {
            // Answer was selected - show correct/incorrect and update score
            document.querySelectorAll('.answer-option').forEach((option, index) => {
                option.classList.add('disabled');
                
                if (index === correctIndex) {
                    option.classList.add('correct');
                } else if (index === this.selectedAnswer && index !== correctIndex) {
                    option.classList.add('incorrect');
                }
            });
            
            // Update score
            if (this.selectedAnswer === correctIndex) {
                this.score++;
                this.correctAnswers++;
            } else {
                this.incorrectAnswers++;
            }
            
            setTimeout(() => {
                this.moveToNextQuestion();
            }, 1500);
        } else {
            // No answer selected - just move to next question
            this.moveToNextQuestion();
        }
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
        this.isAnswerSelected = false;
        
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
            this.startTimer();
        }
    }

    skipCurrentQuestion() {
        this.stopTimer();
        this.unansweredQuestions++;
        this.moveToNextQuestion();
    }

    startTimer() {
        this.timeLeft = 10;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.stopTimer(); // Stop timer immediately
                this.handleTimeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimerDisplay() {
        const timerDisplay = document.getElementById('timerDisplay');
        // Ensure timer never shows negative values
        const displayTime = Math.max(0, this.timeLeft);
        const formattedTime = displayTime < 10 ? `0:0${displayTime}` : `0:${displayTime}`;
        timerDisplay.textContent = formattedTime;
    }

    handleTimeUp() {
        if (!this.isAnswerSelected) {
            this.unansweredQuestions++;
            
            const question = this.questions[this.currentQuestionIndex];
            const correctAnswerLetter = question.correctAnswer;
            const correctIndex = ['A', 'B', 'C', 'D'].indexOf(correctAnswerLetter);
            
            // Show correct answer
            document.querySelectorAll('.answer-option').forEach((option, index) => {
                option.classList.add('disabled');
                if (index === correctIndex) {
                    option.classList.add('correct');
                }
            });
            
            // Auto-advance to next question after showing correct answer
            setTimeout(() => {
                this.moveToNextQuestion();
            }, 1500);
        } else {
            // Answer was selected but time ran out - call nextQuestion to show results
            this.nextQuestion();
        }
    }

    showResults() {
        this.stopTimer();
        this.showScreen('resultsScreen');
        
        // Calculate results
        const totalQuestions = this.questions.length;
        const percentage = Math.round((this.score / totalQuestions) * 100);
        
        // Update user name and avatar if available
        const userName = this.playerName || 'Richard Joe Freds';
        document.getElementById('userName').textContent = userName;
        
        // Update user avatar with first initial
        const userAvatar = document.querySelector('#resultsScreen .user-avatar');
        if (userAvatar) {
            const firstInitial = userName.charAt(0).toUpperCase();
            userAvatar.textContent = firstInitial;
        }
        
        // Update results display
        document.getElementById('totalQuestions').textContent = totalQuestions;
        document.getElementById('scorePercentage').textContent = `${percentage}%`;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('incorrectAnswers').textContent = this.incorrectAnswers;
        document.getElementById('unansweredQuestions').textContent = this.unansweredQuestions;
        
        // Performance message
        const performanceMessage = this.getPerformanceMessage(percentage);
        document.getElementById('performanceMessage').textContent = performanceMessage;
        
        // Results icon is always the checkmark in the new design
        const resultsIcon = document.querySelector('.results-icon');
        resultsIcon.textContent = '✓';
    }

    getPerformanceMessage(percentage) {
        if (percentage >= 90) {
            return "Outstanding! You're a quiz master! 🌟";
        } else if (percentage >= 80) {
            return "Great job! Excellent performance! 🎯";
        } else if (percentage >= 70) {
            return "Well done! Good knowledge! 👏";
        } else if (percentage >= 60) {
            return "Not bad! Room for improvement! 💪";
        } else if (percentage >= 50) {
            return "Keep practicing! You can do better! 📖";
        } else {
            return "Don't give up! Practice makes perfect! 🚀";
        }
    }

    resetQuiz() {
        this.resetQuizData();
        this.startQuiz();
    }

    resetQuizData() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.unansweredQuestions = 0;
        this.selectedAnswer = null;
        this.isAnswerSelected = false;
        this.stopTimer();
    }

    quitQuiz() {
        this.stopTimer();
        this.showScreen('categoryScreen');
        this.resetQuizData();
        
        // Clear form data
        document.getElementById('fullNameInput').value = '';
        document.querySelectorAll('.topic-button').forEach(button => {
            button.classList.remove('selected');
        });
        this.selectedCategory = null;
        this.userName = '';
        this.updateStartButtonState();
    }

    showQuizRules() {
        const modal = document.getElementById('quizRulesModal');
        modal.classList.add('active');
        // Prevent scrolling on body when modal is open
        document.body.style.overflow = 'hidden';
    }

    hideQuizRules() {
        const modal = document.getElementById('quizRulesModal');
        modal.classList.remove('active');
        // Restore scrolling on body
        document.body.style.overflow = 'auto';
    }
}

// Initialize the quiz app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
